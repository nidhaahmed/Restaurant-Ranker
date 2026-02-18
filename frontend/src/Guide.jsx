import React from 'react';
import { BookOpen, Github, Linkedin, MessageSquare, Code, Cpu, Layers, Database } from 'lucide-react';

const Guide = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-8 md:p-16">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Header */}
                <header className="border-b border-slate-700 pb-12">
                    <div className="flex items-center gap-4 text-brand-accent mb-4">
                        <BookOpen className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest font-mono">System Documentation</span>
                    </div>
                    <h1 className="text-5xl font-black mb-6">Strategy Simulator Guide</h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        A detailed breakdown of how the Transparent Multi-Objective Restaurant Ranking Engine
                        calculates marketplace priorities and simulates strategy tradeoffs.
                    </p>
                </header>

                {/* Section: How to use */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-brand-accent" />
                        1. Operating the Simulator
                    </h2>
                    <div className="glass-card p-8 bg-slate-800/20 space-y-4">
                        <p>The <b>Strategy Console</b> allows you to control the marketplace gravity. Every slider corresponds to a "Weight" in the final score calculation.</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
                            <li><b>Adjust Sliders:</b> Move weights from 0% to 100% to prioritize specific goals.</li>
                            <li><b>Compute Ranking:</b> Triggers the backend engine to recalculate vectors for all 50+ restaurants instantly.</li>
                            <li><b>Observe Metrics:</b> Watch the "Top 5 Concentration" – high values mean your strategy favors big players over small ones.</li>
                        </ul>
                    </div>
                </section>

                {/* Section: Formula Calculation */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Layers className="w-6 h-6 text-brand-accent" />
                        2. The Science of the Score
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-6 space-y-4">
                            <h3 className="font-bold text-brand-accent uppercase text-xs tracking-widest">Bayesian Adjusted Rating</h3>
                            <p className="text-sm text-slate-400">
                                We don't just use simple averages. We use Bayesian logic to ensure a restaurant with 2,000 reviews at 4.6 rank higher than one with 1 review at 5.0.
                                It requires a "Confidence" threshold (m=50) before the raw rating fully takes over.
                            </p>
                        </div>
                        <div className="glass-card p-6 space-y-4">
                            <h3 className="font-bold text-brand-accent uppercase text-xs tracking-widest">Min-Max Normalization</h3>
                            <p className="text-sm text-slate-400">
                                Because Delivery Time (minutes) and Total Orders (thousands) have different scales, we normalize all metrics to a 0.0 – 1.0 range so they can be compared fairly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Architecture Diagram */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Database className="w-6 h-6 text-brand-accent" />
                        3. System Architecture
                    </h2>
                    <div className="glass-card p-6 md:p-10 bg-slate-950 flex flex-col items-center overflow-hidden">
                        {/* A "Text-Based" Diagram / SVG */}
                        <div className="flex flex-col items-center gap-4 md:gap-8 w-full">
                            <div className="border-2 border-brand-accent px-4 md:px-6 py-2 md:py-3 rounded-lg bg-brand-accent/10 whitespace-nowrap">
                                <span className="font-bold text-sm md:text-base">Frontend: React + Vite</span>
                                <div className="text-[8px] md:text-[10px] text-slate-500 font-mono mt-1">Framer Motion | Tailwind v4</div>
                            </div>
                            <div className="h-4 md:h-8 w-0.5 bg-slate-700"></div>
                            <div className="border-2 border-slate-500 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-slate-800 whitespace-nowrap">
                                <span className="font-bold text-sm md:text-base">REST API Gateway (Express.js)</span>
                            </div>
                            <div className="h-4 md:h-8 w-0.5 bg-slate-700"></div>
                            <div className="border-2 border-yellow-500 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-yellow-500/10 text-center">
                                <span className="font-bold text-sm md:text-base">Ranking Engine Service</span>
                                <div className="text-[8px] md:text-[10px] text-slate-500 font-mono mt-1">Normalization Logic | Bayesian Vectorization</div>
                            </div>
                            <div className="h-4 md:h-8 w-0.5 bg-slate-700"></div>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full justify-center items-center">
                                <div className="border-2 border-slate-700 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-slate-900 border-dashed whitespace-nowrap w-full md:w-auto text-center">
                                    <span className="font-bold opacity-50 text-sm md:text-base">PostgreSQL</span>
                                </div>
                                <div className="border-2 border-success px-4 md:px-6 py-2 md:py-3 rounded-lg bg-success/10 whitespace-nowrap w-full md:w-auto text-center">
                                    <span className="font-bold text-sm md:text-base">Mock Resiliency Layer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Collaborate & Contact */}
                <section className="pt-12 border-t border-slate-700">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black">Let's Collaborate</h2>
                            <p className="text-slate-400 italic">Interested in tweaking the algorithm or adding new metrics like "Eco-Friendly Badge" or "Tier-1 Partner" boosts?</p>
                            <a
                                href="https://github.com/nidhaahmed/Restaurant-Ranker.git"
                                className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                <Github className="w-5 h-5" />
                                Open GitHub Issue
                            </a>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black">Get in Touch</h2>
                            <p className="text-slate-400">For architectural deep dives or platform strategy consulting, reach out via LinkedIn.</p>
                            <a
                                href="https://www.linkedin.com/in/nidhaahmed/"
                                className="inline-flex items-center gap-3 bg-brand-accent text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                <Linkedin className="w-5 h-5" />
                                Connect with Nidha
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="text-center pb-16 text-slate-600 font-mono text-sm tracking-tighter">
                    YOUR FEEDBACK IS VALUABLE :)
                </footer>
            </div>
        </div>
    );
};

export default Guide;
