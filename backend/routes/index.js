const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();
router.use("/user", userRouter);
router.use("/account", accountRouter);
router.get("/lol", async (req, res) => {
  res.status(200).json({ message: "req received!" });
});

module.exports = router;
