import express from "express";
import authenticateToken from "../../middleware/auth";
import { coustmerPost } from "./controller/coustmer_controller";
import { coustmerEdit } from "./controller/coustmer_edit_controller";
import { coustmerDelete } from "./controller/coustmer_delete_controller";
const coustmer = express.Router();
coustmer.post("/coustmer", authenticateToken, coustmerPost);
coustmer.patch('/coustmer',authenticateToken,coustmerEdit);
coustmer.delete('/coustmer',authenticateToken,coustmerDelete)
export default coustmer;
