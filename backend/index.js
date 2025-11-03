import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/products", productRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.log(" MongoDB connection failed:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
