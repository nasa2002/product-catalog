import express from "express";
import multer from "multer";
import Product from "../models/Product.js";
import path from "path";

const router = express.Router();

// Multer setup (local uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

//  POST /products → Add new product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const newProduct = new Product({
      name,
      price,
      category,
      image: imagePath,
    });

    await newProduct.save();
    res.json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let { search = "", category = "", page = 1, limit = 6 } = req.query;

    page = Number(page);
    limit = Number(limit);

    const filter = {};
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    const skip = (page - 1) * limit;
    const total = await Product.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    const data = await Product.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
      total,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});



export default router;
