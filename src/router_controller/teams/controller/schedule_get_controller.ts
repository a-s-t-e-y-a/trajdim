import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const teamsGetSchdule = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const teams = await prisma.schedule.update({
      where: {
        id: req.params.id,
      },
  data:{
  ...req.body
  }
    });

    res.status(200).json({
      message: "schedule update successfully",
      data: teams,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
