"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const service_controller_1 = require("./controller/service_controller");
const services = express_1.default.Router();
services.post("/services", auth_1.default, service_controller_1.servicesPost);
exports.default = services;
//# sourceMappingURL=service_route.js.map