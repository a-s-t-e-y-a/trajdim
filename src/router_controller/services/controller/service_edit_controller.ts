import prisma from "../../../config/helper";
import { Request, Response } from "express";
import { Promise } from "bluebird";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const servicesEdit = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  const { serviceId } = req.params;
  const {
    term,
    AvailableDays,
    Location,
    Coustmer_details,
    QuestionSchema,
    assignTo,
    Estimate,
    ...rest
  } = req.body;

  try {
    // Update the service
    const updatedService = await prisma.services.update({
      where: {
        id: serviceId,
      },
      data: {
        ...rest,
      },
    });

    // Update related data
    await prisma.term.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.term.createMany({
      data: term.map((t) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...t,
      })),
    });

    await prisma.availableDays.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.availableDays.createMany({
      data: AvailableDays.map((a) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...a,
      })),
    });

    await prisma.location.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.location.createMany({
      data: Location.map((l) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...l,
      })),
    });

    await prisma.coustmer_details.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.coustmer_details.createMany({
      data: Coustmer_details.map((c) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...c,
      })),
    });

    await prisma.questionSchema.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.questionSchema.createMany({
      data: QuestionSchema.map((q) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...q,
      })),
    });

    await prisma.assignTo.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.assignTo.createMany({
      data: assignTo.map((a) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...a,
      })),
    });

    await prisma.estimate.deleteMany({
      where: {
        ServiceId: serviceId,
      },
    });
    await prisma.estimate.createMany({
      data: Estimate.map((e) => ({
        user: req.user.id,
        ServiceId: serviceId,
        ...e,
      })),
    });

    res.status(200).json({
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
