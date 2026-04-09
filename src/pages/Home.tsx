import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
    ArrowRight, BarChart3, ChevronDown, Target, MessageSquare,
    ShieldCheck, Phone, ThumbsUp, Heart, PenTool, Megaphone,
    Video, TrendingUp, Zap, Users, CheckCircle2,
    Globe, Share2
} from 'lucide-react'; // Removed LucideIcon here
import { Link } from 'react-router-dom';

// --- TYPES ---
interface FloatingIconProps {
    icon: React.ReactNode;
    color: string;
    delay: number;
    x: string;
    y: string;
    label?: string;
}

export default function Home() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const roadmap = [
        { step: "01", title: "Market Audit", desc: "We analyze your competitors and find untapped lead sources." },
        { step: "02", title: "System Build", desc: "Deployment of AI-tracked funnels and high-converting creatives." },
        { step: "03", title: "Scale Phase", desc: "Aggressive budget scaling based on real-time data." },
        { step: "04", title: "Dominance", desc: "Total market share capture and automated client retention." }
    ];

    const faqs = [
        { q: "How fast can we see ROI?", a: "We typically establish a baseline within 7 days and scale within 21 days." },
        { q: "What advertising budget do I need?", a: "We recommend a minimum ad spend of $500/month for optimal algorithm training." },
        { q: "Do you handle creative production?", a: "Yes. Our packages include high-conversion, platform-native video and image production." }
    ];

    return (
        <div className="relative min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-white selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-500">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-16 pb-8 lg:pt-20">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 mb-6">
                            <Zap size={14} className="text-blue-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Performance-First Agency</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[1] mb-6 tracking-tighter uppercase italic">
                            Scale <span className="text-blue-600">Faster</span>. <br />
                            Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Smarter.</span>
                        </h1>

                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 font-medium leading-snug">
                            The algorithmic growth engine for modern brands. We build the systems; you handle the sales.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                                Deploy System <ArrowRight size={20} />
                            </Link>
                            <a href="tel:0703383837" className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 text-gray-900 dark:text-white transition-colors">
                                <Phone size={18} className="text-blue-600" /> Consult Expert
                            </a>
                        </div>
                    </motion.div>

                    {/* HERO VISUALS */}
                    <div className="relative h-[400px] w-full flex items-center justify-center mt-10 lg:mt-0">
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 w-full max-w-sm bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl">
                            <div className="flex justify-between items-center mb-6 text-gray-900 dark:text-white">
                                <TrendingUp className="text-blue-600" size={24} />
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5 }} className="h-full bg-blue-600" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-center font-black text-2xl text-gray-900 dark:text-white">
                                    <div className="text-blue-600">+124%</div>
                                    <div className="text-purple-500">8.2x</div>
                                </div>
                            </div>
                        </motion.div>

                        <FloatingIcon icon={<Share2 size={24} />} color="bg-[#1877F2]" delay={0} x="-140px" y="-120px" label="Meta" />
                        <FloatingIcon icon={<Globe size={24}/>} color="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" delay={0.5} x="140px" y="-80px" label="IG" />
                        <FloatingIcon icon={<Users size={24}/>} color="bg-[#0077B5]" delay={1} x="-120px" y="100px" label="In" />
                        <FloatingIcon icon={<Video size={24}/>} color="bg-black" delay={1.5} x="100px" y="120px" label="TikTok" />
                    </div>
                </div>
            </section>

            {/* --- LIVE TICKER --- */}
            <div className="bg-blue-600 py-3 overflow-hidden border-y border-white/10">
                <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex whitespace-nowrap gap-12 text-white font-black text-[10px] uppercase tracking-widest">
                    {[1,2,3].map(i => (
                        <span key={i} className="flex items-center gap-4">
                            <CheckCircle2 size={14}/> Revenue Scaled +$12k
                            <Zap size={14} fill="currentColor"/> Campaign Optimized
                            <Users size={14}/> 8 High-Intent Leads Found
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* --- ROADMAP --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Our Process</h2>
                    <p className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">The Roadmap to Dominance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {roadmap.map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                            <span className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors leading-none">{item.step}</span>
                            <h3 className="text-xl font-black mt-4 mb-2 uppercase text-gray-900 dark:text-white"> {item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- BENTO MATRIX --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 p-10 rounded-[3rem] bg-zinc-900 text-white relative overflow-hidden flex flex-col justify-between min-h-[350px] shadow-2xl">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/40">
                                <BarChart3 size={24}/>
                            </div>
                            <h3 className="text-4xl font-black uppercase italic mb-4 leading-[0.9]">High-ROAS <br/> Ad Performance</h3>
                            <p className="text-gray-400 max-w-md font-medium">Precision-targeted media buying that ensures your spend is an investment, not a cost.</p>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#2563eb15,transparent_50%)]" />
                    </div>

                    <div className="p-10 rounded-[3rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-sm">
                        <MessageSquare className="text-blue-600" size={40}/>
                        <div>
                            <h3 className="text-xl font-black uppercase mb-2 text-gray-900 dark:text-white">Omni-Channel</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">WhatsApp and Email automation to close deals 24/7.</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center gap-4 group">
                        <div className="p-3 bg-blue-600/10 rounded-xl text-blue-600"><PenTool size={24}/></div>
                        <h4 className="font-bold text-sm uppercase text-gray-900 dark:text-white">Creative Direction</h4>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center gap-4 group">
                        <div className="p-3 bg-purple-600/10 rounded-xl text-purple-600"><ShieldCheck size={24}/></div>
                        <h4 className="font-bold text-sm uppercase text-gray-900 dark:text-white">Data Security</h4>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center gap-4 group">
                        <div className="p-3 bg-amber-600/10 rounded-xl text-amber-600"><Megaphone size={24}/></div>
                        <h4 className="font-bold text-sm uppercase text-gray-900 dark:text-white">Marketing Outreach</h4>
                    </div>
                </div>
            </section>

            {/* --- ICONS SECTION --- */}
            <section className="py-12 flex justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 text-gray-900 dark:text-white">
                <ThumbsUp size={32}/> <Heart size={32}/> <Target size={32}/>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-20 px-6 max-w-3xl mx-auto">
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden transition-all">
                            <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-gray-900 dark:text-white">
                                {faq.q}
                                <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-blue-600' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-6 pb-5 text-gray-500 text-sm overflow-hidden font-medium">
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-20 bg-blue-600 text-center relative overflow-hidden shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase tracking-tighter italic">READY TO TRIGGER <br/> EXPONENTIAL GROWTH?</h2>
                    <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl inline-block">
                        Claim My Free Audit
                    </Link>
                </div>
            </section>
        </div>
    );
}

function FloatingIcon({ icon, color, delay, x, y, label }: FloatingIconProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                x: x,
                y: [y, `${parseInt(y) - 20}px`, y]
            }}
            transition={{
                opacity: { duration: 1, delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
            }}
            className={`absolute z-20 ${color} p-3 rounded-2xl text-white shadow-xl flex items-center gap-2`}
        >
            {icon}
            {label && <span className="text-[10px] font-black uppercase pr-1">{label}</span>}
        </motion.div>
    );
}