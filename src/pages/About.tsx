import { Target, TrendingUp, LayoutList, Activity, RefreshCw } from 'lucide-react';

export default function About() {
    const steps = [
        { title: "Analyze your business", icon: <Target/> },
        { title: "Build a clear strategy", icon: <LayoutList/> },
        { title: "Execute campaigns", icon: <Activity/> },
        { title: "Measure results", icon: <TrendingUp/> },
        { title: "Improve continuously", icon: <RefreshCw/> }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-5xl font-black mb-6">About <span className="text-gradient">AdoraX</span></h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">AdoraX is a growth-focused digital brand that builds marketing systems for businesses. We focus on impact, not random activity. Every action has a purpose to grow your business.</p>
            </div>

            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Our Structured Process</h2>
                <div className="grid md:grid-cols-5 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center group hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                            <h3 className="font-bold text-sm uppercase tracking-wider">{step.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-panel p-12 rounded-[2rem] text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-black mb-6">Why Choose AdoraX?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">You choose AdoraX for results and structure. We reduce waste and increase impact.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                    {["Clear strategy before action", "Data-driven decisions", "Measured performance", "Consistent optimization", "Simple and focused process"].map((reason, i) => (
                        <div key={i} className="flex items-center gap-2 font-bold"><div className="w-2 h-2 bg-brand-blue rounded-full"></div>{reason}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}