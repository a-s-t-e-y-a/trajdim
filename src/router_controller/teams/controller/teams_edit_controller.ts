import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const teamEdit = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const data1 = await prisma.team.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
    res.status(200).json({
      message: "teams updated successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
