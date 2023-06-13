import express from "express";
import authenticateToken from "../../middleware/auth";
import { createCoupon, deleteCoupon, getCouponById, getCoupons, updateCoupon } from "./controller/settings__coupon_controller";
const settings = express.Router();

//coupon routes

settings.get('/settings/coupon',authenticateToken,getCoupons)
settings.get('/settings/coupon_id/:id',authenticateToken,getCouponById)
settings.patch('/settings/coupon_id/:id',authenticateToken,updateCoupon)
settings.delete('/settings/coupon_id/:id',authenticateToken,deleteCoupon)
settings.post('/settings/coupon_id/:id',authenticateToken,createCoupon)