import http from "http";
import app from "./src/app";

const server = http.createServer(app);
const PORT = 5000;
server.listen(PORT, () => {
  console.log("You are now connected");
});
