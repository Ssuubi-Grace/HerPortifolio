'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[100] p-4 rounded-2xl bg-slate-900 border-2 border-primary text-white shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-primary group ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-12 invisible'
                }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
            <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse-slow -z-10 group-hover:hidden"></div>
        </button>
    );
};

export default BackToTop;
