import open from "open";
import express from "express";

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("hehe");
  open("http://www.naver.com");
  open("http://www.coupang.com");
  res.status(200).end("hehe");
});

export default router;
