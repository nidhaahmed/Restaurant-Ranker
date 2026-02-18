# 🚀 Deployment Guide: Restaurant Ranking Engine

Since this is a full-stack app, we will deploy the **Backend** and **Frontend** separately for the best performance.

---

## 🏗️ Phase 1: Backend (Render.com)
Render is perfect for Node.js apps.

1.  **Sign up** at [Render.com](https://render.com) and connect your GitHub.
2.  Click **New +** > **Web Service**.
3.  Select your `Restaurant-Ranker` repository.
4.  **Settings**:
    - **Name**: `restaurant-ranker-api`
    - **Root Directory**: `backend`
    - **Runtime**: `Node`
    - **Build Command**: `npm install`
    - **Start Command**: `node server.js`
5.  **Environment Variables**:
    - Click the "Advanced" button.
    - Add `PORT` = `5000`.
    - (Optional) If you have a real DB, add `DB_USER`, `DB_PASSWORD`, etc.
    - *If you don't add DB variables, the app will safely use the code's Mock fallback.*
6.  **Copy the URL**: Once deployed, it will look like `https://restaurant-ranker-api.onrender.com`.

---

## 🎨 Phase 2: Frontend (Vercel)
Vercel is the industry standard for React/Vite apps.

1.  **Sign up** at [Vercel.com](https://vercel.com) and connect your GitHub.
2.  Click **Add New** > **Project**.
3.  Import the `Restaurant-Ranker` repository.
4.  **Project Settings**:
    - **Framework Preset**: `Vite`
    - **Root Directory**: `frontend`
5.  **Environment Variables**:
    - Add `VITE_API_URL` = (The Render URL you copied in Phase 1).
6.  **Deploy**: Click Deploy! Your dashboard is now live.

---

## 📊 Phase 3: Database (Supabase) - *Optional*
If you want to move away from Mock data:
1. Create a free PostgreSQL DB on [Supabase](https://supabase.com).
2. Get the connection string.
3. Update the **Environment Variables** in your **Render** settings.
4. Run the `seed.js` script to populate it.

---
*Developed by Nidha Ahmed Mohammad*
