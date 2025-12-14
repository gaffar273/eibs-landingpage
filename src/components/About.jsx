'use client';

export default function About() {
    const features = [
        {
            icon: '🔗',
            title: 'Blockchain Innovation',
            description:
                'Explore cutting-edge blockchain technologies and their real-world applications across industries.',
        },
        {
            icon: '💡',
            title: 'Web3 Development',
            description:
                'Hands-on workshops and sessions on building decentralized applications and smart contracts.',
        },
        {
            icon: '🤝',
            title: 'Networking',
            description:
                'Connect with industry leaders, investors, and fellow enthusiasts from across the globe.',
        },
        {
            icon: '🏆',
            title: 'Hackathon',
            description:
                'Compete in our 24-hour hackathon with exciting prizes and mentorship opportunities.',
        },
    ];

    return (
        <section id="about" className="py-24 px-6 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#2eff71] rounded-full filter blur-[200px] opacity-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1affd5] rounded-full filter blur-[200px] opacity-10" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#2eff71]/30 bg-[#2eff71]/10 text-[#2eff71] text-sm font-medium mb-4">
                        About The Event
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Where <span className="gradient-text">Innovation</span> Meets{' '}
                        <span className="gradient-text">Opportunity</span>
                    </h2>
                    <p className="text-white/60 max-w-3xl mx-auto text-lg">
                        The East-India Blockchain Summit 2026 at IIT Kharagpur is the largest blockchain
                        conference in Eastern India, organized by the Kharagpur Blockchain Society. Join 500+
                        participants for two days of learning, networking, and building the
                        future of decentralized technology.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group neon-border rounded-2xl p-6 bg-[#0a1209]/50 hover:bg-[#0a1209] transition-all duration-300 hover:transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-4xl mb-4 group-hover:animate-bounce">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: '2', label: 'Days' },
                        { value: '20+', label: 'Speakers' },
                        { value: '10+', label: 'Workshops' },
                        { value: '₹5L+', label: 'In Prizes' },
                    ].map((stat, index) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
