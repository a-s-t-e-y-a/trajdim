"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const singnup_post_controller_1 = require("./controller/singnup_post_controller");
const signup = (0, express_1.Router)();
signup.post("/signup", singnup_post_controller_1.signupPost);
exports.default = signup;
//# sourceMappingURL=singup_router.js.map
