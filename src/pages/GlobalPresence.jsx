import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalPresence() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="pt-32 pb-20 px-10 max-w-[1920px] mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center"
        >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">International Network</span>
            <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-8">
                Exporting to <span className="text-primary italic">40+</span> Countries
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mb-12">
                Strategically positioned logistics hubs in Dubai, Singapore, and Rotterdam guarantee swift and secure transit for bulk commodity trades worldwide.
            </p>
            <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/20 shadow-2xl flex items-center justify-center">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJzQSd3LZ9FBGyDhbppHUrUcvPs7u-h9cJaLEM9ubrKiTeHvQWnLXgraHrws3dwkqCYXcgqEbBzZAYXu3R-R0fytEizUb9q64yiqRXTICCnkFEv4-WWedo0338M-jBTAx0wUVpcH-om8jA5jjAsxClY0KDSOq38KzWk_bVs9grq3vqLJE279ELytrKSP_3O8--vaJYmfC_R8-cqqFdnW801f4lrWQIR-FbHin9RvsJ_rXUinYbXkSHlnX1RJ2dg_zw1YVzQm_ED0" alt="Global Map" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="relative z-10 text-xl font-bold tracking-widest text-[#e9c349] drop-shadow-lg uppercase">
                    Door-to-Port Excellence
                </div>
            </div>
        </motion.div>
    );
}
