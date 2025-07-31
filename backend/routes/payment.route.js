import express from 'express';
import { protectRoute, adminRoute } from '../middlewear/auth.middle.js';
import { checkoutSuccess, createCheckoutSession } from '../controller/payment.conteroller.js';


const router = express.Router();

// Define the routes for payment operations
router.post('/create-checkout-session', protectRoute, createCheckoutSession); // Create a payment

// session for checkout
router.post('/checkout-success', protectRoute, checkoutSuccess)

  // Handle successful checkout logic here  


export default router;