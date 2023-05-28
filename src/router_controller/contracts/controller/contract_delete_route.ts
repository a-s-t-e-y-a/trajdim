import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}
export const deleteContract = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    await prisma.contracts.delete({
      where: {
        id: id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting contract:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
