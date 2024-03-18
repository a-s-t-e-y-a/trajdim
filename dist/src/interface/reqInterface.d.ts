import { Request } from "express";
export interface Authenticate extends Request {
    userId: number;
    sessionId: string;
    files: string[];
    fileUrl: string;
    data: any;
}
