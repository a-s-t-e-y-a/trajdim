"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const server = http_1.default.createServer(app_1.default);
const PORT = 5000;
server.listen(PORT, () => {
    console.log("You are now connected");
});
//# sourceMappingURL=server.js.map