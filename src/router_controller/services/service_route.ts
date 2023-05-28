import express from "express";
import authenticateToken from "../../middleware/auth";
import { servicesPost } from "./controller/service_controller";
import { servicesGetAll } from "./controller/service_get_controller";
import { servicesGetUnique } from "./controller/services_get_unique_controller";
import { servicesDelete } from "./controller/services_delete_controller";
import { servicesEdit } from "./controller/service_edit_controller";

const services = express.Router();
services.post("/services", authenticateToken, servicesPost);
services.get("/services", authenticateToken, servicesGetAll);
services.get("/services/:id", authenticateToken, servicesGetUnique);
services.delete("/services/:id", authenticateToken, servicesDelete);
services.patch("/services/:id", authenticateToken, servicesEdit);
export default services;
