 Product Catalog App
 A modern full-stack Product Catalog built with Next.js, Node.js (Express), and MongoDB. Users
 can view, search, filter, and add new products through a clean, responsive UI.
 Tech Stack
 1 Frontend: Next.js + Tailwind CSS
 2 Backend: Node.js + Express
 3 Database: MongoDB
 4 Image Uploads: Multer (local storage)
 Features
 1 Product list with images
 2 Search & Filter by name or category
 3 Pagination support
 4 Image upload with live preview
 5 Responsive, modern UI
 6 MongoDB connected backend
 Setup Instructions
 Backend Setup
 1. Open a terminal and navigate to the backend folder: cd backend npm install npm run dev 2.
 Create a .env file inside backend folder: PORT=5000
 MONGO_URI=mongodb://localhost:27017/product_catalog Backend runs on:
 http://localhost:5000
 Frontend Setup
 1. Open a new terminal and navigate to the frontend folder: cd frontend npm install npm run dev 2.
 Create a .env.local file inside frontend folder: NEXT_PUBLIC_API=http://localhost:5000 Frontend
 runs on: http://localhost:3000
 API Endpoints- GET /products → Get all products with pagination- POST /products → Add a new product with image upload
 Example Usage- Visit http://localhost:3000- Click the (+) button to add a product- Search by product name or category- Navigate between pages with pagination
 Deployment Notes- Use MongoDB Atlas for production.- Use cloud storage (e.g., AWS S3, Cloudinary) for image uploads.- Update NEXT_PUBLIC_API in frontend to your deployed backend URL.
 GitHub Clone
 git clone https://github.com/<your-username>/product-catalog.git cd product-catalog
 Ready to deploy and showcase as a full-stack project
