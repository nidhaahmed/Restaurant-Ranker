# Project Todo: Restaurant Ranking Engine

## Phase 1: Foundation & Setup
- [ ] Initialize Backend (Node.js, Express)
- [ ] Initialize Frontend (React + Vite, Tailwind CSS)
- [ ] Setup PostgreSQL Database (Local or Supabase)
- [ ] Create Database Schema (`restaurants` table)
- [ ] Seed Database with dummy restaurant data

## Phase 2: Core Ranking Engine
- [ ] Implement Bayesian Adjusted Rating logic
- [ ] Implement Metric Normalization (Delivery, Velocity, Cancellation)
- [ ] Implement Weighted Score Calculation
- [ ] Create Service to handle ranking computations

## Phase 3: Backend API Development
- [ ] GET `/restaurants` - Return ranked results based on current weights
- [ ] POST `/ranking/weights` - Update active strategy weights
- [ ] GET `/ranking/analytics` - Return marketplace health metrics

## Phase 4: Frontend - Customer View
- [ ] Design Responsive Restaurant Card
- [ ] Implement "New" Badge and Rank Position
- [ ] Create Ranking Explanation Tooltip
- [ ] Fetch and display ranked list from Backend

## Phase 5: Frontend - Admin Dashboard
- [ ] Create Weight Adjustment Sliders
- [ ] Real-time Ranking Preview (Live updates when sliders move)
- [ ] Analytics Visualizations (Concentration %, Delivery Time avg)
- [ ] Strategy Simulation Mode

## Phase 6: Polish & Aesthetics
- [ ] Apply "Premium" Design (Glassmorphism, Vibrant Colors, Modern Typography)
- [ ] Add Micro-animations (Framer Motion or CSS transitions)
- [ ] Final Bug Squashing & Responsive Testing

## Phase 7: Documentation
- [ ] Generate `walkthrough.md`
- [ ] Finalize README.md
