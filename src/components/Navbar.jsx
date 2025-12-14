'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Partners', href: '#partners' },
        { name: 'Highlights', href: '#highlights' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/kbs-logo.png"
                        alt="KBS Logo"
                        className="w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(46,255,113,0.8)] transition-all"
                    />
                    <span className="font-bold text-lg hidden sm:block">
                        <span className="text-[#2eff71]">EIBS</span>
                        <span className="text-white/70 font-normal text-sm ml-1">2026</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-[#2eff71] transition-colors duration-200 text-sm font-medium cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://unstop.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-2.5 bg-gradient-to-r from-[#2eff71] to-[#1affd5] text-black font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(46,255,113,0.5)] transition-all duration-300 transform hover:scale-105"
                    >
                        Register Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-slide-up">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-3 text-white/70 hover:text-[#2eff71] transition-colors border-b border-white/10 last:border-0"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
