import React from 'react';
import { Star, Clock, AlertTriangle, TrendingUp, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const RestaurantCard = ({ restaurant, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-4 flex items-center gap-6 group hover:border-brand-accent/30 transition-all"
        >
            {/* Rank Indicator */}
            <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-slate-500 group-hover:text-brand-accent transition-colors">
                #{index + 1}
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                    {restaurant.is_new && (
                        <span className="bg-success/10 text-success text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-success/20">
                            New
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-5 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-slate-100 font-medium">{restaurant.rating}</span>
                        <span className="text-slate-500 text-xs">({restaurant.review_count})</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.avg_delivery_time} mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{restaurant.total_orders}+ orders</span>
                    </div>
                    <div className="flex items-center gap-1 text-danger/80">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{(restaurant.cancellation_rate * 100).toFixed(1)}% cancel</span>
                    </div>
                </div>
            </div>

            {/* Score Visualization */}
            <div className="text-right border-l border-slate-700/50 pl-6 min-w-[120px]">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5 flex items-center justify-end gap-1">
                    Engine Score <Info className="w-3 h-3 cursor-help text-slate-600" />
                </div>
                <div className="text-2xl font-mono font-bold text-brand-accent">
                    {restaurant.finalScore}
                </div>
                <div className="text-[10px] text-slate-500">
                    Bayesian: {restaurant.bayesianRating}
                </div>
            </div>
        </motion.div>
    );
};

export default RestaurantCard;
