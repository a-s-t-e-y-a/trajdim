"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coustmerPost = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const coustmerPost = async (req, res) => {
    try {
        const data1 = await helper_1.default.customer.create({
            data: Object.assign(Object.assign({}, req.body), { user: req.user.id }),
        });
        res.status(200).json({
            message: "coustmer created successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.coustmerPost = coustmerPost;
//# sourceMappingURL=coustmer_controller.js.map