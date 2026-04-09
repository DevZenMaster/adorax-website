import { useEffect } from 'react';
import { Mail, PhoneCall } from 'lucide-react';

export default function Contact() {
    const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const plan = params.get('plan');
        if (plan) {
            const select = document.getElementById('package-select') as HTMLSelectElement;
            if (select) select.value = plan;
        }
    }, []);

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black mb-4">Get Free <span className="text-gradient">Audit / Consultation</span></h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Start your growth system with AdoraX today.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="glass-panel p-8 rounded-[2rem]">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form action={`https://formspree.io/f/${formspreeKey}`} method="POST" className="space-y-5">
                        <input type="text" name="name" required placeholder="Your Name" className="w-full bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none" />
                        <input type="email" name="email" required placeholder="Email Address" className="w-full bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none" />
                        <select name="interested_package" id="package-select" className="w-full bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none cursor-pointer">
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Starter">Starter Package</option>
                            <option value="Growth">Growth Package</option>
                            <option value="Pro">Pro Package</option>
                        </select>
                        <textarea name="message" rows={4} required placeholder="How can we help you?" className="w-full bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none resize-none"></textarea>
                        <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors">Submit Request</button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3"><PhoneCall className="text-brand-blue"/> <span className="font-bold">070 33 83 83 7</span></div>
                        <div className="flex items-center gap-3"><Mail className="text-brand-blue"/> <span className="font-bold">info@adorax.online</span></div>
                    </div>
                </div>

                {/* Booking System (Calendly Embed) */}
                <div className="glass-panel p-8 rounded-[2rem] flex flex-col">
                    <h2 className="text-2xl font-bold mb-6">Book a Discovery Call</h2>
                    <div className="flex-grow bg-gray-100 dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center p-8 text-center min-h-[400px]">
                        <div>
                            <p className="text-gray-500 mb-4">Integrate your Calendly or Google Calendar booking link here.</p>
                            {/* Replace the href with your actual Calendly link */}
                            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-block bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold shadow-lg border border-gray-200 dark:border-white/10 hover:scale-105 transition-transform">
                                Open Booking Calendar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}