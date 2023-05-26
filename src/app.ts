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
import uploads from "./router_controller/upload/upload_route";
import coustmer from "./router_controller/coustmer/coustmer_route";
import team from "./router_controller/teams/teams_route";
import work_order from "./router_controller/work_order/work_order.route";
app.use("/trajdim", signup);
app.use("/trajdim", loginRoute);
app.use("/trajdim", uploads);
app.use("/trajdim", coustmer);
app.use("/trajdim", team);
app.use("/trajdim", work_order);
export default app;
