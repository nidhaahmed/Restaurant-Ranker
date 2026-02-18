/**
 * Ranking Engine Service
 * Handles mathematical modeling of restaurant rankings
 */

const calculateRankings = (restaurants, weights) => {
    // m = Confidence threshold (minimum reviews for a 5.0 to be "trusted")
    const m = 50;
    const globalAvgRating = restaurants.reduce((acc, r) => acc + r.rating, 0) / restaurants.length;

    // 1. Calculate Min/Max for Normalization
    const metrics = {
        delivery: restaurants.map(r => r.avg_delivery_time),
        orders: restaurants.map(r => r.total_orders),
        cancellation: restaurants.map(r => r.cancellation_rate)
    };

    const limits = {
        minDelivery: Math.min(...metrics.delivery),
        maxDelivery: Math.max(...metrics.delivery),
        maxOrders: Math.max(...metrics.orders),
        maxCancellation: Math.max(...metrics.cancellation) || 1
    };

    return restaurants.map(restaurant => {
        // 1. Bayesian Adjusted Rating
        // Formula: (v / (v+m)) * R + (m / (v+m)) * C
        const v = restaurant.review_count;
        const R = restaurant.rating;
        const bayesianRating = (v / (v + m)) * R + (m / (v + m)) * globalAvgRating;

        // 2. Normalization (Scale 0 to 1)
        // Delivery: Lower is better, so we invert it
        const normalizedDelivery = 1 - ((restaurant.avg_delivery_time - limits.minDelivery) / (limits.maxDelivery - limits.minDelivery || 1));

        // Order Velocity: Higher is better
        const normalizedVelocity = restaurant.total_orders / (limits.maxOrders || 1);

        // Cancellation: Lower is better (Penalty)
        const normalizedCancellation = restaurant.cancellation_rate / (limits.maxCancellation || 1);

        // 3. Apply Weights
        // Score = (w1 * Rating) + (w2 * Delivery) + (w3 * Velocity) - (w4 * Cancellation) + (w5 * NewBoost)
        let score = (weights.rating * (bayesianRating / 5)) + // Scale rating 0-1
            (weights.reliability * normalizedDelivery) +
            (weights.popularity * normalizedVelocity) -
            (weights.cancellationPenalty * normalizedCancellation) +
            (restaurant.is_new ? weights.newBoost : 0);

        return {
            ...restaurant,
            bayesianRating: bayesianRating.toFixed(2),
            finalScore: score.toFixed(4),
            scoreBreakdown: {
                ratingContrib: (weights.rating * (bayesianRating / 5)).toFixed(3),
                deliveryContrib: (weights.reliability * normalizedDelivery).toFixed(3),
                velocityContrib: (weights.popularity * normalizedVelocity).toFixed(3),
                cancellationPenalty: (weights.cancellationPenalty * normalizedCancellation).toFixed(3),
                newBoost: (restaurant.is_new ? weights.newBoost : 0).toFixed(3)
            }
        };
    }).sort((a, b) => b.finalScore - a.finalScore);
};

module.exports = { calculateRankings };
