"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_orderGET = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderGET = async (req, res) => {
    try {
        const { id } = req.params;
        const workOrder = await helper_1.default.work_order.findUnique({
            where: { id: req.params.id },
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
exports.work_orderGET = work_orderGET;
//# sourceMappingURL=work_order.get.controller.js.map