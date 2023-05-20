import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

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
app.use('/trajdim',signup);
app.use('/trajdim',loginRoute);
export default app;
