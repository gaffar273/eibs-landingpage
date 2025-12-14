'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    // Set event date: January 15, 2026
    const eventDate = new Date('2026-01-15T09:00:00');

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Set initial time
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[#050a04]">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(46, 255, 113, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(46, 255, 113, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Floating Particles */}
                {mounted && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#2eff71] rounded-full animate-particle opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${8 + Math.random() * 4}s`,
                        }}
                    />
                ))}

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2eff71] rounded-full filter blur-[150px] opacity-20 animate-float" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1affd5] rounded-full filter blur-[120px] opacity-15 animate-float"
                    style={{ animationDelay: '3s' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-slide-up">
                    <span className="block text-white">EAST-INDIA</span>
                    <span className="block gradient-text animate-glow">BLOCKCHAIN</span>
                    <span className="block text-white">SUMMIT 2026</span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-6 animate-slide-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    The premier blockchain conference bringing together innovators,
                    developers, and thought leaders to shape the future of Web3.
                </p>

                {/* Organizer Badge */}
                <div
                    className="flex items-center justify-center gap-2 mb-12 animate-slide-up"
                    style={{ animationDelay: '0.3s' }}
                >
                    <span className="text-white/40 text-sm">Organized by</span>
                    <span className="text-[#2eff71] font-semibold">Kharagpur Blockchain Society</span>
                    <span className="text-white/40 text-sm">• IIT Kharagpur</span>
                </div>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    <a
                        href="https://unstop.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gradient-to-r from-[#2eff71] to-[#1affd5] text-black font-bold rounded-full text-lg hover:shadow-[0_0_40px_rgba(46,255,113,0.6)] transition-all duration-300 transform hover:scale-105"
                    >
                        Register Now →
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-4 border-2 border-[#2eff71]/50 text-[#2eff71] font-bold rounded-full text-lg hover:bg-[#2eff71]/10 transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>

                {/* Countdown Timer */}
                <div
                    className="animate-slide-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    <p className="text-white/40 text-sm mb-4 uppercase tracking-wider">
                        Event Starts In
                    </p>
                    <div className="flex justify-center gap-4 md:gap-8">
                        {[
                            { value: mounted ? timeLeft.days : 0, label: 'Days' },
                            { value: mounted ? timeLeft.hours : 0, label: 'Hours' },
                            { value: mounted ? timeLeft.minutes : 0, label: 'Minutes' },
                            { value: mounted ? timeLeft.seconds : 0, label: 'Seconds' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="neon-border rounded-xl p-4 md:p-6 bg-[#0a1209]/80 min-w-[70px] md:min-w-[100px]"
                            >
                                <div className="text-2xl md:text-4xl font-bold text-[#2eff71]">
                                    {String(item.value).padStart(2, '0')}
                                </div>
                                <div className="text-xs md:text-sm text-white/50 mt-1">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[#2eff71]/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-[#2eff71] rounded-full" />
                </div>
            </div>
        </section>
    );
}
