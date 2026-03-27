import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

const pillars = [
    { icon: "water_drop", title: "Water Stewardship", desc: "Reduced water usage by 35% through precision irrigation and rainwater harvesting partnerships." },
    { icon: "solar_power", title: "Clean Energy", desc: "Transitioning all processing facilities to renewable energy sources by 2027." },
    { icon: "diversity_3", title: "Farmer Empowerment", desc: "Direct sourcing from 5,000+ smallholder farms with fair-price guarantees." },
    { icon: "eco", title: "Zero Waste Policy", desc: "Byproducts from rice milling are converted into animal feed and biomass fuel." },
    { icon: "co2", title: "Carbon Neutral Goal", desc: "On track to achieve net-zero emissions across the entire supply chain by 2030." },
    { icon: "package_2", title: "Eco Packaging", desc: "30% of our export packaging now uses bio-degradable or recycled materials." },
];

export default function Sustainability() {
    return (
        <div className="min-h-screen bg-surface text-on-surface">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 to-surface z-0 pointer-events-none"></div>
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="relative z-10 max-w-4xl mx-auto">
                    <motion.span variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">ESG Commitment</motion.span>
                    <motion.h1 variants={fadeUp} className="font-headline text-4xl md:text-7xl font-black text-on-surface tracking-tighter mb-6">
                        Generational <span className="text-primary italic">Stewardship</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                        We believe in leaving the land richer than we found it. Our supply chains are designed to minimize footprint, reduce emissions, and empower local farming families.
                    </motion.p>
                </motion.div>
            </div>

            {/* Pillars */}
            <section className="py-20 px-6 md:px-10 max-w-screen-xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((p, i) => (
                        <motion.div key={i} variants={fadeUp} className="p-8 bg-surface-container-high rounded-3xl border border-outline-variant/10 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                            </div>
                            <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{p.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 text-center bg-emerald-950/50 border-t border-outline-variant/10">
                <h3 className="font-headline text-2xl md:text-4xl font-bold text-on-surface mb-4">Want Our ESG Report?</h3>
                <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">Download our full sustainability report or contact our trade desk to learn more about our ESG initiatives.</p>
                <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20 text-sm">
                    Contact Us
                </a>
            </section>
        </div>
    );
}
