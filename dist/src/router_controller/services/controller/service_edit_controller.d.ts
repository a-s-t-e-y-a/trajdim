import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const editServices: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const editTerm: (req: Request, res: Response) => Promise<void>;
export declare const editAvailableDays: (req: Request, res: Response) => Promise<void>;
export declare const editLocation: (req: Request, res: Response) => Promise<void>;
export declare const editCustomerDetails: (req: Request, res: Response) => Promise<void>;
export declare const editAssignTo: (req: Request, res: Response) => Promise<void>;
export declare const editEstimate: (req: Request, res: Response) => Promise<void>;
export {};
