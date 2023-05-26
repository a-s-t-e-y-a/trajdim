import express from "express";
import authenticateToken from "../../middleware/auth";
import { work_orderPOST } from "./controller/work_order.post.controller";
import { work_orderPUT } from "./controller/work_order.edit.controller";
import { work_orderDELETE } from "./controller/work_order.delete.controller";
import { work_orderGET } from "./controller/work_order.get.controller";

const work_order = express.Router();

work_order.post("/work_order", authenticateToken, work_orderPOST);
work_order.put("/work_order/:id", authenticateToken, work_orderPUT);
work_order.delete("/work_order/:id", authenticateToken, work_orderDELETE);
work_order.get("/work_order/:id", authenticateToken, work_orderGET);
export default work_order;
