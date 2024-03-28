import express,{Router} from "express";
import authenticateToken from "../../middleware/auth";
import upload from "../../middleware/multerUpload";
import { getUploads } from "./controller/singlePost";
import { getAllUploads } from "./controller/arrayPost";

const uploadRouter:Router = express.Router();
uploadRouter.post("/upload", upload.single('image'), getUploads);
uploadRouter.post("/uploadArray", upload.array('image',10), getAllUploads);
export default uploadRouter;
