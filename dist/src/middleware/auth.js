"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    // Extract the token from the request headers
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        // Token is missing
        return res.status(401).json({ error: "Missing token" });
    }
    try {
        // Verify the JWT token
        const decoded = jsonwebtoken_1.default.verify(authHeader, "H7BxIFkroaje9xVMpul3dw9ItBR79MBC");
        // Attach the decoded token to the request object
        req.user = decoded;
        // Proceed to the next middleware or route handler
        next();
    }
    catch (err) {
        // Token is invalid
        return res.status(403).json({ error: "Invalid token" });
    }
};
exports.default = authenticateToken;
//# sourceMappingURL=auth.js.map