import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
interface AuthenticatedRequest extends Request {
    user?: JwtPayload;
}
declare const authenticateToken: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export default authenticateToken;
