import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';

// Refined ScrollToTop with smooth behavior
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
};

function App() {
    // Initializing state with true (Dark Mode by default)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect(() => {
        const root = document.documentElement;
        // Target the link tag by rel for the favicon
        const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

        if (isDarkMode) {
            root.classList.add('dark');
            if (favicon) {
                // Use a light-colored icon for visibility on dark browser tabs
                favicon.href = '/favicon-light.png';
            }
        } else {
            root.classList.remove('dark');
            if (favicon) {
                // Use a dark-colored icon for visibility on light browser tabs
                favicon.href = '/favicon-dark.png';
            }
        }
    }, [isDarkMode]);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans selection:bg-blue-600/30 transition-colors duration-300 dark:bg-[#020617]">

                <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

                <main className="flex-grow pt-24">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/packages" element={<Packages />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/94703383837"
                    target="_blank"
                    rel="noreferrer"
                    className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] z-50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={28} />
                    <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none border border-gray-100 dark:border-gray-700">
                        Chat with us
                    </span>
                </a>
            </div>
        </Router>
    );
}

export default App;