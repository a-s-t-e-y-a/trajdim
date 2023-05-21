import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const teamsPost: (req: AuthenticatedRequest, res: Response) => Promise<any>;
export {};
