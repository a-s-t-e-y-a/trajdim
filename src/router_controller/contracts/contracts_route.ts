import express from "express";
import authenticateToken from "../../middleware/auth";
import { createContract } from "./controller/contract_route";
import { getContracts } from "./controller/contract_get_all_controller";
import { getContractsById } from "./controller/contract_get_route";
import { updateContract } from "./controller/contract_edit_route";
import { deleteContract } from "./controller/contract_delete_route";

const contract = express.Router();

contract.post("/contract", authenticateToken, createContract);
contract.get("/contract", authenticateToken, getContracts);
contract.get("/contract/:id", authenticateToken, getContractsById);
contract.patch("/contract/:id", authenticateToken, updateContract);
contract.delete("/contract/:id", authenticateToken, deleteContract);
export default contract;
