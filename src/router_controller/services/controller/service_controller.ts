import prisma from "../../../config/helper";
import { Request, Response } from "express";

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
    const data = await prisma.services.create({
      data: {
        user: req.user.id,
        term: {
          create: term || [],
        },
        AvailableDays: {
          create: AvailableDays || [],
        },
        Location: {
          create: Location || [],
        },
        Coustmer_details: {
          create: Coustmer_details || [],
        },
        QuestionSchema: {
          create: QuestionSchema || [],
        },
        assignTo: {
          create: assignTo || [],
        },
        Estimate: {
          create: Estimate || [],
        },
        ...rest,
      },
      include: {
        term: true,
        AvailableDays: true,
        Location: true,
        Coustmer_details: true,
        QuestionSchema: true,
        assignTo: true,
        Estimate: true,
      },
    });

    res.status(200).json({
      message: "Service created successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
