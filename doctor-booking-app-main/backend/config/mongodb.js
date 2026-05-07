import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`);

    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
