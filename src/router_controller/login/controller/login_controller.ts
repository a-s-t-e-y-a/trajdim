import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../../../config/helper";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });

    if (data.length > 0) {
      const user = data[0];

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(400).send(err.message);
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              name: user.name,
            },
            process.env.SECRET_KEY || ""
          );

          res.status(200).json({
            message: "User logged in successfully",
            data: token,
          });
        } else {
          res.status(404).json({
            message: "User credentials do not match",
            data: [],
          });
        }
      });
    } else {
      res.status(404).json({
        message: "User not found",
        data: [],
      });
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
