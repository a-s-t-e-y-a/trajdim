"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_orderGETAll = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderGETAll = async (req, res) => {
    try {
        const { id } = req.params;
        const workOrder = await helper_1.default.work_order.findMany({
            include: {
                items: true,
            },
        });
        if (!workOrder) {
            return res.status(404).json({
                message: "work order not found",
            });
        }
        res.status(200).json({
            message: "work order retrieved successfully",
            data: workOrder,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.work_orderGETAll = work_orderGETAll;
//# sourceMappingURL=work_order.get.all.controller.js.map