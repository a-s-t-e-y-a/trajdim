"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_orderPOST = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderPOST = async (req, res) => {
    try {
        const _a = req.body, { item } = _a, rest = __rest(_a, ["item"]);
        const data1 = await helper_1.default.work_order.create({
            data: Object.assign({ user: req.user.id, item: {
                    create: item || [],
                } }, rest),
        });
        res.status(200).json({
            message: "work order created successfuly",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.work_orderPOST = work_orderPOST;
//# sourceMappingURL=work_order.post.controller.js.map