import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const teamsGetSingle = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const teams = await prisma.team.findMany({
      where: {
        user: req.user.id,
        id:req.params.id
      },
      include: {
        schedule: true,
        access: true,
      },
    });

    res.status(200).json({
      message: "Teams fetched successfully",
      data: teams,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

