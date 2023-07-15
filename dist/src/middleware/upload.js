"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
// Configure multer to handle file uploads
const storage = multer_1.default.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const fileFilter = (req, file, cb) => {
    // Accept only JPEG and PNG files
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file type. Only JPEG and PNG files are allowed."));
    }
};
const limits = {
    fileSize: 3 * 1024 * 1024, // Limit file size to 3MB
};
const upload = (0, multer_1.default)({ storage, fileFilter, limits });
// Middleware to handle image upload
exports.uploadImageMiddleware = upload.single("image");
//# sourceMappingURL=upload.js.map