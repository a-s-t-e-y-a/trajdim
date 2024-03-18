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
exports.teamsEdit = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamsEdit = async (req, res) => {
    const _a = req.body, { schedule, access } = _a, rest = __rest(_a, ["schedule", "access"]);
    try {
        const team = await helper_1.default.team.update({
            where: {
                id: req.params.id,
            },
            data: Object.assign({ schedule: {
                    deleteMany: {}, // Delete all existing schedule records
                    create: schedule || [], // Create new schedule records if provided
                }, access: {
                    deleteMany: {}, // Delete all existing access records
                    create: access || [], // Create new access records if provided
                } }, rest),
            include: {
                schedule: true,
                access: true,
            },
        });
        res.status(200).json({
            message: "Team updated successfully",
            data: team,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamsEdit = teamsEdit;
//# sourceMappingURL=teams_edit_controller.js.map