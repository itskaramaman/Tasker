import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@atlascluster.5kbr3tl.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("DB Connected");
  } catch (err) {
    console.log("Error connecting DB: " + err);
  }
}

export default connectDB;
