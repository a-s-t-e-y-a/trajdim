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
    const { items,customer,service, ...rest } = req.body;
    const data1 = await prisma.work_order.create({
      data: {
        user: req.user.id,
        date: new Date(),
        customer: { connect: { id: customer } },
        service: { connect :{id:service}},
        items: {
          create: items || [],
        },
        ...rest,
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
