"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coustmerGet = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const coustmerGet = async (req, res) => {
    try {
        const data1 = await helper_1.default.customer.findUnique({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "coustmer get successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.coustmerGet = coustmerGet;
//# sourceMappingURL=coustmer_get_route.js.map