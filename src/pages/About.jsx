import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

export default function About() {
    return (
        <div className="antialiased selection:bg-primary/30 min-h-screen bg-surface text-on-surface">

{/* Hero Section */}
<header className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<motion.img
    animate={{ scale: [1.05, 1.15, 1.05] }}
    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
    className="w-full h-full object-cover brightness-50 origin-center"
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj2BXdY_TdNkuYIiiOPZfznsnmdj-GP6lsi12mBjmROVRepdTNfDWKosbuA0S-eAhMjkycF3BRXr8zyzmfFkiTbSXkRSSSsIkwD8hPwHu-2OLIiz9GkjABHr1bVjGC8U1ke08sFtl03G8yYTAfGuyBO4mqz8FnXTs2JrmzpBG-OA_j_GbDmvUSddzLEPDHyF_q0pTP2Bd_-_BMEbpDtQzGlHm0KLWu4RJ0cwsZHpxiF1DyIRS5V1StiyJtnqh99Z6e3R74TYdyv8"
    alt="Wheat field at sunset"
/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-surface"></div>
</div>
<motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
<motion.span variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Story Since 1994</motion.span>
<motion.h1 variants={fadeUp} className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-6">
    3 Generations of <br/><span className="text-primary italic">Excellence</span>
</motion.h1>
<motion.p variants={fadeUp} className="font-body text-base md:text-2xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">
    Honoring our heritage while cultivating the future of global agriculture.
</motion.p>
</motion.div>
</header>

{/* Stats Bar */}
<section className="py-12 bg-surface-container border-y border-outline-variant/10">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
{[
    { stat: "30+", label: "Years of Operation" },
    { stat: "500+", label: "Professionals" },
    { stat: "40+", label: "Export Countries" },
    { stat: "1400 MT", label: "Daily Capacity" },
].map((item, i) => (
    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
        <div className="text-3xl md:text-4xl font-black text-primary font-headline mb-1">{item.stat}</div>
        <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{item.label}</div>
    </motion.div>
))}
</div>
</div>
</section>

{/* Vision & Mission */}
<section className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 order-2 lg:order-1">
<motion.span variants={fadeUp} className="text-secondary font-headline font-bold tracking-widest text-sm uppercase block">Our Vision</motion.span>
<motion.h2 variants={fadeUp} className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
    To lead a future where quality, tradition, and sustainability align perfectly.
</motion.h2>
<motion.div variants={fadeUp} className="h-1 w-24 bg-secondary rounded-full"></motion.div>
<motion.p variants={fadeUp} className="text-on-surface-variant text-lg leading-relaxed">
    We envision a global agricultural landscape where the wisdom of the past fuels the innovations of tomorrow, ensuring every harvest benefits both people and the planet.
</motion.p>
</motion.div>
<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative order-1 lg:order-2">
<div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10"></div>
<img className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnK3O7kBDTlaTeujbbzk43GeZHrkcnM-QlhYglhtVXIdP7H65Bk92N-bsEDN88pW-sK4Y9qbp8fZJRGpYGh7UrGf3uZ7G91QwUwIpUoR1JbvjYETi6368Zdt5WifrKvFD2Cpr45EtjlzRT7oFdR26mdrqEQnJ5XKdJZwuC4WRMSlwOvKD7r4RB-Psesrei_Svxc671I7DycHnrPv_6VY1nsioG_0ZmpKXtWy_PW6I2uQlqYlQ_8Xx-0tVEvfT9DFFb-Qxt53rYML4" alt="Modern greenhouse" />
</motion.div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
<div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-2xl -z-10"></div>
<img className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDht07kCHPuf6twgVJn8MsjzVpuzm7RX5QpKq0GBtgRfHeI7o95umvOOyUL0yOBk7U-6h9iig579Axl4pFqOI86_Mrx4-mmugDJ0M-7v_hsUmNt44oTTE3q9Q3_rfJZOkS8CGtKURqE_KvphqQXOn0R8Zu7y_KzE2_VLQ-hHJEExAF97f3uxWpUtKwOmHm1yP304dnWd-7BPSZG56ZXPhZ202q_iDxY--Ejfu6wfuojDIZj4R3TI8U973ztZ0CyWSVqL-iDflFHGn4" alt="Processing facility" />
</motion.div>
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
<motion.span variants={fadeUp} className="text-secondary font-headline font-bold tracking-widest text-sm uppercase block">Our Mission</motion.span>
<motion.h2 variants={fadeUp} className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
    Providing exceptional agricultural products and processing excellence worldwide.
</motion.h2>
<motion.div variants={fadeUp} className="h-1 w-24 bg-primary rounded-full"></motion.div>
<motion.p variants={fadeUp} className="text-on-surface-variant text-lg leading-relaxed">
    Our daily commitment is to bridge the gap between rural production and global consumption through rigorous quality control and state-of-the-art infrastructure.
</motion.p>
</motion.div>
</div>
</section>

{/* Values Section */}
<section className="bg-emerald-950/80 py-24 px-6 md:px-10">
<div className="max-w-screen-xl mx-auto">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
<h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-4">Core Principles</h2>
<p className="text-emerald-100/60 text-lg">The soil on which we build our business.</p>
</motion.div>
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
    { icon: "eco", title: "Stewardship", desc: "Respect for the land and the people who tend it. We believe in preserving natural resources for the next four generations." },
    { icon: "verified_user", title: "Integrity", desc: "Transparent, ethical business practices in every trade. Our word is as solid as the ground we farm." },
    { icon: "language", title: "Commitment", desc: "Unwavering dedication to quality and global logistics. Delivering excellence from farm gates to shipping ports." },
].map((v, i) => (
    <motion.div key={i} variants={fadeUp} className="group relative p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
        <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl">{v.icon}</span>
        </div>
        <h3 className="font-headline text-2xl font-bold text-white mb-4">{v.title}</h3>
        <p className="text-emerald-50/70 leading-relaxed text-sm">{v.desc}</p>
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></div>
    </motion.div>
))}
</motion.div>
</div>
</section>

{/* Heritage & Global Presence */}
<section className="py-24 px-6 md:px-10 bg-surface-container-lowest">
<div className="max-w-screen-xl mx-auto">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
<span className="text-secondary font-bold tracking-widest text-sm uppercase">Our Heritage</span>
<h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mt-3 mb-4">A Legacy Built on Quality</h2>
<p className="text-on-surface-variant text-lg max-w-2xl">Decades of expertise distilled into a global agricultural powerhouse. Our history is a testament to resilience and growth.</p>
</motion.div>
<motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-8 bg-surface-container rounded-2xl border-l-4 border-secondary mb-12">
<p className="italic text-on-surface text-lg">"Agriculture is the foundation of civilization, and quality is the foundation of Al-Gyas."</p>
<footer className="mt-4 font-bold text-secondary">— Founder's Philosophy</footer>
</motion.blockquote>
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{[
    { stat: "30+ Years", label: "of Growth", desc: "From a local venture to a global specialist in high-yield grain and pulses." },
    { stat: "500+", label: "Professionals", desc: "Experts managing every step from farm gates to international shipping ports." },
    { stat: "20+ Years", label: "Lab Expertise", desc: "World-class processing centers ensuring zero defects in every shipment." },
].map((item, i) => (
    <motion.div key={i} variants={fadeUp} className="p-8 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
        <span className="text-4xl font-headline font-black text-primary block mb-1">{item.stat}</span>
        <h4 className="font-bold text-lg text-secondary mb-3">{item.label}</h4>
        <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
))}
</motion.div>
</div>
</section>

        </div>
    );
}
