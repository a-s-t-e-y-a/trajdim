import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const work_orderGET: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
