"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const coustmer_controller_1 = require("./controller/coustmer_controller");
const coustmer_edit_controller_1 = require("./controller/coustmer_edit_controller");
const coustmer_delete_controller_1 = require("./controller/coustmer_delete_controller");
const coustmer_get_route_1 = require("./controller/coustmer_get_route");
const coustmer_get_all_controller_1 = require("./controller/coustmer_get_all_controller");
const coustmer = express_1.default.Router();
coustmer.post("/coustmer", auth_1.default, coustmer_controller_1.coustmerPost);
coustmer.patch("/coustmer/:id", auth_1.default, coustmer_edit_controller_1.coustmerEdit);
coustmer.delete("/coustmer/:id", auth_1.default, coustmer_delete_controller_1.coustmerDelete);
coustmer.get('/coustmer/:id', auth_1.default, coustmer_get_route_1.coustmerGet);
coustmer.get('/all/coustmer', auth_1.default, coustmer_get_all_controller_1.coustmerAllGet);
exports.default = coustmer;
//# sourceMappingURL=coustmer_route.js.map