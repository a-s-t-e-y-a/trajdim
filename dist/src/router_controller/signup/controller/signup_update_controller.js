"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfo = exports.updatePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const helper_1 = __importDefault(require("../../../config/helper"));
const updatePassword = async (req, res) => {
    const { userId } = req.params;
    const { password } = req.body;
    try {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const updatedUser = await helper_1.default.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while updating the password." });
    }
};
exports.updatePassword = updatePassword;
// Update other user information
const updateUserInfo = async (req, res) => {
    const { userId } = req.params;
    const { name, email, phone_no } = req.body;
    try {
        const updatedUser = await helper_1.default.user.update({
            where: { id: userId },
            data: { name, email, phone_no },
        });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({
            error: "An error occurred while updating the user information.",
        });
    }
};
exports.updateUserInfo = updateUserInfo;
//# sourceMappingURL=signup_update_controller.js.map