import  {  Request,RequestHandler } from "express";
import multer, { StorageEngine, FileFilterCallback, MulterError } from "multer";

// Configure multer to handle file uploads
const storage: StorageEngine = multer.diskStorage({
  destination: "uploads/",
  filename: (req: Request, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const fileFilter = (req: Request, file, cb: FileFilterCallback) => {
  // Accept only JPEG and PNG files
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new MulterError("LIMIT_UNEXPECTED_FILE", "Invalid file type. Only JPEG and PNG files are allowed."));
  }
};

const limits = {
  fileSize: 3 * 1024 * 1024, // Limit file size to 3MB
};

const upload = multer({ storage, fileFilter, limits });

// Middleware to handle image upload
export const uploadImageMiddleware :RequestHandler= upload.single("image");
