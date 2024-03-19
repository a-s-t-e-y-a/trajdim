import { Request } from "express";
// import { UploadedFile } from './uploadInterfaceMulter';
export interface Authenticate extends Request {
  userId: number;
  sessionId: string;
  fileList: string[];
  fileUrl: string;
  data: unknown;
}
