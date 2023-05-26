"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("middleware/auth"));
const work_order_post_controller_1 = require("./controller/work_order.post.controller");
const work_order = express_1.default.Router();
work_order.post("/work_order", auth_1.default, work_order_post_controller_1.work_orderPOST);
exports.default = work_order;
//# sourceMappingURL=work_order.route.js.map