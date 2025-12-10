import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server at http://localhost:${PORT}`);
});
