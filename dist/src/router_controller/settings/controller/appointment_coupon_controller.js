"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET /appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await prisma.appointment.findMany();
        res.status(200).json(appointments);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving appointments." });
    }
};
exports.getAppointments = getAppointments;
// GET /appointments/:id
const getAppointmentById = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await prisma.appointment.findUnique({ where: { id } });
        if (!appointment) {
            res.status(404).json({ error: "Appointment not found." });
        }
        else {
            res.status(200).json(appointment);
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving the appointment." });
    }
};
exports.getAppointmentById = getAppointmentById;
// POST /appointments
const createAppointment = async (req, res) => {
    const { time } = req.body;
    try {
        const appointment = await prisma.appointment.create({
            data: { user: req.user.id, time },
        });
        res.status(201).json(appointment);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while creating the appointment." });
    }
};
exports.createAppointment = createAppointment;
// PATCH /appointments/:id
const updateAppointment = async (req, res) => {
    const { id } = req.params;
    const { time } = req.body;
    try {
        const updatedAppointment = await prisma.appointment.update({
            where: { id },
            data: { time },
        });
        res.status(200).json(updatedAppointment);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while updating the appointment." });
    }
};
exports.updateAppointment = updateAppointment;
// DELETE /appointments/:id
const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAppointment = await prisma.appointment.delete({
            where: { id },
        });
        res.status(200).json(deletedAppointment);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while deleting the appointment." });
    }
};
exports.deleteAppointment = deleteAppointment;
//# sourceMappingURL=appointment_coupon_controller.js.map