import express from "express";
import authenticateToken from "middleware/auth";
import { work_orderPOST } from "./controller/work_order.post.controller";

const work_order = express.Router();

work_order.post("/work_order", authenticateToken, work_orderPOST);

export default work_order;
