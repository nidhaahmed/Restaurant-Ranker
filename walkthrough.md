# 💎 Project Walkthrough: Restaurant Ranking Engine

Welcome to the **Transparent Multi-Objective Restaurant Ranking Engine**. This walkthrough explains the architecture, the mathematics of the ranking logic, and how to use the Strategy Simulator.

## 🏗 Architecture
- **Frontend**: A high-performance React application built with Vite and styled with Tailwind CSS. It uses **Framer Motion** for smooth layout transitions when rankings change.
- **Backend**: A Node.js + Express API that serves as the "Ranking Brain." It computes complex scores in real-time based on your inputs.
- **Database Layer**: Built with PostgreSQL. The system includes a **Hybrid Resiliency Layer**: if a local database is unavailable, it automatically falls back to a high-fidelity mock dataset of 50 restaurants so the simulator never fails.

## 🔢 The "Ranking Brain" (Algorithm Details)
The core engine uses three distinct mathematical steps to ensure fairness:

### 1. Bayesian Adjusted Rating
We solve the "Low Review Bias" problem. A restaurant with one 5-star review shouldn't outrank a restaurant with 1,000 reviews at 4.8 stars.
- **Formula**: `(v / (v+m)) * R + (m / (v+m)) * C`
- *v*: Number of reviews.
- *m*: Confidence threshold (set to 50).
- *R*: Average rating.
- *C*: Global average rating.

### 2. Metric Normalization
How do you compare 15 minutes of delivery time to 5,000 total orders? We use **Min-Max Normalization** to map all values to a common [0.0, 1.0] scale.

### 3. Weighted Scoring
The final rank is determined by the weights you set in the **Strategy Console**:
`Final Score = (Rating Weight * AdjRating) + (Reliability Weight * Speed) + (Popularity Weight * Volume) - (Penalty * Cancellation) + (NewBoost)`

## 🎛 Using the Strategy Simulator
1.  **Dashboard Sidepanel**: Use the sliders to adjust marketplace priorities.
2.  **Marketplace Analytics**:
    - **Top 5 Concentration**: High percentages indicate a "Winner Takes All" market.
    - **New Visibility**: Shows how many start-up restaurants are reaching the top 20.
3.  **Customer Transparency**: Each restaurant card displays its "Engine Score" and its breakdown. Click the info icons to see the raw metrics.

## 🚀 Running the Project
- **Backend**: `cd backend && npm run dev` (Runs on port 5000)
- **Frontend**: `cd frontend && npm run dev` (Runs on port 5173)

---
*Built for leadership strategy and marketplace fairness modeling.*
