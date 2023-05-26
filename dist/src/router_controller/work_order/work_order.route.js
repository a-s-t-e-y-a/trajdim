"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const work_order_post_controller_1 = require("./controller/work_order.post.controller");
const work_order_edit_controller_1 = require("./controller/work_order.edit.controller");
const work_order_delete_controller_1 = require("./controller/work_order.delete.controller");
const work_order_get_controller_1 = require("./controller/work_order.get.controller");
const work_order = express_1.default.Router();
work_order.post("/work_order", auth_1.default, work_order_post_controller_1.work_orderPOST);
work_order.put("/work_order/:id", auth_1.default, work_order_edit_controller_1.work_orderPUT);
work_order.delete("/work_order/:id", auth_1.default, work_order_delete_controller_1.work_orderDELETE);
work_order.get("/work_order/:id", auth_1.default, work_order_get_controller_1.work_orderGET);
exports.default = work_order;
//# sourceMappingURL=work_order.route.js.map