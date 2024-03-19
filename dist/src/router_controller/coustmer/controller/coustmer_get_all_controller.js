"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coustmerAllGet = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const coustmerAllGet = async (req, res) => {
    try {
        const data1 = await helper_1.default.customer.findMany({});
        res.status(200).json({
            message: "all coustmer get successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.coustmerAllGet = coustmerAllGet;
//# sourceMappingURL=coustmer_get_all_controller.js.map