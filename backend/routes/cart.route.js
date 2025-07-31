import express from 'express';
import { addToCart , getCartProducts, updateQuantity, removeAllFromCart } from '../controller/cart.controller.js';
import { protectRoute } from '../middlewear/auth.middle.js';
const router = express.Router();


router.get("/", protectRoute, getCartProducts);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
// To update a cart item, send a PUT request to /:id with the updated quantity or details in the request body
router.put("/:id", protectRoute, updateQuantity);


export default router;