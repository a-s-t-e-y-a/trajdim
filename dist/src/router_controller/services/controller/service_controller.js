"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesPost = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const bluebird_1 = require("bluebird");
const parser_1 = require("../../../utlis/parser");
const servicesPost = async (req, res) => {
    const _a = (0, parser_1.parseJsonData)(req.body.data), { term, AvailableDays, Location, Coustmer_details, QuestionSchema, assignTo, Estimate } = _a, rest = __rest(_a, ["term", "AvailableDays", "Location", "Coustmer_details", "QuestionSchema", "assignTo", "Estimate"]);
    const image = req.file;
    try {
        const services = await helper_1.default.services.create({
            data: Object.assign(Object.assign({ user: req.user.id }, rest), { Photo: image.filename }),
        });
        const Term = await bluebird_1.Promise.map(term, async (termItem) => {
            return helper_1.default.term.create({
                data: Object.assign({ ServiceId: services.id }, termItem),
            });
        });
        const availableDays = await bluebird_1.Promise.map(AvailableDays, async (AvailableDaysItem) => {
            return helper_1.default.availableDays.create({
                data: Object.assign({ ServiceId: services.id }, AvailableDaysItem),
            });
        });
        const location = await bluebird_1.Promise.map(Location, async (LocationItem) => {
            return helper_1.default.location.create({
                data: Object.assign({ ServiceId: services.id }, LocationItem),
            });
        });
        const coustmer_details = await bluebird_1.Promise.map(Coustmer_details, async (Coustmer_detailsItem) => {
            return helper_1.default.coustmer_details.create({
                data: Object.assign({ ServiceId: services.id }, Coustmer_detailsItem),
            });
        });
        const AssignTo = await bluebird_1.Promise.map(assignTo, async (assignToItem) => {
            return helper_1.default.assignTo.create({
                data: Object.assign({ ServiceId: services.id }, assignToItem),
            });
        });
        const estimate = await bluebird_1.Promise.map(Estimate, async (EstimateItem) => {
            return helper_1.default.estimate.create({
                data: Object.assign({ ServiceId: services.id }, EstimateItem),
            });
        });
        console.log(Term);
        res.status(200).json({
            message: "Service created successfully",
            data: {
                services,
                Term,
                availableDays,
                location,
                coustmer_details,
                AssignTo,
                estimate,
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
exports.servicesPost = servicesPost;
//# sourceMappingURL=service_controller.js.map