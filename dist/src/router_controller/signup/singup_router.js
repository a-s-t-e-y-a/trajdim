"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const singnup_post_controller_1 = require("./controller/singnup_post_controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const signup_update_controller_1 = require("./controller/signup_update_controller");
const signup = (0, express_1.Router)();
signup.post("/signup", singnup_post_controller_1.signupPost);
signup.patch("/users/:userId/password", auth_1.default, signup_update_controller_1.updatePassword);
signup.patch("/users/:userId/info", auth_1.default, signup_update_controller_1.updateUserInfo);
exports.default = signup;
//# sourceMappingURL=singup_router.js.map