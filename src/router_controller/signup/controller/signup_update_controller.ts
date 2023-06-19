import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../../../config/helper";
export const updatePassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const { password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the password." });
  }
};

// Update other user information
export const updateUserInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const { name, email, phone_no } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, phone_no },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "An error occurred while updating the user information.",
      });
  }
};
