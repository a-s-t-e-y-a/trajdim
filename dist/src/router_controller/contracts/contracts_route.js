"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const contract_route_1 = require("./controller/contract_route");
const contract_get_all_controller_1 = require("./controller/contract_get_all_controller");
const contract_get_route_1 = require("./controller/contract_get_route");
const contract_edit_route_1 = require("./controller/contract_edit_route");
const contract_delete_route_1 = require("./controller/contract_delete_route");
const contract = express_1.default.Router();
contract.post("/contract", auth_1.default, contract_route_1.createContract);
contract.get("/contract", auth_1.default, contract_get_all_controller_1.getContracts);
contract.get("/contract/:id", auth_1.default, contract_get_route_1.getContractsById);
contract.patch("/contract/:id", auth_1.default, contract_edit_route_1.updateContract);
contract.delete("/contract/:id", auth_1.default, contract_delete_route_1.deleteContract);
exports.default = contract;
//# sourceMappingURL=contracts_route.js.map