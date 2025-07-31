import express from 'express';


import { protectRoute, adminRoute } from '../middlewear/auth.middle.js';
import { getAnalyticsData, getDailySalesData } from "../controller/analytics.controller.js";

const router = express.Router();

router.get('/', protectRoute, adminRoute, async (req, res) => {
    try {
        const analyticsData = await getAnalyticsData();

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() -7 * 24 * 60 * 60 * 1000); // 7 days ago

        const dailySales = await getDailySalesData(startDate, endDate);

        res.status(200).json({
            message: 'Analytics data retrieved successfully',
            analyticsData,
            dailySales
        });
    } catch (error) {
        console.error('Error retrieving analytics data:', error);
        res.status(500).json({
            message: 'Error retrieving analytics data',
            error: error.message
        });
        
    }
});

export default router;