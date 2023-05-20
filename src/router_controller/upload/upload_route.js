import { Router } from "express";
const upload = Router();

upload.post("/upload", signupPost);

export default upload;
