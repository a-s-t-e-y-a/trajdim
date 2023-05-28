"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContract = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const createContract = async (req, res) => {
    try {
        const { name, created_by, file_name, signed_no, dismissed_no } = req.body;
        const newContract = await helper_1.default.contracts.create({
            data: {
                user: req.user.id,
                name,
                created_by,
                file_name,
                signed_no,
                dismissed_no,
                created_at: new Date().toISOString(), // Set created_at to current date and time
            },
        });
        res.status(201).json(newContract);
    }
    catch (error) {
        console.error("Error creating contract:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createContract = createContract;
//# sourceMappingURL=contract_route.js.map