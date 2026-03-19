import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Software Development (Frontend)',
            issuer: 'Tech4Dev (Technology for Social Change and Development)',
            year: '2023–2024',
            icon: <Award className="w-6 h-6 text-blue-400" />,
            badge: 'https://cdn.simpleicons.org/react'
        },
        {
            title: 'Introduction to Data Analytics',
            issuer: 'IBM / Coursera',
            year: '2023',
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            badge: 'https://cdn.simpleicons.org/ibm'
        },
        {
            title: 'Digital Awarenes',
            issuer: 'Cisco Networking Academy',
            year: '2024',
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            badge: 'https://cdn.simpleicons.org/cisco'
        },
        {
            title: 'Artificial Intelligence & CyberSecurity',
            issuer: 'Africa Agility',
            year: '2023–2025',
            icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
            badge: 'https://cdn.simpleicons.org/polska'
        },
        {
            title: 'Web Development',
            issuer: 'SheCodes Foundation',
            year: '2023',
            icon: <Award className="w-6 h-6 text-pink-400" />,
            badge: 'https://cdn.simpleicons.org/webhint'
        },
        {
            title: 'Low-code Development (Zoho Creator)',
            issuer: 'Zoho',
            year: '2024',
            icon: <CheckCircle2 className="w-6 h-6 text-orange-400" />,
            badge: 'https://cdn.simpleicons.org/zoho'
        }
    ];

    return (
        <section id="certifications" className="py-24 px-4 bg-slate-100 dark:bg-[#020617] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e40af] dark:text-blue-400">Certifications & Training</h2>
                    <p className="text-slate-900 dark:text-slate-200 text-lg max-w-2xl mx-auto font-black italic">
                        Verified skills and specialized training from global technology leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-[2rem] bg-slate-900 border-2 border-blue-900 shadow-xl hover:shadow-primary/20 hover:scale-105 hover:border-primary transition-all duration-300 group flex flex-col h-full text-left"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                                    {cert.icon}
                                </div>
                                <img
                                    src={cert.badge}
                                    alt={cert.issuer}
                                    className="w-10 h-10 object-contain opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <h4 className="text-blue-400 font-extrabold mb-6 flex items-center gap-2">
                                {cert.issuer}
                            </h4>

                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-sm font-black text-slate-400 uppercase tracking-widest">
                                    {cert.year}
                                </span>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] uppercase font-black">
                                    Verified
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
