'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is the East-India Blockchain Summit?',
            answer:
                'The East-India Blockchain Summit (EIBS) is the premier blockchain conference at IIT Kharagpur, organized by the Kharagpur Blockchain Society. It brings together developers, innovators, investors, and enthusiasts to explore the latest in blockchain technology, Web3, DeFi, and more.',
        },
        {
            question: 'Who can participate in the hackathon?',
            answer:
                'The hackathon is open to all students and young professionals. Teams can have 2-4 members. Both beginners and experienced developers are welcome to participate.',
        },
        {
            question: 'What is the team size for the hackathon?',
            answer:
                'Teams can consist of 2 to 4 members. Solo participation is not allowed to encourage collaboration and teamwork.',
        },
        {
            question: 'Is there a registration fee?',
            answer:
                'Early bird registration is free! Regular registration has a nominal fee of ₹199 per person. All registered participants get access to workshops, networking sessions, and goodies.',
        },
        {
            question: 'What are the prizes for the hackathon?',
            answer:
                'Total prize pool is worth ₹5,00,000+ including cash prizes, internship opportunities, startup incubation support, and exclusive merchandise.',
        },
        {
            question: 'Where is the event venue?',
            answer:
                'The event will be held at IIT Kharagpur campus. The exact venue details will be shared with registered participants via email.',
        },
        {
            question: 'Will food and refreshments be provided?',
            answer:
                'Yes! All registered participants will receive meals and refreshments throughout the event, including the hackathon.',
        },
        {
            question: 'How can I become a sponsor or partner?',
            answer:
                'We are always looking for partners who share our vision. Please reach out to us at partners@eibs.com or fill out the partnership form on our website.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 relative bg-[#030704]">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#2eff71] rounded-full filter blur-[250px] opacity-5" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#2eff71]/30 bg-[#2eff71]/10 text-[#2eff71] text-sm font-medium mb-4">
                        Got Questions?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Find answers to common questions about EIBS 2026.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`neon-border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#0a1209]' : 'bg-[#0a1209]/50'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span
                                    className={`font-medium text-lg transition-colors ${openIndex === index ? 'text-[#2eff71]' : 'text-white'
                                        } group-hover:text-[#2eff71]`}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-[#2eff71]/30 flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-[#2eff71] text-black rotate-180'
                                        : 'text-[#2eff71]'
                                        }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-white/60 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="mt-16 text-center">
                    <p className="text-white/50 mb-4">Still have questions?</p>
                    <a
                        href="mailto:hello@eibs.com"
                        className="inline-flex items-center gap-2 text-[#2eff71] hover:underline font-medium"
                    >
                        <span>Contact our team</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
