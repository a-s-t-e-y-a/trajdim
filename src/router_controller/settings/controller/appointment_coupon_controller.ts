import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: any;
}

// GET /appointments
export const getAppointments = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.status(200).json(appointments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving appointments." });
  }
};

// GET /appointments/:id
export const getAppointmentById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const appointment = await prisma.appointment.findUnique({ where: { id } });

    if (!appointment) {
      res.status(404).json({ error: "Appointment not found." });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the appointment." });
  }
};

// POST /appointments
export const createAppointment = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { time } = req.body;

  try {
    const appointment = await prisma.appointment.create({
      data: { user: req.user.id, time },
    });
    res.status(201).json(appointment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the appointment." });
  }
};

// PATCH /appointments/:id
export const updateAppointment = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { time } = req.body;

  try {
    const updatedAppointment = await prisma.appointment.update({
      where: { id },
      data: { time },
    });

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the appointment." });
  }
};

// DELETE /appointments/:id
export const deleteAppointment = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedAppointment = await prisma.appointment.delete({
      where: { id },
    });

    res.status(200).json(deletedAppointment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the appointment." });
  }
};
