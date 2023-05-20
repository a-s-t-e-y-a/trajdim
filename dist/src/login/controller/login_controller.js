"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const helper_1 = __importDefault(require("../../config/helper"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = async (req, res) => {
  try {
    const data = await helper_1.default.user.findMany({
      where: {
        email: req.body.email,
      },
    });
    if (data.length > 0) {
      const user = data[0];
      bcrypt_1.default.compare(
        req.body.password,
        user.password,
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result) {
            const token = jsonwebtoken_1.default.sign(
              {
                email: user.email,
                name: user.name,
              },
              process.env.SECRET_KEY || ""
            );
            res.status(200).json({
              message: "User logged in successfully",
              data: token,
            });
          } else {
            res.status(404).json({
              message: "User credentials do not match",
              data: [],
            });
          }
        }
      );
    } else {
      res.status(404).json({
        message: "User not found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.login = login;
//# sourceMappingURL=login_controller.js.map
