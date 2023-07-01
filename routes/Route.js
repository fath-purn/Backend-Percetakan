import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

import {
  getLayanan,
  getLayananById,
  createLayanan,
  updateLayanan,
  deleteLayanan
} from "../controllers/LayananController.js";

const router = express.Router();

// memanggil fungsi Products
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// memanggil fungsi User
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// memanggil fungsi Layanan
router.get('/layanan', getLayanan);
router.get('/layanan/:id', getLayananById);
router.post('/layanan', createLayanan);
router.patch('/layanan/:id', updateLayanan);
router.delete('/layanan/:id', deleteLayanan);

export default router;