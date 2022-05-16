import express from "express";
import router from "./router/open.js";

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(8080);
