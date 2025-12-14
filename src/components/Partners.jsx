'use client';

export default function Partners() {
    const tiers = [
        {
            name: 'Title Sponsor',
            sponsors: [
                { name: 'Blockchain Corp', logo: 'BC' },
            ],
            size: 'large',
        },
        {
            name: 'Platinum Partners',
            sponsors: [
                { name: 'Web3 Labs', logo: 'W3' },
                { name: 'Crypto Fund', logo: 'CF' },
            ],
            size: 'medium',
        },
        {
            name: 'Gold Partners',
            sponsors: [
                { name: 'DeFi Protocol', logo: 'DP' },
                { name: 'NFT Studio', logo: 'NS' },
                { name: 'Chain Analytics', logo: 'CA' },
            ],
            size: 'small',
        },
        {
            name: 'Silver Partners',
            sponsors: [
                { name: 'Token Tech', logo: 'TT' },
                { name: 'Meta Ventures', logo: 'MV' },
                { name: 'Block Dev', logo: 'BD' },
                { name: 'Smart Solutions', logo: 'SS' },
            ],
            size: 'xsmall',
        },
    ];

    const getSizeClasses = (size) => {
        switch (size) {
            case 'large':
                return 'w-48 h-48 text-4xl';
            case 'medium':
                return 'w-36 h-36 text-2xl';
            case 'small':
                return 'w-28 h-28 text-xl';
            case 'xsmall':
                return 'w-24 h-24 text-lg';
            default:
                return 'w-28 h-28 text-xl';
        }
    };

    return (
        <section id="partners" className="py-24 px-6 relative bg-[#030704]">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(46, 255, 113, 0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#2eff71]/30 bg-[#2eff71]/10 text-[#2eff71] text-sm font-medium mb-4">
                        Our Partners
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Strategic Partners</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Powered by industry leaders who are shaping the future of blockchain
                        technology.
                    </p>
                </div>

                {/* Partner Tiers */}
                {tiers.map((tier, tierIndex) => (
                    <div key={tier.name} className="mb-16 last:mb-0">
                        <h3 className="text-center text-lg text-[#2eff71]/70 font-medium mb-8 uppercase tracking-widest">
                            {tier.name}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {tier.sponsors.map((sponsor, index) => (
                                <div
                                    key={sponsor.name}
                                    className={`${getSizeClasses(
                                        tier.size
                                    )} neon-border rounded-2xl bg-[#0a1209]/80 flex items-center justify-center font-bold text-white/80 hover:text-[#2eff71] hover:shadow-[0_0_30px_rgba(46,255,113,0.3)] transition-all duration-300 cursor-pointer group`}
                                >
                                    <span className="group-hover:scale-110 transition-transform duration-300">
                                        {sponsor.logo}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Become a Partner CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-block neon-border rounded-2xl p-8 bg-gradient-to-br from-[#0a1209] to-[#050a04]">
                        <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
                        <p className="text-white/50 mb-6 max-w-md">
                            Join us in shaping the future of blockchain at IIT Kharagpur.
                            Partner with EIBS 2026.
                        </p>
                        <a
                            href="mailto:partners@eibs.com"
                            className="inline-block px-6 py-3 border-2 border-[#2eff71] text-[#2eff71] font-semibold rounded-full hover:bg-[#2eff71] hover:text-black transition-all duration-300"
                        >
                            Contact Us →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
