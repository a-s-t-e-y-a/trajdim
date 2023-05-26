"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsGetSchdule = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamsGetSchdule = async (req, res) => {
    try {
        const teams = await helper_1.default.schedule.update({
            where: {
                id: req.params.id,
            },
            data: Object.assign({}, req.body),
        });
        res.status(200).json({
            message: "schedule update successfully",
            data: teams,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamsGetSchdule = teamsGetSchdule;
//# sourceMappingURL=schedule_get_controller.js.map