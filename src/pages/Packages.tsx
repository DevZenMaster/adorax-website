import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Packages() {
    const packages = [
        { name: "Starter", target: "Best for early-stage businesses", features: ["Basic social media setup", "Content posting", "Simple strategy"], popular: false },
        { name: "Growth", target: "Best for lead generation", features: ["Social media management", "Ad campaigns", "Lead systems", "Monthly strategy"], popular: true },
        { name: "Pro", target: "Best for scaling businesses", features: ["Full marketing system", "Advanced ads", "Funnels & landing pages", "WhatsApp marketing", "Performance tracking"], popular: false }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-5xl font-black mb-16 text-center">Pricing <span className="text-gradient">Packages</span></h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, i) => (
                    <div key={i} className={`relative p-8 rounded-[2rem] flex flex-col ${pkg.popular ? 'bg-white dark:bg-white/10 border-brand-blue shadow-[0_0_30px_rgba(37,99,235,0.2)] lg:-translate-y-4' : 'glass-panel'} border`}>
                        {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</div>}

                        <h3 className="text-3xl font-black mb-2">{pkg.name}</h3>
                        <p className="text-brand-blue font-bold text-sm mb-8 h-10">{pkg.target}</p>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="text-brand-blue shrink-0" size={20} /> {feature}
                                </li>
                            ))}
                        </ul>

                        <Link to={`/contact?plan=${pkg.name}`} className={`w-full text-center py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-lg' : 'bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/10'}`}>
                            Get Started
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}