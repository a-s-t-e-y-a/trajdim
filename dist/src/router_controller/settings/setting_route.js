"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const settings__coupon_controller_1 = require("./controller/settings__coupon_controller");
const settings = express_1.default.Router();
//coupon routes
settings.get("/settings/coupon", auth_1.default, settings__coupon_controller_1.getCoupons);
settings.get("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.getCouponById);
settings.patch("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.updateCoupon);
settings.delete("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.deleteCoupon);
settings.post("/settings/coupon_id/:id", auth_1.default, settings__coupon_controller_1.createCoupon);
//# sourceMappingURL=setting_route.js.map