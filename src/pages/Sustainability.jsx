import React from 'react';
import { motion } from 'framer-motion';

export default function Sustainability() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="pt-32 pb-20 px-10 max-w-[1920px] mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center"
        >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">ESG Commitment</span>
            <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-8">
                Generational <span className="text-primary italic">Stewardship</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mb-12">
                We believe in leaving the land richer than we found it. Our supply chains are designed to minimize water footprint, reduce emissions globally, and empower local farming families.
            </p>
            <div className="w-full max-w-4xl h-64 bg-emerald-900/20 rounded-2xl border border-emerald-500/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <div className="relative z-10 flex gap-4 text-emerald-400">
                    <span className="material-symbols-outlined text-5xl">eco</span>
                    <span className="material-symbols-outlined text-5xl">water_drop</span>
                    <span className="material-symbols-outlined text-5xl">solar_power</span>
                </div>
            </div>
        </motion.div>
    );
}
