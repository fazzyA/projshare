const express = require("express");
const router = require("./routes/project");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/project", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
