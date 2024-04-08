const express = require("express");
const apiRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// app.use(cors);
app.use(bodyParser.json());

app.use("/api/v1", apiRouter);
// app.get("/lol", async (req, res) => {
//   console.log("req received");
//   res.status(200).json({ msg: "lol" });
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
