import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-surface text-on-surface">
            {/* Hero */}
            <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-surface pointer-events-none"></div>
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="relative z-10 max-w-3xl mx-auto">
                    <motion.span variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">International Trade Desk</motion.span>
                    <motion.h1 variants={fadeUp} className="font-headline text-4xl md:text-6xl font-black text-on-surface tracking-tighter mb-6">
                        Let's Discuss <span className="text-primary italic">Your Volume</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-on-surface-variant text-lg">
                        Send your requirements and our trade team will respond within 24 hours.
                    </motion.p>
                </motion.div>
            </div>

            {/* Main Grid */}
            <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-12">

                {/* Left Info Panel */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-8">
                    <div className="p-8 bg-surface-container rounded-2xl border border-outline-variant/10 space-y-6">
                        <h3 className="font-headline text-xl font-bold text-on-surface">Contact Information</h3>
                        <div className="space-y-4 text-sm text-on-surface-variant">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                                <p>Emerald Plaza, Floor 18<br/>Business District North<br/>Dubai, UAE</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <a href="mailto:trade@al-gyas.com" className="hover:text-primary transition-colors">trade@al-gyas.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <a href="tel:+97140000000" className="hover:text-primary transition-colors">+971 4 000 0000</a>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Quick Connect */}
                    <a
                        href="https://wa.me/97140000000?text=Hi! I am interested in sourcing premium agricultural products from Al-Gyas."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/20 transition-all group"
                    >
                        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-[#25D366] text-sm">Chat on WhatsApp</p>
                            <p className="text-on-surface-variant text-xs">Quick response guaranteed</p>
                        </div>
                        <span className="material-symbols-outlined text-[#25D366] ml-auto group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>

                    {/* Trust Badges */}
                    <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10 space-y-3">
                        <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-4">Certifications</p>
                        {["ISO 22000 Food Safety", "HACCP Certified", "Phytosanitary Compliant", "Halal Certified"].map((badge, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                                <span className="material-symbols-outlined text-primary text-base">verified</span>
                                {badge}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: RFQ Form */}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-3">
                    <div className="bg-surface-container-low border border-outline-variant/20 p-8 md:p-12 rounded-3xl shadow-2xl">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-8">Request For Quote (RFQ)</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Company Name *</label>
                                    <input type="text" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="Acme Logistics Ltd" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email Address *</label>
                                    <input type="email" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="trade@acme.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Phone / WhatsApp</label>
                                    <input type="tel" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="+971 XX XXX XXXX" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Destination Country</label>
                                    <input type="text" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="e.g. Saudi Arabia" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Commodity Interest *</label>
                                <select className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all">
                                    <option value="">-- Select a Product --</option>
                                    <option>Premium Basmati Rice</option>
                                    <option>1121 Sella Rice</option>
                                    <option>Silky Polished Rice</option>
                                    <option>Red Lentils</option>
                                    <option>Black Gram</option>
                                    <option>Other Pulses</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Estimated Volume (MT/month)</label>
                                <input type="text" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="e.g., 50 MT" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Additional Requirements</label>
                                <textarea rows="4" className="bg-surface-container rounded-xl p-4 text-on-surface border border-outline-variant/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/40 resize-none" placeholder="Packaging specs, delivery port, certifications needed..."></textarea>
                            </div>

                            <button type="button" className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-primary/20 text-sm">
                                Submit RFQ — Get a Response in 24hrs
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
