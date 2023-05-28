import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const servicesDelete: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
