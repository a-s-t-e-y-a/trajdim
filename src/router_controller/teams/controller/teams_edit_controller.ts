import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const teamsEdit = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  const { schedule, access, ...rest } = req.body;
  try {
    const team = await prisma.team.update({
      where: {
        id: req.params.id,
      },
      data: {
        schedule: {
          deleteMany: {}, // Delete all existing schedule records
          create: schedule || [], // Create new schedule records if provided
        },
        access: {
          deleteMany: {}, // Delete all existing access records
          create: access || [], // Create new access records if provided
        },
        ...rest,
      },
      include: {
        schedule: true,
        access: true,
      },
    });

    res.status(200).json({
      message: "Team updated successfully",
      data: team,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

