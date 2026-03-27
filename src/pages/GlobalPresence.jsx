import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

const countries = [
    "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman",
    "Egypt", "Jordan", "Iraq", "Turkey", "UK", "Germany",
    "USA", "Canada", "Singapore", "Malaysia", "Indonesia", "Bangladesh",
    "Pakistan", "Kenya", "Nigeria", "South Africa", "Australia", "Japan",
];

export default function GlobalPresence() {
    return (
        <div className="min-h-screen bg-surface text-on-surface">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-surface z-0 pointer-events-none"></div>
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="relative z-10 max-w-4xl mx-auto">
                    <motion.span variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">International Network</motion.span>
                    <motion.h1 variants={fadeUp} className="font-headline text-4xl md:text-7xl font-black text-on-surface tracking-tighter mb-6">
                        Exporting to <span className="text-primary italic">40+</span> Countries
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                        Strategically positioned logistics hubs in Dubai, Singapore, and Rotterdam guarantee swift, secure transit for bulk commodity trades worldwide.
                    </motion.p>
                </motion.div>
            </div>

            {/* Map Image */}
            <section className="px-6 md:px-10 pb-20 max-w-screen-xl mx-auto">
                <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden h-[300px] md:h-[450px] shadow-2xl border border-outline-variant/10">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJzQSd3LZ9FBGyDhbppHUrUcvPs7u-h9cJaLEM9ubrKiTeHvQWnLXgraHrws3dwkqCYXcgqEbBzZAYXu3R-R0fytEizUb9q64yiqRXTICCnkFEv4-WWedo0338M-jBTAx0wUVpcH-om8jA5jjAsxClY0KDSOq38KzWk_bVs9grq3vqLJE279ELytrKSP_3O8--vaJYmfC_R8-cqqFdnW801f4lrWQIR-FbHin9RvsJ_rXUinYbXkSHlnX1RJ2dg_zw1YVzQm_ED0" alt="Global Map" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
                        {["Dubai HQ", "Singapore Hub", "Rotterdam Gateway"].map((hub, i) => (
                            <span key={i} className="px-4 py-2 bg-primary/90 text-on-primary rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-sm">📍 {hub}</span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Country Grid */}
            <section className="bg-surface-container-lowest py-20 px-6 border-t border-outline-variant/10">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="font-headline text-2xl font-bold text-on-surface mb-10 text-center">Markets We Serve</h2>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.04 } } }} className="flex flex-wrap gap-3 justify-center">
                        {countries.map((c, i) => (
                            <motion.span key={i} variants={fadeUp} className="px-4 py-2 bg-surface-container border border-outline-variant/20 text-on-surface-variant rounded-full text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors">
                                {c}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
