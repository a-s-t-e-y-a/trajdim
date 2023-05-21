"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const teams_controller_1 = require("./controller/teams_controller");
const teams_edit_controller_1 = require("./controller/teams_edit_controller");
const teams_delete_controller_1 = require("./controller/teams_delete_controller");
const team = express_1.default.Router();
team.post("/team", auth_1.default, teams_controller_1.teamsPost);
team.patch("/team", auth_1.default, teams_edit_controller_1.teamEdit);
team.delete("/team", auth_1.default, teams_delete_controller_1.teamsDelete);
exports.default = team;
//# sourceMappingURL=teams_route.js.map