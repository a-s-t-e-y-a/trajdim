import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const getCoupons: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const getCouponById: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createCoupon: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateCoupon: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const deleteCoupon: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export {};
