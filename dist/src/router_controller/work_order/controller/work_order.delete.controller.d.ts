import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const work_orderDELETE: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
