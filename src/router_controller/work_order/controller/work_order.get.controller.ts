import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const work_orderGET = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params; 
    const workOrder = await prisma.work_order.findUnique({
      where: { id:req.params.id },
      include: {
        items: true, 
      },
    });

    if (!workOrder) {
      return res.status(404).json({
        message: "work order not found",
      });
    }

    res.status(200).json({
      message: "work order retrieved successfully",
      data: workOrder,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
