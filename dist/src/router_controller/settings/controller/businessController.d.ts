import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const getBusinesses: (_req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const getBusinessById: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createBusiness: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateBusiness: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const deleteBusiness: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createOtherDetails: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateOtherDetails: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const deleteOtherDetails: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const getOtherDetails: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const getOtherDetailsById: (req: Request, res: Response) => Promise<void>;
export {};
