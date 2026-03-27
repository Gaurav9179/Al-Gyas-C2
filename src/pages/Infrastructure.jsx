import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Infrastructure() {
    return (
        <div className="min-h-screen bg-surface text-on-surface">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-surface pointer-events-none z-0"></div>
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="relative z-10 max-w-4xl mx-auto">
                    <motion.span variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">State-of-the-Art Operations</motion.span>
                    <motion.h1 variants={fadeUp} className="font-headline text-4xl md:text-7xl font-black text-on-surface tracking-tighter mb-6">
                        Industrial <span className="text-primary italic">Precision</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                        Over 1,400 Metric Tons of daily capacity across ISO-certified facilities, powered by optical sorting and automated milling.
                    </motion.p>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <section className="py-12 bg-surface-container border-y border-outline-variant/10">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { stat: "1400 MT", label: "Daily Processing" },
                        { stat: "ISO 22000", label: "Certified Labs" },
                        { stat: "5+", label: "Global Facilities" },
                        { stat: "99.8%", label: "Quality Pass Rate" },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <div className="text-3xl md:text-4xl font-black text-primary font-headline mb-1">{item.stat}</div>
                            <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Factory Cards */}
            <section className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "local_dining",
                            title: "Rice Processing",
                            capacity: "1200 MT/day",
                            desc: "High-precision optical sorting, de-husking, whitening, and polishing lines.",
                        },
                        {
                            icon: "science",
                            title: "Pulse Processing",
                            capacity: "200 MT/day",
                            desc: "Triple-cleaning lines specialized for lentils, gram, and chickpeas.",
                        },
                        {
                            icon: "inventory_2",
                            title: "Packaging & Export",
                            capacity: "5 kg – 50 kg",
                            desc: "Food-grade multi-wall PP bags with OEM private label capability.",
                        },
                    ].map((f, i) => (
                        <motion.div key={i} variants={fadeUp} className="p-10 bg-surface-container-high rounded-3xl border border-outline-variant/10 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{f.title}</h3>
                            <p className="text-secondary font-black text-sm mb-4 uppercase tracking-widest">{f.capacity}</p>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Certifications */}
            <section className="py-16 px-6 bg-surface-container-lowest border-t border-outline-variant/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-10">Our Certifications</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["ISO 22000", "HACCP", "Phytosanitary", "Halal", "FSSAI", "GMP+"].map((cert, i) => (
                            <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="px-5 py-2.5 bg-surface-container border border-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest">
                                {cert}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
