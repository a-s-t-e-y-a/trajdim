import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const servicesGetUnique: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export declare const coustmerGet: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
