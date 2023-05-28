import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}
export const getContracts = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const contracts = await prisma.contracts.findMany({
      where: {
        user: req.user.id,
      },
    });

    res.status(200).json(contracts);
  } catch (error) {
    console.error("Error retrieving contracts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
