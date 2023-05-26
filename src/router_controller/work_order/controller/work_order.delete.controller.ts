import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const work_orderDELETE = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const d1 = await prisma.work_order.delete({
      where: { id: req.params.id },
      include: {
        items: true,
      },
    });
    res.status(200).json({
      message: "work order deleted successfully",
      data: d1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
