# 💎 Transparent Multi-Objective Restaurant Ranking Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Strategy-Simulator-blueviolet)](https://github.com/nidhaahmed/Restaurant-Ranker)

A transparent, configurable ranking engine built as an internal decision system for leadership to simulate marketplace strategies and observe ecosystem impact in real time.

## 🚀 Key Features

- **Dynamic Strategy Console**: Real-time sliders to adjust weights for Rating, Reliability, Popularity, and Fairness.
- **Bayesian Adjusted Logic**: Sophiscated math that prevents "one-hit wonder" bias (low review scams).
- **Hybrid Resiliency Layer**: Seamless fallback to intelligent mock data if PostgreSQL is offline—zero-downtime demonstration.
- **Engineering Manual**: Embedded "Project Guide" with architectural diagrams and algorithmic deep-dives.
- **Premium Aesthetics**: High-fidelity dark mode with glassmorphism and smooth Framer Motion layout transitions.

## 🏗 Architecture
- **Frontend**: React 19 + Vite + Tailwind 4 + Framer Motion
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL (with Mock Fallback)
- **Icons**: Lucide React

## 🔢 Ranking Algorithm
The engine computes a **Multi-Objective Score**:
1. **Bayesian Normalization**: Balances review volume vs. raw quality.
2. **Min-Max Scalling**: Normalizes disparate metrics (minutes vs. order counts) to a [0, 1] range.
3. **Weight Propagation**: Applies administrative weights to produce the final marketplace vector.

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nidhaahmed/Restaurant-Ranker.git
   cd Restaurant-Ranker
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create a .env file with your DB credentials (optional)
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Developer
**Nidha Ahmed Mohammad**
- LinkedIn: [nidhaahmed](https://www.linkedin.com/in/nidhaahmed/)
- GitHub: [@nidhaahmed](https://github.com/nidhaahmed/)

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Your feedback is valuable :)*
