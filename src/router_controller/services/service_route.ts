import express from "express";
import authenticateToken from "../../middleware/auth";
import {servicesPost} from "./controller/service_controller";

const services = express.Router();
services.post('/services',authenticateToken,servicesPost)
export default services;
