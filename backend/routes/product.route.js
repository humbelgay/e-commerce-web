import express from 'express';

import { protectRoute, adminRoute } from '../middlewear/auth.middle.js';
// Import the product controller functions
import {  getAllProducts, toggleFeaturedProduct, getProductsByCategory, getRecommendedProducts, getFeaturedProducts, createProduct ,deleteProduct} from '../controller/product.controller.js';
const router = express.Router();

// Define the routes for product operations
router.get('/',protectRoute,adminRoute, getAllProducts); // Get all products
router.get('/featured', getFeaturedProducts); // Get featured products
router.get('/category /:category', getProductsByCategory); // Get featured products
router.get('/recommended', getRecommendedProducts); // Get featured products
router.post('/', protectRoute, adminRoute, createProduct); 
router.patch('/:id ', protectRoute, adminRoute, toggleFeaturedProduct); // Toggle featured status of a product
router.delete('/:id ', protectRoute, adminRoute, deleteProduct); // Delete a product by ID
export default router;
