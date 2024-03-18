"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const client_s3_1 = require("@aws-sdk/client-s3");
// import { Authenticate } from '../interfaces/reqInterface'
const s3Config = new client_s3_1.S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    },
});
const upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3Config,
        bucket: process.env.BUCKET_NAME,
        region: process.env.REGION,
        acl: "public-read",
        contentType: (req, file, cb) => {
            cb(null, file.mimetype);
        },
        metadata: (req, file, cb) => {
            cb(null, { "Content-Type": file.mimetype });
        },
        key: (req, file, cb) => {
            const fileKey = Date.now() + file.originalname;
            cb(null, fileKey);
            // Now, you can return the file key, which is the file name
            console.log("test" + fileKey);
            req.fileUrl = fileKey;
        },
    }),
});
exports.default = upload;
//# sourceMappingURL=multerUpload.js.map