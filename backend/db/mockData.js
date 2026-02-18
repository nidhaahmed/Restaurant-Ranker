const mockRestaurants = [
    { id: '1', name: 'The Golden Spatula', rating: 4.8, review_count: 1200, avg_delivery_time: 25, cancellation_rate: 0.02, total_orders: 5000, is_new: false, price_range: 3 },
    { id: '2', name: 'Swift Bites', rating: 4.2, review_count: 3500, avg_delivery_time: 15, cancellation_rate: 0.01, total_orders: 12000, is_new: false, price_range: 1 },
    { id: '3', name: 'Gourmet Garden', rating: 4.9, review_count: 50, avg_delivery_time: 45, cancellation_rate: 0.05, total_orders: 200, is_new: true, price_range: 4 },
    { id: '4', name: 'Midnight Diner', rating: 3.8, review_count: 800, avg_delivery_time: 20, cancellation_rate: 0.08, total_orders: 1500, is_new: false, price_range: 2 },
    { id: '5', name: 'Pizza Express', rating: 4.5, review_count: 5000, avg_delivery_time: 30, cancellation_rate: 0.03, total_orders: 20000, is_new: false, price_range: 2 },
    { id: '6', name: 'Health Hub', rating: 4.6, review_count: 120, avg_delivery_time: 35, cancellation_rate: 0.04, total_orders: 600, is_new: true, price_range: 3 },
    { id: '7', name: 'Taco Town', rating: 4.1, review_count: 900, avg_delivery_time: 18, cancellation_rate: 0.02, total_orders: 3000, is_new: false, price_range: 1 },
    { id: '8', name: 'Sushi Zen', rating: 4.7, review_count: 450, avg_delivery_time: 40, cancellation_rate: 0.06, total_orders: 1200, is_new: false, price_range: 4 },
    { id: '9', name: 'Burger Baron', rating: 4.3, review_count: 2100, avg_delivery_time: 22, cancellation_rate: 0.04, total_orders: 7500, is_new: false, price_range: 2 },
    { id: '10', name: 'Noodle House', rating: 4.4, review_count: 150, avg_delivery_time: 28, cancellation_rate: 0.03, total_orders: 800, is_new: true, price_range: 2 }
];

// Add 40 more random items
for (let i = 11; i <= 50; i++) {
    mockRestaurants.push({
        id: i.toString(),
        name: `Restaurant ${i}`,
        rating: parseFloat((3 + Math.random() * 2).toFixed(1)),
        review_count: Math.floor(Math.random() * 5000),
        avg_delivery_time: Math.floor(15 + Math.random() * 45),
        cancellation_rate: parseFloat((Math.random() * 0.1).toFixed(3)),
        total_orders: Math.floor(Math.random() * 10000),
        is_new: Math.random() > 0.8,
        price_range: Math.floor(1 + Math.random() * 4)
    });
}

module.exports = { mockRestaurants };
