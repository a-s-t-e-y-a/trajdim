import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: any;
}

// GET /businesses
export const getBusinesses = async (
  _req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const businesses = await prisma.business.findMany();
    res.status(200).json(businesses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving businesses." });
  }
};

// GET /businesses/:id
export const getBusinessById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const business = await prisma.business.findUnique({ where: { id } });

    if (!business) {
      res.status(404).json({ error: "Business not found." });
    } else {
      res.status(200).json(business);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the business." });
  }
};

// POST /businesses
export const createBusiness = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const {
    name,
    website,
    email,
    phone_no,
    sender_id,
    address,
    bank_name,
    bank_bsb,
    account,
    gst_option,
  } = req.body;

  try {
    const business = await prisma.business.create({
      data: {
        user: req.user.id,
        name,
        website,
        email,
        phone_no,
        sender_id,
        address,
        bank_name,
        bank_bsb,
        account,
        gst_option,
      },
    });

    res.status(201).json(business);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the business." });
  }
};

// PATCH /businesses/:id
export const updateBusiness = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {
    name,
    website,
    email,
    phone_no,
    sender_id,
    address,
    bank_name,
    bank_bsb,
    account,
    gst_option,
  } = req.body;

  try {
    const updatedBusiness = await prisma.business.update({
      where: { id },
      data: {
        user: req.user.id,
        name,
        website,
        email,
        phone_no,
        sender_id,
        address,
        bank_name,
        bank_bsb,
        account,
        gst_option,
      },
    });

    res.status(200).json(updatedBusiness);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the business." });
  }
};

// DELETE /businesses/:id
export const deleteBusiness = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedBusiness = await prisma.business.delete({ where: { id } });

    res.status(200).json(deletedBusiness);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the business." });
  }
};

// Controller to create otherDetails
export const createOtherDetails = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { country, currency, timeZone, salaryRelease, trackStaff } = req.body;

  try {
    const otherDetails = await prisma.otherDetails.create({
      data: {
        user: req.user.id,
        country,
        currency,
        timeZone,
        salaryRelease,
        trackStaff,
      },
    });

    res.status(201).json(otherDetails);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the other details." });
  }
};

// Controller to update otherDetails
export const updateOtherDetails = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { country, currency, timeZone, salaryRelease, trackStaff } = req.body;

  try {
    const updatedOtherDetails = await prisma.otherDetails.update({
      where: { id },
      data: {
        user: req.user.id,
        country,
        currency,
        timeZone,
        salaryRelease,
        trackStaff,
      },
    });

    res.status(200).json(updatedOtherDetails);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the other details." });
  }
};

// Controller to delete otherDetails
export const deleteOtherDetails = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedOtherDetails = await prisma.otherDetails.delete({
      where: { id },
    });

    res.status(200).json(deletedOtherDetails);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the other details." });
  }
};
export const getOtherDetails = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const otherDetails = await prisma.otherDetails.findMany({
      where: { user: req.user.id },
    });

    res.status(200).json(otherDetails);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the other details." });
  }
};
export const getOtherDetailsById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const otherDetails = await prisma.otherDetails.findUnique({
      where: { id },
    });

    if (!otherDetails) {
      res.status(404).json({ error: "Other details not found." });
      return;
    }

    res.status(200).json(otherDetails);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the other details." });
  }
};
