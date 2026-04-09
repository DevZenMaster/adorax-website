import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleDarkMode }: any) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Packages', path: '/packages' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* LOGO TOGGLE LOGIC */}
                <Link to="/" className="flex items-center hover:scale-105 transition-transform">
                    <img
                        src={isDarkMode ? "/adorax-logo.png" : "/adorax-logo2.png"}
                        alt="AdoraX"
                        className="h-10 w-auto object-contain transition-all duration-500"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-bold transition-colors ${location.pathname === link.path ? 'text-brand-blue' : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                        {isDarkMode ? <Sun size={20} className="text-yellow-400"/> : <Moon size={20} className="text-gray-600"/>}
                    </button>
                    <Link to="/contact" className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg">
                        Get Started
                    </Link>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? <Sun size={24} className="text-yellow-400"/> : <Moon size={24} className="text-gray-600 dark:text-gray-300"/>}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-900 dark:text-white"
                    >
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-[#020617] border-b border-gray-200 dark:border-white/5 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-bold text-gray-900 dark:text-white hover:text-brand-blue transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-brand-blue font-black text-lg">
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
}