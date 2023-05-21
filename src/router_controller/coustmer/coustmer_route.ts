import express from "express";
import authenticateToken from "../../middleware/auth";
import { coustmerPost } from "./controller/coustmer_controller";
import { coustmerEdit } from "./controller/coustmer_edit_controller";
import { coustmerDelete } from "./controller/coustmer_delete_controller";
import { coustmerGet } from "./controller/coustmer_get_route";
import { coustmerAllGet } from "./controller/coustmer_get_all_controller";
const coustmer = express.Router();
coustmer.post("/coustmer", authenticateToken, coustmerPost);
coustmer.patch("/coustmer/:id", authenticateToken, coustmerEdit);
coustmer.delete("/coustmer/:id", authenticateToken, coustmerDelete);
coustmer.get('/coustmer/:id',authenticateToken,coustmerGet)
coustmer.get('/all/coustmer',authenticateToken,coustmerAllGet)
export default coustmer;
