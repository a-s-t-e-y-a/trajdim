import { Router } from "express";
import { login } from "./controller/login_controller";
const loginRoute = Router();

loginRoute.post("/signup", login);

export default loginRoute;
