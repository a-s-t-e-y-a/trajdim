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
exports.work_orderPUT = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const work_orderPUT = async (req, res) => {
    try {
        const _a = req.body, { id, items } = _a, rest = __rest(_a, ["id", "items"]);
        const data1 = await helper_1.default.work_order.update({
            where: { id: req.params.id },
            data: Object.assign({ user: req.user.id, items: {
                    create: items || [],
                } }, rest),
        });
        res.status(200).json({
            message: "work order updated successfully",
            data: data1,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.work_orderPUT = work_orderPUT;
//# sourceMappingURL=work_order.edit.controller.js.map