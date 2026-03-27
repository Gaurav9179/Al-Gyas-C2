import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

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
                <Link to="/" className="text-2xl font-black tracking-tighter text-emerald-100 font-headline uppercase hover:scale-105 transition-transform duration-300">
                    Al-Gyas
                </Link>
                
                <div className="hidden lg:flex items-center gap-8 font-headline tracking-tight font-semibold uppercase text-xs xl:text-sm">
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
                
                <div className="flex items-center gap-4">
                    <Link to="/contact" className="hidden sm:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded hover:scale-105 transition-transform duration-300 font-headline font-bold text-sm uppercase tracking-wider">
                        Request a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
