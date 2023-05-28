"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContract = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const updateContract = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContract = await helper_1.default.contracts.update({
            where: {
                id: id,
            },
            data: Object.assign({}, req.body),
        });
        res.status(200).json(updatedContract);
    }
    catch (error) {
        console.error("Error updating contract:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.updateContract = updateContract;
//# sourceMappingURL=contract_edit_route.js.map