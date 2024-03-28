import * as dotenv from 'dotenv';
dotenv.config();
import  {  Request } from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

// Assuming you have an interface 'Authenticate' in 'interface/reqInterface'
import { Authenticate } from "interface/reqInterface";

const s3Config = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});
const upload = multer({
  storage: multerS3({
    s3: s3Config,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    contentType: (req: Request & Authenticate, file, cb) => {
      cb(null, file.mimetype);
    },
    metadata: (req: Request & Authenticate, file, cb) => {
      cb(null, { "Content-Type": file.mimetype });
    },
    key: (req: Request & Authenticate, file, cb) => {
      const fileKey = Date.now() + file.originalname;
      cb(null, fileKey);
      // Now, you can return the file key, which is the file name
      console.log("test" + fileKey);
      req.fileUrl = fileKey;
    },
  }),
});

export default upload;
