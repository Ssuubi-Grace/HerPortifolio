// Finalized Experience Component
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Software Engineering Apprentice',
            company: 'Refactory Academy',
            period: 'June 2025 - January 2026',
            description: 'Collaborated in Agile teams to design and develop full-stack applications, translating user requirements into functional digital solutions while contributing to documentation, system improvements, and stakeholder demonstrations.',
        },
        {
            role: 'Systems Developer',
            company: 'Kutya Mukama Nursery & Primary School',
            period: 'August 2024 - January 2025',
            description: 'Developed and maintained the School management system.',
        },
        {
            role: 'ICT Support Volunteer',
            company: 'Kampala Capital City Authority (KCCA)',
            period: 'Oct 2024 - Mar 2025',
            description: 'Provided 1st & 2nd level IT support across departments. Troubleshot hardware, software, and LAN connectivity issues to ensure reliable system performance, while guiding staff on safe digital tool usage.',
        },
        {
            role: 'Web Development Intern',
            company: 'CodeClause',
            period: 'Jun - Jul 2023',
            description: 'Completed portfolio projects showcasing frontend skills and remote collaboration.',
        },
        {
            role: 'Technical Instructor (TVET)',
            company: 'Ntinda Vocational Training Institute',
            period: '2019 - 2021',
            description: 'Delivered competency-based technical training and practical lessons in the Plumbing Department. Leveraged ICT tools for performance tracking and developed instructional materials for continuous assessment.',
        },
    ];

    return (
        <section id="experience" className="py-24 px-4 bg-slate-100 dark:bg-[#020617] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#1e40af] dark:text-blue-400 text-center">Professional Journey</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-0"
                            style={{ animationDelay: `${index * 300}ms` }}
                        >
                            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                                <div className="md:col-span-1 md:text-right">
                                    <span className="text-[#1e40af] dark:text-blue-400 font-extrabold tracking-tighter text-lg">{exp.period}</span>
                                </div>
                                <div className="hidden md:flex md:col-span-1 justify-center relative h-full">
                                    <div className="w-4 h-4 rounded-full bg-[#1e40af] z-10 ring-4 ring-blue-100 dark:ring-blue-900/40"></div>
                                    <div className="absolute top-4 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/40 -mb-8"></div>
                                </div>
                                <div className="md:col-span-3 pb-8">
                                    <div className="p-8 rounded-3xl bg-slate-900 border-2 border-blue-900 shadow-xl hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary transition-all duration-300 transform">
                                        <h3 className="text-2xl font-black text-white mb-2">{exp.role}</h3>
                                        <h4 className="text-blue-400 font-extrabold mb-4 flex items-center gap-2">
                                            {exp.company}
                                            <span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span>
                                        </h4>
                                        <p className="text-slate-100 leading-relaxed font-bold">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
