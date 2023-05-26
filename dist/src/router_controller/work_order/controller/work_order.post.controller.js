"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_orderPOST = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderPOST = async (req, res) => {
    try {
        const data1 = await helper_1.default.work_order.create({
            data: Object.assign(Object.assign({}, req.body), { user: req.user.id }),
        });
        res.status(200).json({
            message: "work order created successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.work_orderPOST = work_orderPOST;
//# sourceMappingURL=work_order.post.controller.js.map