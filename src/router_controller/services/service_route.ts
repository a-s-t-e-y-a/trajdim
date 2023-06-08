import express from "express";
import authenticateToken from "../../middleware/auth";
import { servicesPost } from "./controller/service_controller";
import { servicesGetAll } from "./controller/service_get_controller";
import { servicesGetUnique } from "./controller/services_get_unique_controller";
import { servicesDelete } from "./controller/services_delete_controller";
import {
  editAssignTo,
  editAvailableDays,
  editCustomerDetails,
  editEstimate,
  editLocation,
  editServices,
  editTerm,
} from "./controller/service_edit_controller";

const services = express.Router();
services.post("/services", authenticateToken, servicesPost);
services.get("/services", authenticateToken, servicesGetAll);
services.get("/services/:id", authenticateToken, servicesGetUnique);
services.delete("/services/:id", authenticateToken, servicesDelete);
services.patch("/services/:id", authenticateToken, editServices);
services.patch("/term/:id", authenticateToken, editTerm);
services.patch("/available_days/:id", authenticateToken, editAvailableDays);
services.patch("/location/:id", authenticateToken, editLocation);
services.patch("/customer_details/:id", authenticateToken, editCustomerDetails);
services.patch("/asssign_to/:id", authenticateToken, editAssignTo);
services.patch("/estimate/:id", authenticateToken, editEstimate);

export default services;
