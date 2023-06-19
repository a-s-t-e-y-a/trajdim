import express from "express";
import authenticateToken from "../../middleware/auth";
import {
  createCoupon,
  deleteCoupon,
  getCouponById,
  getCoupons,
  updateCoupon,
} from "./controller/settings__coupon_controller";
import {  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment, } from "./controller/appointment_coupon_controller";
  import {
    getBusinesses,
    getBusinessById,
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getOtherDetailsById,
  } from './controller/businessController';

  import {
    getOtherDetails,
    createOtherDetails,
    updateOtherDetails,
    deleteOtherDetails,
  } from './controller/businessController';
const settings = express.Router();

//coupon routes

settings.get("/settings/coupon", authenticateToken, getCoupons);
settings.get("/settings/coupon_id/:id", authenticateToken, getCouponById);
settings.patch("/settings/coupon_id/:id", authenticateToken, updateCoupon);
settings.delete("/settings/coupon_id/:id", authenticateToken, deleteCoupon);
settings.post("/settings/coupon_id/:id", authenticateToken, createCoupon);

//appointment routes
settings.get('/appointments', authenticateToken, getAppointments);
settings.get('/appointments/:id', authenticateToken, getAppointmentById);
settings.post('/appointments', authenticateToken, createAppointment);
settings.patch('/appointments/:id', authenticateToken, updateAppointment);
settings.delete('/appointments/:id', authenticateToken, deleteAppointment);

//booking info
settings.get('/businesses', authenticateToken, getBusinesses);
settings.get('/businesses/:id', authenticateToken, getBusinessById);
settings.post('/businesses', authenticateToken, createBusiness);
settings.patch('/businesses/:id', authenticateToken, updateBusiness);
settings.delete('/businesses/:id', authenticateToken, deleteBusiness);

//
settings.get('/otherDetails', authenticateToken, getOtherDetails);
settings.post('/otherDetails', authenticateToken, createOtherDetails);
settings.patch('/otherDetails/:id', authenticateToken, updateOtherDetails);
settings.delete('/otherDetails/:id', authenticateToken, deleteOtherDetails);
settings.get('/otherDetails/:id', authenticateToken, getOtherDetailsById);
