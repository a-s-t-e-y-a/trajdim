import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const coustmerEdit = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const data1 = await prisma.coustmer.update({
      where: {
        id: req.params.id,
      },
      data:{
        ...req.body
      }
    });
    res.status(200).json({
      message: "coustmer updated successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
