import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const getContractsById: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export {};
