import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const checkDark = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDark();

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-gray-100 dark:bg-[#020617] border-t border-gray-200 dark:border-white/5 mt-auto">

            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

                {/* Brand */}
                <div className="md:col-span-2">
                    <Link to="/">
                        <img
                            src={isDarkMode ? "/adorax-logo.png" : "/adorax-logo2.png"}
                            alt="AdoraX"
                            className="h-10"
                        />
                    </Link>

                    <p className="text-gray-500 text-sm mt-4 max-w-md">
                        AdoraX builds data-driven marketing systems that generate leads,
                        increase sales, and support long-term business growth.
                    </p>

                    <p className="text-xs text-gray-400 mt-4">
                        Trusted by growing brands and businesses.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
                        Navigation
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/about" className="hover:text-blue-600">About</Link>
                        <Link to="/services" className="hover:text-blue-600">Services</Link>
                        <Link to="/packages" className="hover:text-blue-600">Packages</Link>
                        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
                        Services
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>Social Media Management</p>
                        <p>Paid Ads (Meta & Google)</p>
                        <p>Lead Generation</p>
                        <p>Website Development</p>
                        <p>WhatsApp Marketing</p>
                    </div>
                </div>

                {/* Contact + CTA */}
                <div>
                    <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
                        Contact
                    </h3>

                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <p>Email: info@adorax.com</p>
                        <p>Location: Sri Lanka</p>
                        <p>WhatsApp: +94 77 000 0000</p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
                    >
                        Get Started
                    </Link>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 dark:border-white/5 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                <p>© {year} AdoraX Digital. All rights reserved.</p>

                <div className="flex gap-4 mt-3 md:mt-0">
                    <Link to="/privacy" className="hover:bg-blue-600">Privacy Policy</Link>
                    <Link to="/terms" className="hover:bg-blue-600">Terms</Link>
                </div>

            </div>

        </footer>
    );
}