import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Infrastructure', path: '/infrastructure' },
        { name: 'Global Presence', path: '/global-presence' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-emerald-950/70 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300">
            <div className="flex justify-between items-center px-6 lg:px-10 py-4 max-w-[1920px] mx-auto w-full">
                <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-emerald-100 font-headline uppercase hover:scale-105 transition-transform duration-300">
                    Al-Gyas
                </Link>
                
                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8 font-headline tracking-tight font-semibold uppercase text-xs">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`transition-all duration-300 ${
                                    isActive 
                                    ? 'text-secondary border-b-2 border-secondary pb-1' 
                                    : 'text-emerald-100/80 hover:text-secondary'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg hover:scale-105 transition-transform duration-300 font-headline font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-primary/20">
                        Request a Quote
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <button 
                    className="xl:hidden text-emerald-100 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">{isOpen ? "close" : "sort"}</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-emerald-950/95 backdrop-blur-3xl overflow-hidden border-t border-white/5"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4 font-headline uppercase text-sm font-bold tracking-widest">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`py-2 transition-colors ${
                                        location.pathname === link.path 
                                        ? 'text-secondary border-b border-secondary/20 block w-full' 
                                        : 'text-emerald-100/80 hover:text-secondary block w-full'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link 
                                to="/contact" 
                                onClick={() => setIsOpen(false)}
                                className="mt-4 text-center bg-primary text-on-primary py-3 rounded-lg hover:bg-secondary transition-colors"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
