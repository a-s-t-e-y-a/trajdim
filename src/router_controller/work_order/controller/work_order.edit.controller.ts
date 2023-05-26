import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const work_orderPUT = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const { id, items, ...rest } = req.body;
    const data1 = await prisma.work_order.update({
      where: { id:req.params.id }, // Assuming the work order ID is provided in the request body
      data: {
        user: req.user.id,
        items: {
          create: items || [],
        },
        ...rest,
      },
    });
    res.status(200).json({
      message: "work order updated successfully",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
