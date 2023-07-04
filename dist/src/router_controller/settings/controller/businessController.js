"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtherDetailsById = exports.getOtherDetails = exports.deleteOtherDetails = exports.updateOtherDetails = exports.createOtherDetails = exports.deleteBusiness = exports.updateBusiness = exports.createBusiness = exports.getBusinessById = exports.getBusinesses = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET /businesses
const getBusinesses = async (_req, res) => {
    try {
        const businesses = await prisma.business.findMany();
        res.status(200).json(businesses);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving businesses." });
    }
};
exports.getBusinesses = getBusinesses;
// GET /businesses/:id
const getBusinessById = async (req, res) => {
    const { id } = req.params;
    try {
        const business = await prisma.business.findUnique({ where: { id } });
        if (!business) {
            res.status(404).json({ error: "Business not found." });
        }
        else {
            res.status(200).json(business);
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving the business." });
    }
};
exports.getBusinessById = getBusinessById;
// POST /businesses
const createBusiness = async (req, res) => {
    const { name, website, email, phone_no, sender_id, address, bank_name, bank_bsb, account, gst_option, } = req.body;
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while creating the business." });
    }
};
exports.createBusiness = createBusiness;
// PATCH /businesses/:id
const updateBusiness = async (req, res) => {
    const { id } = req.params;
    const { name, website, email, phone_no, sender_id, address, bank_name, bank_bsb, account, gst_option, } = req.body;
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while updating the business." });
    }
};
exports.updateBusiness = updateBusiness;
// DELETE /businesses/:id
const deleteBusiness = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBusiness = await prisma.business.delete({ where: { id } });
        res.status(200).json(deletedBusiness);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while deleting the business." });
    }
};
exports.deleteBusiness = deleteBusiness;
// Controller to create otherDetails
const createOtherDetails = async (req, res) => {
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while creating the other details." });
    }
};
exports.createOtherDetails = createOtherDetails;
// Controller to update otherDetails
const updateOtherDetails = async (req, res) => {
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while updating the other details." });
    }
};
exports.updateOtherDetails = updateOtherDetails;
// Controller to delete otherDetails
const deleteOtherDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOtherDetails = await prisma.otherDetails.delete({
            where: { id },
        });
        res.status(200).json(deletedOtherDetails);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while deleting the other details." });
    }
};
exports.deleteOtherDetails = deleteOtherDetails;
const getOtherDetails = async (req, res) => {
    try {
        const otherDetails = await prisma.otherDetails.findMany({
            where: { user: req.user.id },
        });
        res.status(200).json(otherDetails);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving the other details." });
    }
};
exports.getOtherDetails = getOtherDetails;
const getOtherDetailsById = async (req, res) => {
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while retrieving the other details." });
    }
};
exports.getOtherDetailsById = getOtherDetailsById;
//# sourceMappingURL=businessController.js.map