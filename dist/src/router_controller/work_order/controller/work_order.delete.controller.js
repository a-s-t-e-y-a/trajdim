"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_orderDELETE = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderDELETE = async (req, res) => {
    try {
        const d1 = await helper_1.default.work_order.delete({
            where: { id: req.params.id },
            include: {
                items: true,
            },
        });
        res.status(200).json({
            message: "work order deleted successfully",
            data: d1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.work_orderDELETE = work_orderDELETE;
//# sourceMappingURL=work_order.delete.controller.js.map