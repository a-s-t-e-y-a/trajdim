import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const coustmerGet = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const data1 = await prisma.coustmer.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "coustmer get successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
