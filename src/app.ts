import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.use(
  cors({
    origin: "",
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("files"));
app.use(express.static("api/files"));
app.use(express.static(__dirname));

// Rest of your code...
import signup from "./router_controller/signup/singup_router";
import loginRoute from "./router_controller/login/login_router";
import coustmer from "./router_controller/coustmer/coustmer_route";
import team from "./router_controller/teams/teams_route";
import work_order from "./router_controller/work_order/work_order.route";
import services from "./router_controller/services/service_route";
import contract from "./router_controller/contracts/contracts_route";
app.use("/trajdim", signup);
app.use("/trajdim", loginRoute);
app.use("/trajdim", coustmer);
app.use("/trajdim", team);
app.use("/trajdim", work_order);
app.use("/trajdim", services);
app.use("/trajdim", contract);

// sms service

import { Request, Response } from "express";
// import sgMail, { MailDataRequired } from "@sendgrid/mail";
// import twilio from "twilio";
//
// const Tradiejam_Auth = process.env.Tradiejam_Auth_Token;
// const Tradiejam_SID = process.env.Tradiejam_SID;
// const TRADIE_MAIN = process.env.TRADIE_MAIN;
//
// const client = twilio(Tradiejam_SID!, Tradiejam_Auth!, {
//   accountSid: Tradiejam_SID,
// });
// sgMail.setApiKey(TRADIE_MAIN!);

app.get("/", (req: Request, res: Response) => {
  res.send({ data: "some data", message: "some message" });
});

// app.post("/multimail", async (req: Request, res: Response) => {
//   const { email, sub, html } = req.body;
//   try {
//     const msg: MailDataRequired = {
//       to: email,
//       from: "Mail@tradiejam.com",
//       subject: sub,
//       html: html,
//     };
//     await sgMail.send(msg);
//     res.status(200).json({ success: true, message: "Email sent" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.post("/send_sms", async (req: Request, res: Response) => {
//   const { from, to, body } = req.body;
//   try {
//     await client.messages.create({ from, to, body });
//     res.status(200).json({ success: true, message: "SMS sent" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

export default app;
