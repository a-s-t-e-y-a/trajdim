"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupPost = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const helper_1 = __importDefault(require("../../../config/helper"));
const signupPost = async (req, res) => {
  try {
    bcrypt_1.default.hash(req.body.password, 10, async (error, hash) => {
      if (error) {
        res.status(500).send(error);
      } else {
        const info = await helper_1.default.user.create({
          data: Object.assign(Object.assign({}, req.body), { password: hash }),
        });
        res.status(200).json({
          message: "User created successfully",
          data: info,
        });
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.signupPost = signupPost;
module.exports = {
  signupPost: exports.signupPost,
};
//# sourceMappingURL=singnup_post_controller.js.map
