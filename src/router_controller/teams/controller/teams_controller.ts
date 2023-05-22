import prisma from "../../../config/helper";
import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const teamsPost = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  const { schedule, access, ...rest } = req.body;
  try {
    const data1 = await prisma.team.create({
      data: {
        user: req.user.id,

        schedule: {
          create: schedule || [],
        },

        access: {
          create: access || [],
        },
        ...rest,
      },
      include: {
        schedule: true,
        access: true,
      },
    });
    res.status(200).json({
      message: "teams created successfuly",
      data: data1,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
