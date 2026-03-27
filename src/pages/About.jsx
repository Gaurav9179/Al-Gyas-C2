import React from 'react';

export default function About() {
    return (
        <div className="antialiased selection:bg-primary/30 min-h-screen bg-surface text-on-surface">
            
{/* Header: TopNavBar */}

{/* Hero Section */}
<header className="relative h-[870px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover brightness-75 scale-105" data-alt="expansive golden wheat field at sunset with sun rays piercing through the horizon and cinematic warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj2BXdY_TdNkuYIiiOPZfznsnmdj-GP6lsi12mBjmROVRepdTNfDWKosbuA0S-eAhMjkycF3BRXr8zyzmfFkiTbSXkRSSSsIkwD8hPwHu-2OLIiz9GkjABHr1bVjGC8U1ke08sFtl03G8yYTAfGuyBO4mqz8FnXTs2JrmzpBG-OA_j_GbDmvUSddzLEPDHyF_q0pTP2Bd_-_BMEbpDtQzGlHm0KLWu4RJ0cwsZHpxiF1DyIRS5V1StiyJtnqh99Z6e3R74TYdyv8"/>
<div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-surface"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl">
<h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tight text-white text-shadow-premium mb-6">
                3 Generations of Excellence
            </h1>
<p className="font-body text-xl md:text-2xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">
                Honoring our heritage while cultivating the future of global agriculture.
            </p>
</div>
</header>
{/* Vision & Mission Section */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
{/* Vision */}
<div className="space-y-8 order-2 lg:order-1">
<span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase">Our Vision</span>
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
                    To lead a future where quality, tradition, and sustainability align perfectly.
                </h2>
<div className="h-1 w-24 bg-secondary-fixed"></div>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                    We envision a global agricultural landscape where the wisdom of the past fuels the innovations of tomorrow, ensuring every harvest benefits both people and the planet.
                </p>
</div>
<div className="relative order-1 lg:order-2">
<div className="absolute -inset-4 bg-primary-fixed/30 organic-asymmetry-right -z-10"></div>
<img className="w-full h-[500px] object-cover organic-asymmetry-right shadow-2xl" data-alt="modern industrial greenhouse with rows of vibrant green seedlings and soft natural diffused lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnK3O7kBDTlaTeujbbzk43GeZHrkcnM-QlhYglhtVXIdP7H65Bk92N-bsEDN88pW-sK4Y9qbp8fZJRGpYGh7UrGf3uZ7G91QwUwIpUoR1JbvjYETi6368Zdt5WifrKvFD2Cpr45EtjlzRT7oFdR26mdrqEQnJ5XKdJZwuC4WRMSlwOvKD7r4RB-Psesrei_Svxc671I7DycHnrPv_6VY1nsioG_0ZmpKXtWy_PW6I2uQlqYlQ_8Xx-0tVEvfT9DFFb-Qxt53rYML4"/>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-32">
{/* Mission */}
<div className="relative">
<div className="absolute -inset-4 bg-secondary-fixed/20 organic-asymmetry-left -z-10"></div>
<img className="w-full h-[500px] object-cover organic-asymmetry-left shadow-2xl" data-alt="automated agricultural processing facility showing clean stainless steel machinery and high-tech quality control systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDht07kCHPuf6twgVJn8MsjzVpuzm7RX5QpKq0GBtgRfHeI7o95umvOOyUL0yOBk7U-6h9iig579Axl4pFqOI86_Mrx4-mmugDJ0M-7v_hsUmNt44oTTE3q9Q3_rfJZOkS8CGtKURqE_KvphqQXOn0R8Zu7y_KzE2_VLQ-hHJEExAF97f3uxWpUtKwOmHm1yP304dnWd-7BPSZG56ZXPhZ202q_iDxY--Ejfu6wfuojDIZj4R3TI8U973ztZ0CyWSVqL-iDflFHGn4"/>
</div>
<div className="space-y-8">
<span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase">Our Mission</span>
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
                    Providing exceptional agricultural products and processing excellence worldwide.
                </h2>
<div className="h-1 w-24 bg-primary-container"></div>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                    Our daily commitment is to bridge the gap between rural production and global consumption through rigorous quality control and state-of-the-art infrastructure.
                </p>
</div>
</div>
</section>
{/* Values Section */}
<section className="bg-primary py-32 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">Core Principles</h2>
<p className="text-primary-fixed-dim text-lg">The soil on which we build our business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Value Card 1 */}
<div className="group relative p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4">
<div className="w-16 h-16 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-8 text-secondary-fixed">
<span className="material-symbols-outlined text-4xl" data-weight="fill">eco</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4">Stewardship</h3>
<p className="text-emerald-50/70 leading-relaxed">
                        Respect for the land and the people who tend it. We believe in preserving natural resources for the next four generations.
                    </p>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary-fixed transition-all duration-500 group-hover:w-full"></div>
</div>
{/* Value Card 2 */}
<div className="group relative p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4">
<div className="w-16 h-16 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-8 text-secondary-fixed">
<span className="material-symbols-outlined text-4xl" data-weight="fill">verified_user</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4">Integrity</h3>
<p className="text-emerald-50/70 leading-relaxed">
                        Transparent, ethical business practices in every trade. Our word is as solid as the ground we farm.
                    </p>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary-fixed transition-all duration-500 group-hover:w-full"></div>
</div>
{/* Value Card 3 */}
<div className="group relative p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4">
<div className="w-16 h-16 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-8 text-secondary-fixed">
<span className="material-symbols-outlined text-4xl" data-weight="fill">language</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4">Commitment</h3>
<p className="text-emerald-50/70 leading-relaxed">
                        Unwavering dedication to quality and global logistics. Delivering excellence from farm gates to shipping ports.
                    </p>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary-fixed transition-all duration-500 group-hover:w-full"></div>
</div>
</div>
</div>
</section>
{/* Our Heritage Section */}
<section className="py-32 px-8 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">Our Heritage</h2>
<p className="text-on-surface-variant text-lg mb-8">
                        Decades of expertise distilled into a global agricultural powerhouse. Our history is a testament to resilience and growth.
                    </p>
<div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-secondary">
<span className="italic text-on-surface">"Agriculture is the foundation of civilization, and quality is the foundation of Al-Gyas."</span>
<p className="mt-4 font-bold text-primary">— Founder's Philosophy</p>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Stat 1 */}
<div className="p-10 bg-white rounded-xl shadow-sm flex flex-col justify-center border-b-4 border-emerald-900/10 hover:border-emerald-900 transition-all">
<span className="font-headline text-5xl font-extrabold text-primary mb-2">30+ Years</span>
<h4 className="font-bold text-xl text-secondary mb-4">of Growth</h4>
<p className="text-on-surface-variant">From a local venture to a global specialist in high-yield grain and pulses.</p>
</div>
{/* Stat 2 */}
<div className="p-10 bg-white rounded-xl shadow-sm flex flex-col justify-center border-b-4 border-emerald-900/10 hover:border-emerald-900 transition-all">
<span className="font-headline text-5xl font-extrabold text-primary mb-2">500+</span>
<h4 className="font-bold text-xl text-secondary mb-4">Professionals</h4>
<p className="text-on-surface-variant">Experts managing every step from farm gates to international shipping ports.</p>
</div>
{/* Stat 3 */}
<div className="p-10 bg-white rounded-xl shadow-sm flex flex-col justify-center border-b-4 border-emerald-900/10 hover:border-emerald-900 transition-all">
<span className="font-headline text-5xl font-extrabold text-primary mb-2">20+ Years</span>
<h4 className="font-bold text-xl text-secondary mb-4">of Lab Expertise</h4>
<p className="text-on-surface-variant">Dedicated experts in our world-class processing centers ensuring zero defects.</p>
</div>
{/* Map/Global Presence */}
<div className="relative overflow-hidden rounded-xl bg-inverse-surface text-white p-10 group">
<div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700">
<img className="w-full h-full object-cover" data-alt="stylized world map showing global trade routes connecting major continents with glowing lines on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJzQSd3LZ9FBGyDhbppHUrUcvPs7u-h9cJaLEM9ubrKiTeHvQWnLXgraHrws3dwkqCYXcgqEbBzZAYXu3R-R0fytEizUb9q64yiqRXTICCnkFEv4-WWedo0338M-jBTAx0wUVpcH-om8jA5jjAsxClY0KDSOq38KzWk_bVs9grq3vqLJE279ELytrKSP_3O8--vaJYmfC_R8-cqqFdnW801f4lrWQIR-FbHin9RvsJ_rXUinYbXkSHlnX1RJ2dg_zw1YVzQm_ED0"/>
</div>
<div className="relative z-10">
<h4 className="font-headline text-3xl font-bold mb-4">Global Network</h4>
<p className="text-primary-fixed-dim">Exporting to over 45 countries with dedicated logistical hubs in Dubai, Singapore, and Rotterdam.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}


        </div>
    );
}
