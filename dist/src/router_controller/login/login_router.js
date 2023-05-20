"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("./controller/login_controller");
const loginRoute = (0, express_1.Router)();
loginRoute.post("/login", login_controller_1.login);
exports.default = loginRoute;
//# sourceMappingURL=login_router.js.map