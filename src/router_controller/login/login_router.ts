import { Router } from "express";
import { login } from "./controller/login_controller";
const loginRoute:Router = Router();

loginRoute.post("/login", login);

export default loginRoute;
