import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => app.listen(5000, () => console.log(`App running on port 5000`)))
  .catch((err) => console.log(`Could not start server ${err}`));
