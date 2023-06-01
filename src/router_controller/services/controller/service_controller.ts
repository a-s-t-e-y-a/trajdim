import prisma from "../../../config/helper";
import { Request, Response } from "express";
import { Promise } from "bluebird";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const servicesPost = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
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
    const services = await prisma.services.create({
      data: {
        user: req.user.id,
        ...rest,
      },
    });

    const Term = await Promise.map(term, async (termItem) => {
      return prisma.term.create({
        data: {
          ServiceId: services.id,
          ...termItem,
        },
      });
    });

    const availableDays = await Promise.map(
      AvailableDays,
      async (AvailableDaysItem) => {
        return prisma.availableDays.create({
          data: {
            ServiceId: services.id,
            ...AvailableDaysItem,
          },
        });
      }
    );

    const location = await Promise.map(Location, async (LocationItem) => {
      return prisma.location.create({
        data: {
          ServiceId: services.id,
          ...LocationItem,
        },
      });
    });

    const coustmer_details = await Promise.map(
      Coustmer_details,
      async (Coustmer_detailsItem) => {
        return prisma.coustmer_details.create({
          data: {
            ServiceId: services.id,
            ...Coustmer_detailsItem,
          },
        });
      }
    );

    const AssignTo = await Promise.map(assignTo, async (assignToItem) => {
      return prisma.assignTo.create({
        data: {
          ServiceId: services.id,
          ...assignToItem,
        },
      });
    });

    const estimate = await Promise.map(Estimate, async (EstimateItem) => {
      return prisma.estimate.create({
        data: {
          ServiceId: services.id,
          ...EstimateItem,
        },
      });
    });
    console.log(Term);
    res.status(200).json({
      message: "Service created successfully",
      data: {
        services,
        Term,
        availableDays,
        location,
        coustmer_details,
        AssignTo,
        estimate,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
