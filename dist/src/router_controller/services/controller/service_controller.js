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
const servicesPost = async (req, res) => {
    const _a = req.body, { term, AvailableDays, Location, Coustmer_details, QuestionSchema, assignTo, Estimate } = _a, rest = __rest(_a, ["term", "AvailableDays", "Location", "Coustmer_details", "QuestionSchema", "assignTo", "Estimate"]);
    try {
        const data = await helper_1.default.services.create({
            data: Object.assign({ user: req.user.id, term: {
                    create: term || [],
                }, AvailableDays: {
                    create: AvailableDays || [],
                }, Location: {
                    create: Location || [],
                }, Coustmer_details: {
                    create: Coustmer_details || [],
                }, QuestionSchema: {
                    create: QuestionSchema || [],
                }, assignTo: {
                    create: assignTo || [],
                }, Estimate: {
                    create: Estimate || [],
                } }, rest),
            include: {
                term: true,
                AvailableDays: true,
                Location: true,
                Coustmer_details: true,
                QuestionSchema: true,
                assignTo: true,
                Estimate: true,
            },
        });
        res.status(200).json({
            message: "Service created successfully",
            data: data,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
exports.servicesPost = servicesPost;
//# sourceMappingURL=service_controller.js.map