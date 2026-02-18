import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StrategyDashboard from './components/StrategyDashboard';
import RestaurantCard from './components/RestaurantCard';
import { LayoutDashboard, Zap, PieChart, Users, Github, Linkedin, ExternalLink, BookOpen, AlertTriangle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weights, setWeights] = useState({
        rating: 0.40,
        reliability: 0.25,
        popularity: 0.20,
        cancellationPenalty: 0.10,
        newBoost: 0.05
    });

    const fetchRankings = async () => {
        setLoading(true);
        setError(null);
        try {
            // Sanitize URL: remove trailing slash if user added it in Vercel settings
            let API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            API_BASE_URL = API_BASE_URL.replace(/\/$/, '');

            const response = await axios.post(`${API_BASE_URL}/api/restaurants/rank`, { weights });
            setRestaurants(response.data.data);
            setAnalytics(response.data.analytics);
        } catch (err) {
            console.error("Error fetching rankings:", err);
            setError("Could not reach the ranking engine. Please ensure the Backend is running and VITE_API_URL is set correctly in Vercel.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRankings();
    }, []);

    return (
        <div className="min-h-screen p-4 md:p-8 flex flex-col lg:flex-row gap-8 relative">
            {/* Top Right Actions - Move to absolute/static on mobile to avoid overlap */}
            <div className="absolute top-4 right-4 md:fixed md:top-6 md:right-8 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-3">
                <a
                    href="/guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/80 text-brand-dark px-4 py-2 rounded-full transition-all text-sm font-bold shadow-xl border border-brand-accent/20"
                >
                    <BookOpen className="w-4 h-4" />
                    <span>Project Guide</span>
                </a>
                <a
                    href="https://github.com/nidhaahmed/Restaurant-Ranker.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-full border border-slate-700 transition-all text-sm font-medium shadow-xl"
                >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                </a>
            </div>

            {/* Sidebar Controls */}
            <StrategyDashboard
                weights={weights}
                setWeights={setWeights}
                onSimulate={fetchRankings}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-full">
                <div className="flex-1 space-y-8">
                    {/* Header & Stats */}
                    <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:mr-80">
                        <div>
                            <div className="flex items-center gap-2 text-brand-accent mb-2">
                                <Zap className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Marketplace Engine v1.0</span>
                            </div>
                            <h1 className="text-4xl font-black tracking-tight">Strategy Simulator</h1>
                        </div>

                        {analytics && (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="glass-card px-6 py-4">
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1 flex items-center gap-2">
                                        <PieChart className="w-3 h-3" /> Top 5 Conc.
                                    </div>
                                    <div className="text-xl font-mono font-bold">{analytics.top5Concentration}%</div>
                                </div>
                                <div className="glass-card px-6 py-4">
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1 flex items-center gap-2">
                                        <Users className="w-3 h-3" /> New Visibility
                                    </div>
                                    <div className="text-xl font-mono font-bold text-success">{analytics.newRestaurantVisibility}%</div>
                                </div>
                            </div>
                        )}
                    </header>

                    {/* List View */}
                    <div className="space-y-4">
                        <div className="hidden sm:flex items-center justify-between text-slate-500 text-sm px-4">
                            <div className="flex gap-4">
                                <span>Position & Restaurant</span>
                            </div>
                            <div className="flex gap-8 lg:gap-16 lg:mr-8">
                                <span>Performance Breakdown</span>
                                <span>Final Score</span>
                            </div>
                        </div>

                        <AnimatePresence mode='popLayout'>
                            {loading ? (
                                <div className="h-64 flex items-center justify-center text-slate-500 animate-pulse font-mono tracking-widest text-xs">
                                    RECOMPUTING MARKETPLACE VECTORS...
                                </div>
                            ) : error ? (
                                <div className="h-64 flex flex-col items-center justify-center text-danger glass-card border-danger/20 p-8 text-center space-y-4">
                                    <AlertTriangle className="w-12 h-12" />
                                    <p className="font-medium">{error}</p>
                                    <button
                                        onClick={fetchRankings}
                                        className="px-4 py-2 bg-danger/10 hover:bg-danger/20 rounded-lg text-sm transition-colors"
                                    >
                                        Retry Connection
                                    </button>
                                </div>
                            ) : (
                                restaurants.map((restaurant, index) => (
                                    <RestaurantCard
                                        key={restaurant.id}
                                        restaurant={restaurant}
                                        index={index}
                                    />
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Developer Footer */}
                <footer className="mt-16 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
                    <div className="text-slate-500 text-sm">
                        Developed by <span className="text-slate-300 font-semibold italic">Nidha Ahmed Mohammad</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/nidhaahmed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors text-sm"
                        >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn Profile</span>
                            <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default App;
