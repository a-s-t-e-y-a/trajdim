"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsPost = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const teamsPost = async (req, res) => {
    try {
        const data1 = await helper_1.default.teams.create({
            data: Object.assign(Object.assign({}, req.body.data), { user: req.user.id }),
        });
        res.status(200).json({
            message: "teams created successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.teamsPost = teamsPost;
//# sourceMappingURL=teams_controller.js.map