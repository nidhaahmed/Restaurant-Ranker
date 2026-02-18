const db = require('./db/connection');

const createTableQuery = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS restaurants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    rating FLOAT NOT NULL,
    review_count INT NOT NULL,
    avg_delivery_time INT NOT NULL,
    cancellation_rate FLOAT NOT NULL,
    total_orders INT NOT NULL,
    is_new BOOLEAN DEFAULT FALSE,
    price_range INT NOT NULL CHECK (price_range BETWEEN 1 AND 4)
  );
`;

const seedData = [
    // Name, Rating, ReviewCount, DeliveryTime, CancellationRate, TotalOrders, IsNew, PriceRange
    ['The Golden Spatula', 4.8, 1200, 25, 0.02, 5000, false, 3],
    ['Swift Bites', 4.2, 3500, 15, 0.01, 12000, false, 1],
    ['Gourmet Garden', 4.9, 50, 45, 0.05, 200, true, 4], // New, high rating, low reviews
    ['Midnight Diner', 3.8, 800, 20, 0.08, 1500, false, 2],
    ['Pizza Express', 4.5, 5000, 30, 0.03, 20000, false, 2],
    ['Health Hub', 4.6, 120, 35, 0.04, 600, true, 3],
    ['Taco Town', 4.1, 900, 18, 0.02, 3000, false, 1],
    ['Sushi Zen', 4.7, 450, 40, 0.06, 1200, false, 4],
    ['Burger Baron', 4.3, 2100, 22, 0.04, 7500, false, 2],
    ['Noodle House', 4.4, 150, 28, 0.03, 800, true, 2]
];

// Add more random data to reach 50
for (let i = 11; i <= 50; i++) {
    seedData.push([
        `Restaurant ${i}`,
        parseFloat((3 + Math.random() * 2).toFixed(1)),
        Math.floor(Math.random() * 5000),
        Math.floor(15 + Math.random() * 45),
        parseFloat((Math.random() * 0.1).toFixed(3)),
        Math.floor(Math.random() * 10000),
        Math.random() > 0.8,
        Math.floor(1 + Math.random() * 4)
    ]);
}

async function runSeed() {
    try {
        console.log('--- Cleaning Database ---');
        await db.query('DROP TABLE IF EXISTS restaurants');

        console.log('--- Creating Table ---');
        await db.query(createTableQuery);

        console.log('--- Seeding Data ---');
        for (const row of seedData) {
            await db.query(
                'INSERT INTO restaurants (name, rating, review_count, avg_delivery_time, cancellation_rate, total_orders, is_new, price_range) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                row
            );
        }
        console.log('--- Seeding Completed Successfully ---');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
}

runSeed();
