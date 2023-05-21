"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamEdit = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamEdit = async (req, res) => {
    try {
        const data1 = await helper_1.default.teams.update({
            where: {
                id: req.params.id,
            },
            data: Object.assign({}, req.body),
        });
        res.status(200).json({
            message: "teams updated successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamEdit = teamEdit;
//# sourceMappingURL=teams_edit_controller.js.map