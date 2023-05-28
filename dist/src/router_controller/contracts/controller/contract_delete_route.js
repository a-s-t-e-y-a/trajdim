"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContract = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const deleteContract = async (req, res) => {
    try {
        const { id } = req.params;
        await helper_1.default.contracts.delete({
            where: {
                id: id,
            },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error("Error deleting contract:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.deleteContract = deleteContract;
//# sourceMappingURL=contract_delete_route.js.map