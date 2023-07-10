import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
} from "../controllers/ProductController.js";

// import {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/UserController.js";

import {
  getLayanan,
  getLayananById,
  createLayanan,
  updateLayanan,
  deleteLayanan
} from "../controllers/LayananController.js";

import {
  getBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/BlogController.js";

import {
  getFAQ,
  getFAQById,
  createFAQ,
  updateFAQ,
  deleteFAQ
} from "../controllers/FAQController.js";

const router = express.Router();

// memanggil fungsi Products
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/products_name/", getProductByName);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// memanggil fungsi User
// router.get('/users', getUsers);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

// memanggil fungsi Layanan
router.get('/layanan', getLayanan);
router.get('/layanan/:id', getLayananById);
router.post('/layanan', createLayanan);
router.patch('/layanan/:id', updateLayanan);
router.delete('/layanan/:id', deleteLayanan);

// memanggil fungsi Blog
router.get('/blog', getBlog);
router.get('/blog/:id', getBlogById);
router.post('/blog', createBlog);
router.patch('/blog/:id', updateBlog);
router.delete('/blog/:id', deleteBlog);

// memanggil fungsi FAQ
router.get('/faq', getFAQ);
router.get('/faq/:id', getFAQById);
router.post('/faq', createFAQ);
router.patch('/faq/:id', updateFAQ);
router.delete('/blog/:id', deleteFAQ);

export default router;
