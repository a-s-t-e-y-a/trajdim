import prisma from "../../../config/helper";
import { Request, Response } from "express";
import { Promise } from "bluebird";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const servicesDelete = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  const { serviceId } = req.params;

  try {
    // Delete the service and related data
    await prisma.services.delete({
      where: {
        id: serviceId,
      },
    });

    // Delete related data from other tables
    await prisma.term.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.availableDays.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.location.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.coustmer_details.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.questionSchema.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.assignTo.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.estimate.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });

    res.status(200).json({
      message: "Service and related data deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
