import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

// Middleware to verify JWT token
const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // Extract the token from the request headers
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    // Token is missing
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(
      authHeader,
      "H7BxIFkroaje9xVMpul3dw9ItBR79MBC"
    ) as JwtPayload;

    // Attach the decoded token to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Token is invalid
    return res.status(403).json({ error: "Invalid token" });
  }
};

export default authenticateToken;
