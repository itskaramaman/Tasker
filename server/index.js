import express from "express";

const app = express();

app.get("/live", (req, res) => {
  res.json({ message: "Server is Live" });
});

app.listen(5000, () => console.log(`App running on port 5000`));
