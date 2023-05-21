"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const client_1 = require("@prisma/client");
const uploads = express_1.default.Router();
const prisma = new client_1.PrismaClient();
const upload = (0, multer_1.default)({ dest: "uploads/" });
// Custom file validation function
const fileFilter = (req, file, cb) => {
    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        cb(new Error("File size exceeds the allowed limit."));
        return;
    }
    // Check file type (only allow images)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
        cb(new Error("Invalid file type. Only JPEG, PNG, and GIF images are allowed."));
        return;
    }
    cb(null, true); // Pass the validation
};
uploads.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    try {
        const fileData = fs_1.default.readFileSync(req.file.path);
        const base64Data = fileData.toString("base64");
        // Store the base64 data in the database using Prisma
        // Delete the uploaded file from the server
        fs_1.default.unlinkSync(req.file.path);
        res.status(200).json({
            message: "File uploaded done",
            data: base64Data,
        });
    }
    catch (error) {
        console.error("Error storing file:", error);
        res.status(500).send("An error occurred while storing the file.");
    }
});
exports.default = uploads;
//# sourceMappingURL=upload_route.js.map