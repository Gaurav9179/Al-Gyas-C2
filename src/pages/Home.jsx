import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Home() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const xPos = event.clientX - rect.left - rect.width / 2;
        const yPos = event.clientY - rect.top - rect.height / 2;
        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useTransform(y, [-500, 500], [20, -20]);
    const rotateY = useTransform(x, [-500, 500], [-20, 20]);

    return (
        <div className="antialiased selection:bg-primary/30 min-h-screen bg-surface text-on-surface">
            
{/* TopNavBar */}

{/* Hero Section */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
<div className="absolute inset-0 z-0">
<motion.img 
    animate={{ scale: [1.05, 1.15, 1.05] }} 
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
    alt="Wheat field at sunrise" 
    className="w-full h-full object-cover opacity-40 origin-center" 
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiZOtMrjl18BnYqsNGhGebpRv4TsnF9u4ACReXnDwFvGxWgVRt4_XCNVzbhN8xz_5AHAxlzVtbfTC1oPovgr3h8u4sr5ADhwY-jYpytoLESjAQEEYteIigpnkvt037l7fXutPkgaMalVrL3DOqyminruXtwUM_9EkB1gMxTpOZn_GZIY0wI8WQDbH1zLZoCPpfjTzAHm52xbvQIQ2qytvmRBTeMoxJKqijESLWE9QOnJtsLklOXGTzXqd5obzgKPpglKUZnW1lK_o"
/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-surface-container-lowest/80"></div>
</div>
<motion.div 
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    className="relative z-10 text-center max-w-5xl px-4 md:px-6 w-full h-full flex flex-col justify-center items-center mt-10 md:mt-0"
>
<motion.span style={{ transform: "translateZ(80px)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl backdrop-blur-sm">Established 1994</motion.span>
<motion.h1 style={{ transform: "translateZ(120px)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 md:mb-8 text-on-surface text-glow drop-shadow-2xl">
                Staple Supply Specialist &amp; <br/><span className="text-primary italic font-serif">Pulse to Plate</span> Precision
            </motion.h1>
<motion.p style={{ transform: "translateZ(60px)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="font-body text-base md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed opacity-90 drop-shadow-lg px-2">
                Premium Agricultural Products Worldwide. Over 30 years of excellence in sourcing, processing, and global logistics.
            </motion.p>
<motion.div style={{ transform: "translateZ(100px)" }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 md:px-0">
<a className="group relative w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-gradient-to-br from-primary to-primary-container rounded-lg overflow-hidden shadow-2xl hover:shadow-primary/40 transition-all duration-500 md:hover:scale-105 active:scale-95" href="#products">
<span className="relative z-10 font-headline font-extrabold text-on-primary uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2">
                        Explore Our Products
                        <span className="material-symbols-outlined text-base md:text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
</a>
<button className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 font-headline font-bold text-secondary uppercase tracking-widest text-xs md:text-sm border-b border-transparent hover:border-secondary transition-all">
                    View Infrastructure
                </button>
</motion.div>
</motion.div>
{/* Scroll Indicator */}
<div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
<span className="font-label text-[10px] tracking-[0.3em] uppercase hidden md:block">Scroll</span>
<div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary to-transparent"></div>
</div>
</section>
{/* Infrastructure Grid (The "Factories") */}
<section className="py-32 px-10 bg-surface-container-lowest">
<div className="max-w-[1920px] mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">State-of-the-Art <br/><span className="text-primary">Global Operations</span></h2>
<p className="font-body text-on-surface-variant text-lg">Our massive processing capabilities ensure consistency and quality at an industrial scale, powering supply chains across five continents.</p>
</div>
<div className="text-right">
<div className="text-6xl font-headline font-black text-secondary/20 tracking-tighter mb-[-1rem]">1400 MT</div>
<div className="text-lg font-label uppercase tracking-widest text-secondary font-bold">Total Daily Capacity</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Rice Factory */}
<div className="lg:col-span-7 group relative h-[600px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-all duration-500 cursor-pointer">
<img alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" data-alt="industrial rice processing facility interior with modern stainless steel machinery and glowing warm amber lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5WnrktClas7z1q2989ufPN0WEZg7_SHowOoyNHM23RenvJSrcYiimRKUFlJp13CnE9d4u620w6BpKR9hMgsxKuhHGcELtExb-XZAnKUYAlve9bVsbs3OKIDw33Nb_ldooeBnaWWotqTEy_qQNO80TSTsusndMvfMuOsRsUmfFBKlaIpYFVrYwzZIthpVE1S2AL7XbrDvGWEwxSvIMNS3noXZ_tKcx0fmEgPX41f72lWX6plkxtLaZGPhHQnC7U509owW68HU4cxE"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-12 w-full">
<div className="flex items-center gap-4 mb-4">
<span className="w-12 h-[1px] bg-primary"></span>
<span className="font-label text-primary font-bold tracking-[0.2em] uppercase">Processing Hub Alpha</span>
</div>
<h3 className="font-headline text-4xl font-bold mb-4">The Rice Factory</h3>
<p className="font-body text-on-surface-variant max-w-md mb-8">High-precision milling and sorting systems ensuring Grade-A quality for premium basmati and long-grain exports.</p>
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="text-2xl font-headline font-bold text-on-surface">1200 MT</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Daily Output</span>
</div>
<div className="h-8 w-[1px] bg-outline-variant"></div>
<div className="flex flex-col">
<span className="text-2xl font-headline font-bold text-on-surface">Fully Auto</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">System Status</span>
</div>
</div>
</div>
</div>
{/* Pulse Factory */}
<div className="lg:col-span-5 group relative h-[600px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-all duration-500 cursor-pointer">
<img alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" data-alt="close up of premium lentils and pulses in a modern laboratory setting, highlighting grain quality and organic textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWNomikspPp1kuuFKk1XLRsWuu1Auvtg2Z6ljuFX1-18p1GXZC88-ECPdTxL0tkok8KCdL9OZzoUUs406ydigV5A80U3VHKjpawFF9VFNZ7FpA5fAXKN9Dvrc7S-2aORX5NdJmWzn4O8Tx1TQm-Ug7DvNIh4TC4rau-8GQLlqudE4S6a3GTbuUhjUjE3XWM144BGSROfaj5yc0qVJX6E-wXER7X9mz8TcEjKeixO8mMqBtmKt7s3ShghVualqgOpYFv7lEycCWrto"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-12 w-full">
<div className="flex items-center gap-4 mb-4">
<span className="w-12 h-[1px] bg-secondary"></span>
<span className="font-label text-secondary font-bold tracking-[0.2em] uppercase">Processing Hub Beta</span>
</div>
<h3 className="font-headline text-4xl font-bold mb-4">The Pulse Factory</h3>
<p className="font-body text-on-surface-variant mb-8">Specialized cleaning, grading, and packaging of pulses and lentils for global culinary markets.</p>
<div className="flex flex-col">
<span className="text-2xl font-headline font-bold text-on-surface">200 MT</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Daily Processing</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Why Choose Us: Bento Grid */}
<section className="py-32 px-10 bg-surface">
<div className="max-w-[1920px] mx-auto">
<div className="text-center mb-20">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Why Al-Gyas?</h2>
<div className="w-24 h-1 bg-primary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Feature 1 */}
<div className="bg-surface-container-high/40 p-10 rounded-2xl gradient-border hover:translate-y-[-8px] transition-transform duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl" >groups</span>
</div>
<h4 className="font-headline text-xl font-bold mb-4">3 Generations</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">A legacy of trust passed down through decades of agricultural mastery and market leadership.</p>
</div>
{/* Feature 2 */}
<div className="bg-surface-container-high/40 p-10 rounded-2xl gradient-border hover:translate-y-[-8px] transition-transform duration-300">
<div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-secondary text-3xl" >badge</span>
</div>
<h4 className="font-headline text-xl font-bold mb-4">500+ Professionals</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Dedicated experts managing every step from farm gates to shipping ports with clinical precision.</p>
</div>
{/* Feature 3 */}
<div className="bg-surface-container-high/40 p-10 rounded-2xl gradient-border hover:translate-y-[-8px] transition-transform duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl" >verified</span>
</div>
<h4 className="font-headline text-xl font-bold mb-4">ISO Certification</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Adhering to the highest international standards of food safety, hygiene, and quality management.</p>
</div>
{/* Feature 4 */}
<div className="bg-surface-container-high/40 p-10 rounded-2xl gradient-border hover:translate-y-[-8px] transition-transform duration-300">
<div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-secondary text-3xl" >public</span>
</div>
<h4 className="font-headline text-xl font-bold mb-4">Global Sourcing</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Strategic partnerships with primary growers across key agricultural zones to ensure year-round supply.</p>
</div>
</div>
</div>
</section>
{/* Global Reach Mini Section */}
<section className="py-20 px-10 bg-surface-container-lowest overflow-hidden">
<div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center gap-20">
<div className="flex-1 space-y-8">
<h3 className="font-headline text-4xl md:text-5xl font-bold leading-tight">Serving Over <span className="text-secondary">40 Countries</span> With Logistics Excellence</h3>
<p className="font-body text-on-surface-variant text-lg">Our integrated supply chain provides door-to-port delivery, custom clearances, and real-time shipment tracking for all our B2B partners.</p>
<div className="flex gap-4">
<img alt="" className="w-24 h-24 rounded-lg object-cover" data-alt="aerial shot of massive cargo ships at a busy international container terminal at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZMdC9IfNqErNtI_cuXEbnqo6bCnvj_RUl64Q2zjw2lg3MwIBDLW93TykuwMl744mmcqWnPefXrelqYdsdMIi3Wj34ilxiZ13gKUI3bjlnij7IWyM-XgXqyrYDlC_Sz1wAgYkrtKHxSMZiocPz9h4wcyzws_K4AaBfteQVnsboS49QRALBGqkSGdORcFnKWDmVq2Fo7Ct5QhrbevJbo2-a7HASpqPnF3RYrlLovaAstu1xaO_55K2R68lCfRL5DiNVVLuijIcp2Q"/>
<img alt="" className="w-24 h-24 rounded-lg object-cover" data-alt="stacks of colorful shipping containers at a modern logistics port under a clear sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrDOE8eH59xQOaTmFODOfuvxVD5TeBaAqsJD-XKva3oOeqH6xDQTEygIbY4371Zw1hscEh6O4cTxxCGngQvNKYtgFT1K6FmyQNAsdii83vMKM751YXzUUHvkG9nPyUkyWGDUojlAaHlFf44HJ_S_3JPsVLufoUxx8QfCFkunPZa9MNP1dvJTptARUVHz6TLf7TOlUgIQbQRYvvS6ZnGSh3a_J6e8-0pdp5zkc1N6iarwMybgcwqwyAIa-9W0IcAhym6Bkbs8dMs9g"/>
<div className="w-24 h-24 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
<span className="text-primary font-headline font-bold">+Global</span>
</div>
</div>
</div>
<div className="flex-1 relative">
<div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full"></div>
<img alt="" className="relative z-10 w-full rounded-2xl shadow-3xl" data-alt="wide shot of a modern distribution warehouse with rows of high shelving and advanced lighting systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL6U87ZCQ-WHFXGC7MmnKIZ5jMwCmmyFQksUiAfLJkTQlufaSUGYVOK6D88VSQcJreTK8YjnUA7IiRusZHqwLoQhW2t8cbqF047ctWrEeZBxRcP0fAeSZvIbFyayHT9PxVxXj4oBuIpRb0IMoOFu_2Ai57obd9Hkza4MOVWm8QEEYNio68p2B6vUX3ZRRAWFm8QH-3lr7Pa7iqtWUYhhlfoRm-vdHlgZVPJ6WmN8OZRfh_yKVA9QBWHG9atlgXPd4Udad1VqaHB4Q"/>
</div>
</div>
</section>
{/* Footer */}


        </div>
    );
}
