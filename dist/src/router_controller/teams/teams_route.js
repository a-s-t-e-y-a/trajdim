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
const teams_controller_get_1 = require("./controller/teams_controller_get");
const teams_controller_single_1 = require("./controller/teams_controller_single");
const schedule_get_controller_1 = require("./controller/schedule_get_controller");
const team = express_1.default.Router();
team.post("/team", auth_1.default, teams_controller_1.teamsPost);
team.patch("/team/:id", auth_1.default, teams_edit_controller_1.teamsEdit);
team.delete("/team/:id", auth_1.default, teams_delete_controller_1.teamsDelete);
team.get("/team", auth_1.default, teams_controller_get_1.teamsGet);
team.get("/team/:id", auth_1.default, teams_controller_single_1.teamsGetSingle);
team.patch("/team/schdeule/:id", auth_1.default, schedule_get_controller_1.teamsGetSchdule);
exports.default = team;
//# sourceMappingURL=teams_route.js.map