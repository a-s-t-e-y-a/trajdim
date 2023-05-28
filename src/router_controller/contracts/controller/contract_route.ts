import prisma from '../../../config/helper'
import { Request, Response } from "express";


interface AuthenticatedRequest extends Request {
  user?: any;
}
export const createContract = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const {name, created_by, file_name, signed_no, dismissed_no } = req.body;

    const newContract = await prisma.contracts.create({
      data: {
        user:req.user.id,
        name,
        created_by,
        file_name,
        signed_no,
        dismissed_no,
        created_at: new Date().toISOString(), // Set created_at to current date and time
      },
    });

    res.status(201).json(newContract);
  } catch (error) {
    console.error("Error creating contract:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

