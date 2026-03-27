import React from 'react';
import { motion } from 'framer-motion';

export default function Infrastructure() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="pt-32 pb-20 px-10 max-w-[1920px] mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center"
        >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">State-of-the-Art Operations</span>
            <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-8">
                Industrial <span className="text-primary italic">Precision</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mb-12">
                Our infrastructure spans over 1,400 Metric Tons of daily capacity. Equipped with the latest optical sorting technology and automated milling, ensuring zero defects across our entire premium product line.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/30 flex-1 min-w-[250px]">
                    <h3 className="text-3xl font-bold text-primary mb-2">1400 MT</h3>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest">Daily Processing</p>
                </div>
                <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/30 flex-1 min-w-[250px]">
                    <h3 className="text-3xl font-bold text-secondary mb-2">ISO 22000</h3>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest">Certified Labs</p>
                </div>
                <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/30 flex-1 min-w-[250px]">
                    <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest">Global Facilities</p>
                </div>
            </div>
        </motion.div>
    );
}
