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
exports.servicesEdit = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const servicesEdit = async (req, res) => {
    const { serviceId } = req.params;
    const _a = req.body, { term, AvailableDays, Location, Coustmer_details, QuestionSchema, assignTo, Estimate } = _a, rest = __rest(_a, ["term", "AvailableDays", "Location", "Coustmer_details", "QuestionSchema", "assignTo", "Estimate"]);
    try {
        // Update the service
        const updatedService = await helper_1.default.services.update({
            where: {
                id: serviceId,
            },
            data: Object.assign({}, rest),
        });
        // Update related data
        await helper_1.default.term.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.term.createMany({
            data: term.map((t) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, t))),
        });
        await helper_1.default.availableDays.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.availableDays.createMany({
            data: AvailableDays.map((a) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, a))),
        });
        await helper_1.default.location.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.location.createMany({
            data: Location.map((l) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, l))),
        });
        await helper_1.default.coustmer_details.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.coustmer_details.createMany({
            data: Coustmer_details.map((c) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, c))),
        });
        // await prisma.questionSchema.deleteMany({
        //   where: {
        //     ServiceId: serviceId,
        //   },
        // });
        // await prisma.questionSchema.createMany({
        //   data: QuestionSchema.map((q) => ({
        //     user: req.user.id,
        //     ServiceId: serviceId,
        //     ...q,
        //   })),
        // });
        await helper_1.default.assignTo.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.assignTo.createMany({
            data: assignTo.map((a) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, a))),
        });
        await helper_1.default.estimate.deleteMany({
            where: {
                ServiceId: serviceId,
            },
        });
        await helper_1.default.estimate.createMany({
            data: Estimate.map((e) => (Object.assign({ user: req.user.id, ServiceId: serviceId }, e))),
        });
        res.status(200).json({
            message: "Service updated successfully",
            data: updatedService,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
exports.servicesEdit = servicesEdit;
//# sourceMappingURL=service_edit_controller.js.map