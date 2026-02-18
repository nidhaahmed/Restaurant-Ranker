const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { calculateRankings } = require('../services/rankingEngine');

// Default Weights (If not provided by user)
const DEFAULT_WEIGHTS = {
    rating: 0.4,
    reliability: 0.25,
    popularity: 0.2,
    cancellationPenalty: 0.1,
    newBoost: 0.05
};

// GET /api/restaurants
// Returns ranked restaurants based on provided weights
router.post('/rank', async (req, res) => {
    try {
        const weights = req.body.weights || DEFAULT_WEIGHTS;
        let restaurantData;

        try {
            const result = await db.query('SELECT * FROM restaurants');
            restaurantData = result.rows;
            if (restaurantData.length === 0) throw new Error('Empty DB');
        } catch (dbErr) {
            console.warn('⚠️ Database connection failed or empty, falling back to mock data.');
            const { mockRestaurants } = require('../db/mockData');
            restaurantData = mockRestaurants;
        }

        const rankedList = calculateRankings(restaurantData, weights);

        // Calculate Marketplace Analytics
        const top20 = rankedList.slice(0, 20);
        const analytics = {
            top5Concentration: (top20.slice(0, 5).reduce((acc, r) => acc + parseFloat(r.finalScore), 0) /
                top20.reduce((acc, r) => acc + parseFloat(r.finalScore), 0) * 100).toFixed(1),
            avgDeliveryTimeTop10: (rankedList.slice(0, 10).reduce((acc, r) => acc + r.avg_delivery_time, 0) / 10).toFixed(1),
            newRestaurantVisibility: (top20.filter(r => r.is_new).length / 20 * 100).toFixed(1)
        };

        res.json({
            success: true,
            data: rankedList,
            analytics
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Database query failed' });
    }
});

module.exports = router;
