import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Backend Connected");
});

export default router;