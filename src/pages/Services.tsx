import { Share2, Target, Magnet, MessageSquare, PenTool, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        { title: "Social Media Management", icon: <Share2/>, list: ["Content planning", "Post design", "Scheduling", "Engagement management"] },
        { title: "Paid Advertising", icon: <Target/>, list: ["Facebook Ads", "Instagram Ads", "Google Ads", "LinkedIn Ads"], goal: "Reduce cost per lead and increase conversions." },
        { title: "Lead Generation Systems", icon: <Magnet/>, list: ["Landing pages", "Funnels", "Lead forms", "Tracking setup"] },
        { title: "WhatsApp Marketing", icon: <MessageSquare/>, list: ["Automated replies", "Broadcast messages", "Follow-up systems"] },
        { title: "Content Strategy", icon: <PenTool/>, list: ["Monthly content plans", "Campaign ideas", "Branding direction"] },
        { title: "Website Development", icon: <Globe/>, list: ["Business websites", "React + Vite builds", "Conversion-focused design"] }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-5xl font-black mb-16 text-center">Our <span className="text-gradient">Services</span></h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((s, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[2rem]">
                        <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">{s.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                        <ul className="space-y-2 mb-6">
                            {s.list.map((item, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"/> {item}</li>
                            ))}
                        </ul>
                        {s.goal && <p className="text-sm font-bold text-brand-blue mt-auto">{s.goal}</p>}
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Link to="/contact" className="inline-block bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all">Start Your Growth System</Link>
            </div>
        </div>
    );
}