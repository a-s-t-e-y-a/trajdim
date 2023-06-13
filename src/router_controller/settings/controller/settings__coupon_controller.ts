import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const getCoupons = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const coupons = await prisma.coupon.findMany();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCouponById = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const coupon = await prisma.coupon.findUnique({
      where: {
        id: id,
      },
    });

    if (coupon) {
      res.status(200).json(coupon);
    } else {
      res.status(404).json({ error: 'Coupon not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { name, code, discount, specific_services, services_selected, expire_selected, expire_on, total_no_selecte, total_no } = req.body;
  const user = req.user.id;

  try {
    const coupon = await prisma.coupon.create({
      data: {
        user,
        name,
        code,
        discount,
        specific_services,
        services_selected,
        expire_selected,
        expire_on,
        total_no_selecte,
        total_no,
      },
    });

    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, code, discount, specific_services, services_selected, expire_selected, expire_on, total_no_selecte, total_no } = req.body;
  const user = req.user?.id;

  try {
    const updatedCoupon = await prisma.coupon.update({
      where: {
        id: id,
      },
      data: {
        user,
        name,
        code,
        discount,
        specific_services,
        services_selected,
        expire_selected,
        expire_on,
        total_no_selecte,
        total_no,
      },
    });

    if (updatedCoupon) {
      res.status(200).json(updatedCoupon);
    } else {
      res.status(404).json({ error: 'Coupon not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.coupon.delete({
      where: {
        id: id,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
