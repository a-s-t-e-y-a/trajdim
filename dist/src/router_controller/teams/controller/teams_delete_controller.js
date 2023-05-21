"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsDelete = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamsDelete = async (req, res) => {
    try {
        const data1 = await helper_1.default.teams.delete({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "team deleted successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamsDelete = teamsDelete;
//# sourceMappingURL=teams_delete_controller.js.map