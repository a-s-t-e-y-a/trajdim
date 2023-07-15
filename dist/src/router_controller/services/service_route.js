"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const service_controller_1 = require("./controller/service_controller");
const service_get_controller_1 = require("./controller/service_get_controller");
const services_get_unique_controller_1 = require("./controller/services_get_unique_controller");
const services_delete_controller_1 = require("./controller/services_delete_controller");
const service_edit_controller_1 = require("./controller/service_edit_controller");
const upload_1 = require("../../middleware/upload");
const services = express_1.default.Router();
services.post("/services", auth_1.default, upload_1.uploadImageMiddleware, service_controller_1.servicesPost);
services.get("/services", auth_1.default, service_get_controller_1.servicesGetAll);
services.get("/services/:id", auth_1.default, services_get_unique_controller_1.servicesGetUnique);
services.delete("/services/:id", auth_1.default, services_delete_controller_1.servicesDelete);
services.patch("/services/:id", auth_1.default, service_edit_controller_1.editServices);
services.patch("/term/:id", auth_1.default, service_edit_controller_1.editTerm);
services.patch("/available_days/:id", auth_1.default, service_edit_controller_1.editAvailableDays);
services.patch("/location/:id", auth_1.default, service_edit_controller_1.editLocation);
services.patch("/customer_details/:id", auth_1.default, service_edit_controller_1.editCustomerDetails);
services.patch("/asssign_to/:id", auth_1.default, service_edit_controller_1.editAssignTo);
services.patch("/estimate/:id", auth_1.default, service_edit_controller_1.editEstimate);
services.get("/services/:id", auth_1.default, services_get_unique_controller_1.servicesGetUnique);
services.get("/new/:id", auth_1.default, services_get_unique_controller_1.coustmerGet);
exports.default = services;
//# sourceMappingURL=service_route.js.map