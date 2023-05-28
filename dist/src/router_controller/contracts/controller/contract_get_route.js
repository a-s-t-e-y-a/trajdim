"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractsById = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const getContractsById = async (req, res) => {
    try {
        const contracts = await helper_1.default.contracts.findUnique({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(contracts);
    }
    catch (error) {
        console.error("Error retrieving contracts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getContractsById = getContractsById;
//# sourceMappingURL=contract_get_route.js.map