# Implementation Plan: Transparent Restaurant Ranking Engine

## 🏗 Architecture Overview
- **Backend**: Node.js + Express.js
- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion (for animations)
- **Database**: PostgreSQL
- **State Management**: React Context or Zustand for global weights

## 📊 Database Schema details
### `restaurants` table
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key |
| `name` | VARCHAR | Restaurant Name |
| `rating` | FLOAT | Raw Average Rating |
| `review_count` | INT | Total number of reviews |
| `avg_delivery_time`| INT | Average time in minutes |
| `cancellation_rate`| FLOAT | % of orders cancelled |
| `total_orders` | INT | Popularity/Velocity metric |
| `is_new` | BOOLEAN | New restaurant indicator |
| `price_range` | INT | 1-4 scale ($ to $$$$) |

## 🔢 Ranking Logic Deep Dive
### 1. Bayesian Adjusted Rating
We use this to prevent restaurants with 1 review (5.0 star) from ranking higher than those with 1000 reviews (4.8 star).
`adjusted_rating = (review_count / (review_count + m)) * rating + (m / (review_count + m)) * global_avg_rating`
*   `m`: Minimum review threshold (e.g., 50)

### 2. Normalization (Min-Max)
All metrics must be mapped to a [0, 1] range.
- `delivery_score = 1 - (delivery_time - min_time) / (max_time - min_time)`
- `velocity_score = (total_orders - min_orders) / (max_orders - min_orders)`
- `cancellation_penalty = cancellation_rate / max_cancellation_rate`

### 3. Final Score
`score = (w1 * adj_rating) + (w2 * delivery_score) + (w3 * velocity_score) - (w4 * cancellation_penalty) + (w5 * new_boost)`

## 🚀 Execution Steps

### Step 1: Project Initialization
- Initialize `backend/` and `frontend/` folders.
- Install dependencies: `express`, `pg`, `cors`, `dotenv` (Backend) | `vite`, `tailwindcss`, `axios`, `lucide-react`, `recharts` (Frontend).

### Step 2: Database Layer
- Setup local PostgreSQL connection.
- Create seeding script `seed.js` to generate 50+ diverse restaurants for simulation.

### Step 3: Backend Services
- Build `rankingEngine.js`: A utility that takes weights and restaurant data, and returns a sorted list with explanation metadata.

### Step 4: Admin Dashboard (Strategy Simulator)
- Implement sliders using Tailwind range inputs.
- Create a "Marketplace Metrics" card using `recharts` to show Top 5 Concentration and New Restaurant visibility.

### Step 5: Customer View
- Create a "Why this rank?" tooltip that shows the breakdown:
    - "High reviews +45pts"
    - "Fast delivery +20pts"
    - "New restaurant boost +10pts"

### Step 6: Final Polish
- Theme: "Marketplace Midnight" (Dark mode by default, neon accents).
- Transitions: Smooth card re-ordering using Framer Motion `layout` prop.
