"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoupon = exports.updateCoupon = exports.createCoupon = exports.getCouponById = exports.getCoupons = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getCoupons = async (req, res) => {
    try {
        const coupons = await prisma.coupon.findMany();
        res.status(200).json(coupons);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCoupons = getCoupons;
const getCouponById = async (req, res) => {
    const { id } = req.params;
    try {
        const coupon = await prisma.coupon.findUnique({
            where: {
                id: id,
            },
        });
        if (coupon) {
            res.status(200).json(coupon);
        }
        else {
            res.status(404).json({ error: 'Coupon not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCouponById = getCouponById;
const createCoupon = async (req, res) => {
    const { name, code, discount, specific_services, services_selected, expire_selected, expire_on, total_no_selecte, total_no } = req.body;
    const user = req.user.id;
    try {
        const coupon = await prisma.coupon.create({
            data: {
                user,
                name,
                code,
                discount,
                specific_services,
                services_selected,
                expire_selected,
                expire_on,
                total_no_selecte,
                total_no,
            },
        });
        res.status(201).json(coupon);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createCoupon = createCoupon;
const updateCoupon = async (req, res) => {
    var _a;
    const { id } = req.params;
    const { name, code, discount, specific_services, services_selected, expire_selected, expire_on, total_no_selecte, total_no } = req.body;
    const user = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const updatedCoupon = await prisma.coupon.update({
            where: {
                id: id,
            },
            data: {
                user,
                name,
                code,
                discount,
                specific_services,
                services_selected,
                expire_selected,
                expire_on,
                total_no_selecte,
                total_no,
            },
        });
        if (updatedCoupon) {
            res.status(200).json(updatedCoupon);
        }
        else {
            res.status(404).json({ error: 'Coupon not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateCoupon = updateCoupon;
const deleteCoupon = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.coupon.delete({
            where: {
                id: id,
            },
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteCoupon = deleteCoupon;
//# sourceMappingURL=settings__coupon_controller.js.map