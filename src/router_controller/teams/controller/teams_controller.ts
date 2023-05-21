import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const teamsPost = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const data1 = await prisma.teams.create({
      data: {
        ...req.body.data,
        user: req.user.id,
      },
    });
    res.status(200).json({
      message: "teams created successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
