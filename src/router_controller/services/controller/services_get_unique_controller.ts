import prisma from "../../../config/helper";
import { Request, Response } from "express";
import { Promise } from "bluebird";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const servicesGetUnique = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const services = await prisma.services.findMany({
      where: {
        id: req.params.id,
        user: req.user.id,
      },
    });

    const termPromises = services.map((service) =>
      prisma.term.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const termResults = await Promise.all(termPromises);

    const availableDaysPromises = services.map((service) =>
      prisma.availableDays.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const availableDaysResults = await Promise.all(availableDaysPromises);

    const locationPromises = services.map((service) =>
      prisma.location.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const locationResults = await Promise.all(locationPromises);

    const coustmerDetailsPromises = services.map((service) =>
      prisma.coustmer_details.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const coustmerDetailsResults = await Promise.all(coustmerDetailsPromises);

    // const questionSchemaPromises = services.map((service) =>
    //   prisma.questionSchema.findMany({
    //     where: {
    //       ServiceId: service.id,
    //     },
    //   })
    // );
    // const questionSchemaResults = await Promise.all(questionSchemaPromises);

    const assignToPromises = services.map((service) =>
      prisma.assignTo.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const assignToResults = await Promise.all(assignToPromises);

    const estimatePromises = services.map((service) =>
      prisma.estimate.findMany({
        where: {
          ServiceId: service.id,
        },
      })
    );
    const estimateResults = await Promise.all(estimatePromises);

    const serviceData = services.map((service, index) => ({
      services: service,
      term: termResults[index],
      availableDays: availableDaysResults[index],
      location: locationResults[index],
      coustmer_details: coustmerDetailsResults[index],
      // questionSchema: questionSchemaResults[index],
      assignTo: assignToResults[index],
      estimate: estimateResults[index],
    }));

    res.status(200).json({
      message: "Service data retrieved successfully",
      data: serviceData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
export const coustmerGet = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  const id = req.params.id;
  console.log(id)
  try {
    const coustmer =await prisma.coustmer_details.findMany({
      where: {
        ServiceId: id,
      },
    });
    console.log(coustmer)
    res.status(200).json({
      message: "Coustmer data send",
      data: coustmer,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
