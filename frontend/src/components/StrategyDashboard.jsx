import React from 'react';
import { Sliders, RefreshCcw } from 'lucide-react';

const StrategyDashboard = ({ weights, setWeights, onSimulate }) => {
    const handleWeightChange = (key, value) => {
        setWeights(prev => ({
            ...prev,
            [key]: parseFloat(value)
        }));
    };

    const sliders = [
        { key: 'rating', label: 'Rating Weight', color: 'bg-yellow-400' },
        { key: 'reliability', label: 'Reliability (Delivery)', color: 'bg-brand-accent' },
        { key: 'popularity', label: 'Popularity (Total Orders)', color: 'bg-purple-400' },
        { key: 'cancellationPenalty', label: 'Cancellation Penalty', color: 'bg-danger' },
        { key: 'newBoost', label: 'New Restaurant Boost', color: 'bg-success' },
    ];

    return (
        <aside className="w-80 glass-card p-6 h-[calc(100vh-2rem)] sticky top-4">
            <div className="flex items-center gap-2 mb-8">
                <Sliders className="text-brand-accent w-5 h-5" />
                <h2 className="text-xl font-bold">Strategy Console</h2>
            </div>

            <div className="space-y-8">
                {sliders.map((slider) => (
                    <div key={slider.key} className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">{slider.label}</span>
                            <span className="font-mono text-brand-accent">{(weights[slider.key] * 100).toFixed(0)}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={weights[slider.key]}
                            onChange={(e) => handleWeightChange(slider.key, e.target.value)}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={onSimulate}
                className="w-full mt-10 py-3 bg-brand-accent hover:bg-brand-accent/80 text-brand-dark font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
                <RefreshCcw className="w-4 h-4" />
                Compute Ranking
            </button>

            <div className="mt-8 pt-8 border-t border-slate-700/50 text-xs text-slate-500 leading-relaxed">
                <p>Adjust weights to simulate marketplace tradeoffs. Higher <b>New Boost</b> increases visibility for restaurants with &lt; 30 days on platform.</p>
            </div>
        </aside>
    );
};

export default StrategyDashboard;
