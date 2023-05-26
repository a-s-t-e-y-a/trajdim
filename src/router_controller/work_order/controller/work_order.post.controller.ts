import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const work_orderPOST = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const data1 = await prisma.work_order.create({
      data: {
        ...req.body,
        user: req.user.id,
      },
    });
    res.status(200).json({
      message: "work order created successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
