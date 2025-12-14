'use client';

import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className="inline-block">
            {count}
            {suffix}
        </span>
    );
}

export default function PastHighlights() {
    const stats = [
        { value: 500, suffix: '+', label: 'Registrations' },
        { value: 1000, suffix: '+', label: 'Live Viewers' },
        { value: 50, suffix: '+', label: 'Finalists' },
        { value: 15, suffix: '+', label: 'Expert Speakers' },
    ];

    const pastSponsors = [
        'Ethereum',
        'Polygon',
        'Solana',
        'Chainlink',
        'OpenSea',
        'Alchemy',
        'Infura',
        'Moralis',
    ];

    // Placeholder images for masonry grid
    const galleryImages = [
        { id: 1, alt: 'Keynote presentation at EIBS', color: 'from-[#2eff71]/30 to-[#1affd5]/20' },
        { id: 2, alt: 'Networking session', color: 'from-[#1affd5]/30 to-[#2eff71]/20' },
        { id: 3, alt: 'Hackathon teams coding', color: 'from-[#2eff71]/20 to-[#0a1209]' },
        { id: 4, alt: 'Award ceremony', color: 'from-[#1affd5]/20 to-[#2eff71]/30' },
        { id: 5, alt: 'Workshop in progress', color: 'from-[#2eff71]/30 to-[#1affd5]/10' },
        { id: 6, alt: 'Panel discussion', color: 'from-[#0a1209] to-[#2eff71]/20' },
        { id: 7, alt: 'Participants networking', color: 'from-[#1affd5]/30 to-[#0a1209]' },
        { id: 8, alt: 'Closing ceremony', color: 'from-[#2eff71]/20 to-[#1affd5]/30' },
    ];

    return (
        <section id="highlights" className="py-24 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2eff71] rounded-full filter blur-[300px] opacity-5" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#2eff71]/30 bg-[#2eff71]/10 text-[#2eff71] text-sm font-medium mb-4">
                        Past Events
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Past Highlights</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Relive the best moments from our previous summits and see the impact
                        we've made together.
                    </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="neon-border rounded-2xl p-6 bg-[#0a1209]/50 text-center group hover:bg-[#0a1209] transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2 animate-count">
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2000 + index * 200}
                                />
                            </div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Past Sponsors Strip */}
                <div className="mb-20">
                    <h3 className="text-center text-lg text-white/40 font-medium mb-8 uppercase tracking-widest">
                        Past Partners
                    </h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee gap-12">
                            {[...pastSponsors, ...pastSponsors].map((sponsor, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 text-2xl font-bold text-white/20 hover:text-[#2eff71] transition-colors cursor-pointer grayscale hover:grayscale-0"
                                >
                                    {sponsor}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Masonry Gallery */}
                <div className="masonry-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`masonry-item neon-border rounded-2xl overflow-hidden bg-gradient-to-br ${image.color} group cursor-pointer relative`}
                        >
                            {/* Placeholder with gradient */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                        📸
                                    </div>
                                    <p className="text-white/30 text-xs px-4 group-hover:text-white/60 transition-colors">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#2eff71]/0 group-hover:bg-[#2eff71]/10 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </section>
    );
}
