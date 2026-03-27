import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0b1326] w-full pt-20 pb-10 px-10 border-t border-emerald-900/20 mt-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1920px] mx-auto w-full">
                <div className="space-y-6">
                    <div className="text-xl font-bold text-emerald-100 font-headline uppercase">Al-Gyas Global</div>
                    <p className="font-body text-sm leading-relaxed text-zinc-400">
                        Precision agricultural sourcing and export solutions for the global commodity market. Sustainable, traceable, and reliable.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">
                            <span className="material-symbols-outlined">social_leaderboard</span>
                        </a>
                        <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="text-emerald-400 font-headline font-bold text-sm mb-6 uppercase tracking-widest">Quick Links</h5>
                    <ul className="space-y-4 font-body text-sm">
                        <li><Link className="text-zinc-500 hover:text-emerald-200 transition-colors hover:translate-x-1 inline-block" to="/products">Product Catalog</Link></li>
                        <li><Link className="text-zinc-500 hover:text-emerald-200 transition-colors hover:translate-x-1 inline-block" to="/sustainability">Sustainability Report</Link></li>
                        <li><Link className="text-zinc-500 hover:text-emerald-200 transition-colors hover:translate-x-1 inline-block" to="/global-presence">Global Network</Link></li>
                        <li><Link className="text-zinc-500 hover:text-emerald-200 transition-colors hover:translate-x-1 inline-block" to="/infrastructure">Infrastructure</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-emerald-400 font-headline font-bold text-sm mb-6 uppercase tracking-widest">Corporate Office</h5>
                    <p className="text-zinc-500 text-sm font-body leading-loose">
                        Emerald Plaza, Floor 18<br/>
                        Business District North<br/>
                        Dubai, UAE 400512
                    </p>
                </div>
                <div>
                    <h5 className="text-emerald-400 font-headline font-bold text-sm mb-6 uppercase tracking-widest">Connect</h5>
                    <p className="text-zinc-500 text-sm font-body mb-6">Subscribe to our market reports.</p>
                    <div className="flex">
                        <input className="bg-zinc-900 border-none text-zinc-300 text-sm px-4 py-3 rounded-l focus:ring-1 focus:ring-emerald-500/30 w-full" placeholder="Email Address" type="email"/>
                        <button className="bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-r border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                            <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-body text-xs text-zinc-600">© 2026 Al-Gyas Global. All Rights Reserved.</p>
                <div className="flex gap-8 font-body text-xs text-zinc-600">
                    <Link className="hover:text-emerald-400 transition-colors" to="/">Privacy Policy</Link>
                    <Link className="hover:text-emerald-400 transition-colors" to="/">Terms of Service</Link>
                    <Link className="hover:text-emerald-400 transition-colors" to="/">Compliance</Link>
                </div>
            </div>
        </footer>
    );
}
