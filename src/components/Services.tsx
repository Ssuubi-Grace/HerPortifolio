import React from 'react';
import { Monitor, Smartphone, Globe, Cpu, PieChart, Layout } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web Application Development',
            description: 'Building responsive, user-friendly web apps using React, Next.js, Django, and PostgreSQL.',
            icon: <Monitor className="w-8 h-8 text-[#1e40af]" />,
            accent: 'from-blue-500/20 to-transparent'
        },
        {
            title: 'Mobile App Development',
            description: 'Developing cross-platform mobile apps using React Native and low-code tools (FlutterFlow).',
            icon: <Smartphone className="w-8 h-8 text-[#4338ca]" />,
            accent: 'from-indigo-500/20 to-transparent'
        },
        {
            title: 'Website Development',
            description: 'Creating fast, accessible websites using modern frameworks, low-code tools (Framer) and CMS platforms (WordPress, Strapi).',
            icon: <Globe className="w-8 h-8 text-[#1d4ed8]" />,
            accent: 'from-blue-400/20 to-transparent'
        },

        {
            title: 'IT Support & Digital Training',
            description: 'Troubleshooting hardware, software, and LAN issues, supporting and guiding users on system usage and adoption, and delivering training on the use of digital tools.',
            icon: <Cpu className="w-8 h-8 text-[#334155]" />,
            accent: 'from-slate-500/20 to-transparent'
        },
        {
            title: 'Data Analytics & Machine Learning',
            description: 'Exploratory Data Analysis (EDA), Data Visualization, and Model Training.',
            icon: <PieChart className="w-8 h-8 text-[#059669]" />,
            accent: 'from-emerald-500/20 to-transparent'
        },
        {
            title: 'UI/UX Design & Product Management',
            description: 'Designing intuitive user interfaces with Figma and Visily, and driving products to completion using Agile tools like Jira and Trello.',
            icon: <Layout className="w-8 h-8 text-[#db2777]" />,
            accent: 'from-pink-500/20 to-transparent'
        }
    ];

    return (
        <section id="services" className="py-24 px-4 bg-white dark:bg-[#020617] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e40af] dark:text-blue-400">What I Do</h2>
                    <p className="text-slate-900 dark:text-slate-200 text-lg max-w-2xl mx-auto font-black italic">
                        I bridge the gap between complex technology and practical, impactful solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-[24px] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-blue-800 transition-all duration-300 hover:shadow-2xl shadow-xl flex flex-col min-h-[250px]"
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-black mb-3 text-slate-950 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
