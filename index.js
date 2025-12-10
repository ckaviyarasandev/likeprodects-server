import express from "express";
import users from "./user.js";
const app = express();

app.get("/", (req, res) => {
  res.send("hello world server");
});

app.get("/api/user", (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server at http://localhost:${PORT}`);
});
