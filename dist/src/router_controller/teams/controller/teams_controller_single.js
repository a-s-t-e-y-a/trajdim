"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsGetSingle = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamsGetSingle = async (req, res) => {
    try {
        const teams = await helper_1.default.team.findMany({
            where: {
                user: req.user.id,
                id: req.params.id,
            },
            include: {
                schedule: true,
                access: true,
            },
        });
        res.status(200).json({
            message: "Teams fetched successfully",
            data: teams,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamsGetSingle = teamsGetSingle;
//# sourceMappingURL=teams_controller_single.js.map