"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const settings__coupon_controller_1 = require("./controller/settings__coupon_controller");
const appointment_coupon_controller_1 = require("./controller/appointment_coupon_controller");
const businessController_1 = require("./controller/businessController");
const businessController_2 = require("./controller/businessController");
const settings = express_1.default.Router();
//coupon routes
settings.get("/settings/coupon", auth_1.default, settings__coupon_controller_1.getCoupons);
settings.get("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.getCouponById);
settings.patch("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.updateCoupon);
settings.delete("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.deleteCoupon);
settings.post("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.createCoupon);
//appointment routes
settings.get("/appointments", auth_1.default, appointment_coupon_controller_1.getAppointments);
settings.get("/appointments/:id", auth_1.default, appointment_coupon_controller_1.getAppointmentById);
settings.post("/appointments", auth_1.default, appointment_coupon_controller_1.createAppointment);
settings.patch("/appointments/:id", auth_1.default, appointment_coupon_controller_1.updateAppointment);
settings.delete("/appointments/:id", auth_1.default, appointment_coupon_controller_1.deleteAppointment);
//booking info
settings.get("/businesses", auth_1.default, businessController_1.getBusinesses);
settings.get("/businesses/:id", auth_1.default, businessController_1.getBusinessById);
settings.post("/businesses", auth_1.default, businessController_1.createBusiness);
settings.patch("/businesses/:id", auth_1.default, businessController_1.updateBusiness);
settings.delete("/businesses/:id", auth_1.default, businessController_1.deleteBusiness);
//
settings.get("/otherDetails", auth_1.default, businessController_2.getOtherDetails);
settings.post("/otherDetails", auth_1.default, businessController_2.createOtherDetails);
settings.patch("/otherDetails/:id", auth_1.default, businessController_2.updateOtherDetails);
settings.delete("/otherDetails/:id", auth_1.default, businessController_2.deleteOtherDetails);
settings.get("/otherDetails/:id", auth_1.default, businessController_1.getOtherDetailsById);
//# sourceMappingURL=setting_route.js.map