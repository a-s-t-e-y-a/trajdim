import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const teamsGet: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
