import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// routes imports
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

// routes declarations
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/live", (req, res) => {
  res.json({ message: "Server is Live" });
});

export default app;
