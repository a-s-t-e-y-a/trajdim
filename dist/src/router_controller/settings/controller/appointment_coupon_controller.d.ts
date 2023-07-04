import { Request, Response } from "express";
interface AuthenticatedRequest extends Request {
    user?: any;
}
export declare const getAppointments: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const getAppointmentById: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createAppointment: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateAppointment: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const deleteAppointment: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export {};
