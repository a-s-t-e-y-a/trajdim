import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../../../config/helper";
export const signupPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    bcrypt.hash(req.body.password, 10, async (error, hash) => {
      if (error) {
        res.status(500).send(error);
      } else {
        try {
          const info = await prisma.user.create({
            data: {
              ...req.body,
              password: hash,
            },
          });
          res.status(200).json({
            message: "User created successfully",
            data: info,
          });
        } catch (error: any) {
          res.status(500).send(error.message);
        }
      }
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  signupPost,
};
