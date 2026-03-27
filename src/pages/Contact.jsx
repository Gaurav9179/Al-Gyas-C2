import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="pt-32 pb-20 px-6 md:px-10 max-w-[1920px] mx-auto min-h-[80vh] flex items-center justify-center"
        >
            <div className="bg-surface-container-low border border-outline-variant/20 p-10 md:p-16 rounded-3xl max-w-2xl w-full shadow-2xl">
                <div className="text-center mb-10">
                    <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Request a Quote</span>
                    <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">
                        Let's Discuss Your Volume
                    </h1>
                    <p className="text-on-surface-variant">Send us your requirements, and our international trade desk will get back to you within 24 hours.</p>
                </div>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Company Name</label>
                            <input type="text" className="bg-surface-container-high border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none" placeholder="Acme Logistics Ltd" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                            <input type="email" className="bg-surface-container-high border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none" placeholder="procurement@acme.com" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Commodity Interest</label>
                        <select className="bg-surface-container-high border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none">
                            <option>Premium Basmati Rice</option>
                            <option>1121 Sella Rice</option>
                            <option>Red Lentils</option>
                            <option>Black Gram</option>
                            <option>Other Pulses</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Message</label>
                        <textarea rows="4" className="bg-surface-container-high border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none" placeholder="Details regarding volume, destination port, etc..."></textarea>
                    </div>

                    <button type="button" className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold uppercase tracking-widest mt-8 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20">
                        Submit Request
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
