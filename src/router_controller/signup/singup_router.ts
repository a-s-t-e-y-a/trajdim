import { Router } from "express";
import { signupPost } from "./controller/singnup_post_controller";
import authenticateToken from "../../middleware/auth";
import {
  updatePassword,
  updateUserInfo,
} from "./controller/signup_update_controller";
const signup = Router();

signup.post("/signup", signupPost);
signup.patch("/users/:userId/password", authenticateToken, updatePassword);
signup.patch("/users/:userId/info", authenticateToken, updateUserInfo);

export default signup;
