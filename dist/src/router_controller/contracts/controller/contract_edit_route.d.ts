import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const updateContract: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export {};
