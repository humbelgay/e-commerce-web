import express from 'express';
import { addToCart , getCartProducts, updateQuantity, removeAllFromCart } from '../controller/cart.controller.js';
import { protectRoute } from '../middlewear/auth.middle.js';
const router = express.Router();

router.put('/:id', protectRoute, updateQuantity);
router.get("/", protectRoute, getCartProducts);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);


export default router;