import prisma from "../../../config/helper";
import { Request, Response } from "express";
import { Promise } from "bluebird";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const editServices = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { user, ServicesName, Description, Color, Photo } = req.body;

  try {
    const updatedService = await prisma.services.update({
      where: { id },
      data: { user, ServicesName, Description, Color, Photo },
    });

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the service.' });
  }
};

export const editTerm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ContractId, ServiceId, Radio } = req.body;

  try {
    const updatedTerm = await prisma.term.update({
      where: { id },
      data: { ContractId, ServiceId, Radio },
    });

    res.status(200).json(updatedTerm);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the term.' });
  }
};
export const editAvailableDays = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ServiceId, details, rangeRadio, rangeTime, hoursRange, Recurring, RecurringTime } = req.body;

  try {
    const updatedAvailableDays = await prisma.availableDays.update({
      where: { id },
      data: { ServiceId, details, rangeRadio, rangeTime, hoursRange, Recurring, RecurringTime },
    });

    res.status(200).json(updatedAvailableDays);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the available days.' });
  }
};
export const editLocation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ServiceId, arrayOfObjCountry } = req.body;

  try {
    const updatedLocation = await prisma.location.update({
      where: { id },
      data: { ServiceId, arrayOfObjCountry },
    });

    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the location.' });
  }
};
export const editCustomerDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ServiceId, questionDetails } = req.body;

  try {
    const updatedCustomerDetails = await prisma.coustmer_details.update({
      where: { id },
      data: { ServiceId, questionDetails },
    });

    res.status(200).json(updatedCustomerDetails);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the customer details.' });
  }
};
export const editAssignTo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ServiceId, Assign } = req.body;

  try {
    const updatedAssignTo = await prisma.assignTo.update({
      where: { id },
      data: { ServiceId, Assign },
    });

    res.status(200).json(updatedAssignTo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the assignee.' });
  }
};
export const editEstimate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ServiceId, Customer_will_select, Services, Discount, Tax, Recurring, Discount_per_time } = req.body;

  try {
    const updatedEstimate = await prisma.estimate.update({
      where: { id },
      data: { ServiceId, Customer_will_select, Services, Discount, Tax, Recurring, Discount_per_time },
    });

    res.status(200).json(updatedEstimate);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the estimate.' });
  }
};
