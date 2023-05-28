import prisma from "../../../config/helper";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}
export const updateContract = async (
    req: AuthenticatedRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

  
      const updatedContract = await prisma.contracts.update({
        where: {
          id: id,
        },
        data: {
         ...req.body
        },
      });
  
      res.status(200).json(updatedContract);
    } catch (error) {
      console.error("Error updating contract:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  