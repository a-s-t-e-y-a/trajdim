"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: "",
}));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.static("files"));
app.use(express_1.default.static("api/files"));
app.use(express_1.default.static(__dirname));
// Rest of your code...
const singup_router_1 = __importDefault(require("./router_controller/signup/singup_router"));
const login_router_1 = __importDefault(require("./router_controller/login/login_router"));
const upload_route_1 = __importDefault(require("./router_controller/upload/upload_route"));
const coustmer_route_1 = __importDefault(require("./router_controller/coustmer/coustmer_route"));
const teams_route_1 = __importDefault(require("./router_controller/teams/teams_route"));
const work_order_route_1 = __importDefault(require("./router_controller/work_order/work_order.route"));
const service_route_1 = __importDefault(require("./router_controller/services/service_route"));
const contracts_route_1 = __importDefault(require("./router_controller/contracts/contracts_route"));
app.use("/trajdim", singup_router_1.default);
app.use("/trajdim", login_router_1.default);
app.use("/trajdim", upload_route_1.default);
app.use("/trajdim", coustmer_route_1.default);
app.use("/trajdim", teams_route_1.default);
app.use("/trajdim", work_order_route_1.default);
app.use("/trajdim", service_route_1.default);
app.use('/trajdim', contracts_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map