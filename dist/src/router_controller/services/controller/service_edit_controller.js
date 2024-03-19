"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editEstimate = exports.editAssignTo = exports.editCustomerDetails = exports.editLocation = exports.editAvailableDays = exports.editTerm = exports.editServices = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const bluebird_1 = require("bluebird");
const editServices = async (req, res) => {
    const { id } = req.params;
    const { user, ServicesName, Description, Color, Photo } = req.body;
    try {
        const updatedService = await helper_1.default.services.update({
            where: { id },
            data: { user, ServicesName, Description, Color, Photo },
        });
        res.status(200).json(updatedService);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the service." });
    }
};
exports.editServices = editServices;
const editTerm = async (req, res) => {
    const { id } = req.params;
    const { ContractId, ServiceId, Radio } = req.body;
    try {
        const updatedTerm = await helper_1.default.term.update({
            where: { id },
            data: { ContractId, ServiceId, Radio },
        });
        res.status(200).json(updatedTerm);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the term." });
    }
};
exports.editTerm = editTerm;
const editAvailableDays = async (req, res) => {
    const { id } = req.params;
    const { ServiceId, details, rangeRadio, rangeTime, hoursRange, Recurring, RecurringTime, } = req.body;
    try {
        const updatedAvailableDays = await helper_1.default.availableDays.update({
            where: { id },
            data: {
                ServiceId,
                details,
                rangeRadio,
                rangeTime,
                hoursRange,
                Recurring,
                RecurringTime,
            },
        });
        res.status(200).json(updatedAvailableDays);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the available days." });
    }
};
exports.editAvailableDays = editAvailableDays;
const editLocation = async (req, res) => {
    const { id } = req.params;
    const { ServiceId, arrayOfObjCountry } = req.body;
    try {
        const updatedLocation = await helper_1.default.location.update({
            where: { id },
            data: { ServiceId, arrayOfObjCountry },
        });
        res.status(200).json(updatedLocation);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the location." });
    }
};
exports.editLocation = editLocation;
const editCustomerDetails = async (req, res) => {
    const { id } = req.params;
    const { questionDetails } = req.body;
    try {
        const updatedCustomerDetails = await bluebird_1.Promise.all(questionDetails.map(async (customerDetailsItem) => {
            if (customerDetailsItem.id) {
                const existingCustomer = await helper_1.default.coustmer_details.findFirst({
                    where: {
                        id: customerDetailsItem.id,
                    },
                });
                if (existingCustomer) {
                    const updatedCustomer = await helper_1.default.coustmer_details.update({
                        where: {
                            id: customerDetailsItem.id,
                        },
                        data: {
                            ServiceId: customerDetailsItem.ServiceId,
                            questionDetails: customerDetailsItem.questionDetails,
                        },
                    });
                    return updatedCustomer;
                }
            }
            else {
                const newCustomer = await helper_1.default.coustmer_details.create({
                    data: {
                        ServiceId: customerDetailsItem.ServiceId,
                        questionDetails: customerDetailsItem.questionDetails,
                    },
                });
                return newCustomer;
            }
        }));
        res.status(200).json(updatedCustomerDetails);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Unable to update the customer details." });
    }
};
exports.editCustomerDetails = editCustomerDetails;
const editAssignTo = async (req, res) => {
    const { id } = req.params;
    const { ServiceId, Assign } = req.body;
    try {
        const updatedAssignTo = await helper_1.default.assignTo.update({
            where: { id },
            data: { ServiceId, Assign },
        });
        res.status(200).json(updatedAssignTo);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the assignee." });
    }
};
exports.editAssignTo = editAssignTo;
const editEstimate = async (req, res) => {
    const { id } = req.params;
    const { ServiceId, Customer_will_select, Services, Discount, Tax, Recurring, Discount_per_time, } = req.body;
    try {
        const updatedEstimate = await helper_1.default.estimate.update({
            where: { id },
            data: {
                ServiceId,
                Customer_will_select,
                Services,
                Discount,
                Tax,
                Recurring,
                Discount_per_time,
            },
        });
        res.status(200).json(updatedEstimate);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update the estimate." });
    }
};
exports.editEstimate = editEstimate;
//# sourceMappingURL=service_edit_controller.js.map