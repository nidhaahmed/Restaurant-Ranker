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
            className="glass-card p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group hover:border-brand-accent/30 transition-all"
        >
            {/* Rank Indicator */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-xl sm:text-2xl text-slate-500 group-hover:text-brand-accent transition-colors">
                #{index + 1}
            </div>

            <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2 sm:mb-1">
                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                    {restaurant.is_new && (
                        <span className="bg-success/10 text-success text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-success/20">
                            New
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-slate-100 font-medium">{restaurant.rating}</span>
                        <span className="text-slate-500 text-xs">({restaurant.review_count})</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.avg_delivery_time}<span className="hidden xs:inline"> mins</span><span className="xs:hidden">m</span></span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{restaurant.total_orders}+<span className="hidden xs:inline"> orders</span></span>
                    </div>
                    <div className="flex items-center gap-1 text-danger/80">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{(restaurant.cancellation_rate * 100).toFixed(1)}%<span className="hidden xs:inline"> cancel</span></span>
                    </div>
                </div>
            </div>

            {/* Score Visualization */}
            <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-slate-700/50 pt-3 sm:pt-0 sm:pl-6 min-w-full sm:min-w-[120px]">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5 flex items-center justify-center sm:justify-end gap-1">
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
