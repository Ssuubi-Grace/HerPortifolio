import React from 'react';
import { Sparkles, Laptop, UserCircle2, Binary } from 'lucide-react';

const CommunityImpact = () => {
    const impacts = [
        {
            title: 'Digital Kids Uganda',
            tagline: 'Bringing digital skills to children in underserved communities',
            description: 'Founded a community program introducing children in underserved communities to basic computer skills and coding. We organize hands-on learning sessions using shared devices and community-supported laptops.',
            role: 'Founder & Lead',
            skills: ['Community building', 'Curriculum design', 'Leadership', 'EdTech', 'Social impact'],
            icon: <Laptop className="w-6 h-6 text-[#1e40af]" />,
            color: 'from-blue-500/20 to-transparent'
        },
        {
            title: 'Girls in STEM Initiative',
            tagline: 'Mentoring young girls to explore STEM pathways',
            description: 'Lead STEM awareness sessions and career guidance in neighboring schools and communities. We organize hands-on workshops and mentorship for girls to explore technology and engineering careers, advocating for inclusive access to digital skills and role models.',
            role: 'Founder & Mentor',
            skills: ['Mentorship', 'Public speaking', 'Program design', 'Advocacy', 'Leadership'],
            icon: <UserCircle2 className="w-6 h-6 text-[#db2777]" />,
            color: 'from-pink-500/20 to-transparent'
        }
    ];

    return (
        <section id="impact" className="py-24 px-4 bg-slate-50 dark:bg-[#010409] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e40af] dark:text-blue-400">Community Impact and Leadership</h2>
                    <p className="text-slate-950 dark:text-white text-lg max-w-2xl mx-auto font-black italic">
                        Dedicated to narrowing the digital divide and empowering the next generation of innovators.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    {impacts.map((item, index) => (
                        <div key={index} className="group relative">
                            <div className="relative h-full bg-blue-100 dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 rounded-[30px] p-8 md:p-10 shadow-xl flex flex-col h-full text-left">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-primary/20 shadow-md">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest text-[#1e40af] dark:text-primary bg-white dark:bg-primary/20 px-4 py-2 rounded-xl border-2 border-primary/30 shadow-md">
                                            {item.role}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-black mb-2 text-slate-950 dark:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#2563eb] dark:text-blue-400 font-extrabold text-lg mb-6 leading-tight">
                                        {item.tagline}
                                    </p>

                                    <p className="text-slate-900 dark:text-slate-100 text-lg leading-relaxed mb-8 font-bold">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-8 border-t-2 border-blue-200 dark:border-border/50">
                                        <h4 className="text-sm font-black uppercase tracking-wider text-slate-950 dark:text-slate-400 mb-4 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                            Impact & Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, sIndex) => (
                                                <span
                                                    key={sIndex}
                                                    className="px-3 py-1 text-sm font-black rounded-lg bg-black dark:bg-slate-800 text-white dark:text-slate-100 border border-slate-800 shadow-md"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-black italic shadow-lg hover:scale-105 transition-transform duration-300">
                        <Binary className="w-6 h-6 animate-pulse" />
                        The future is digital.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityImpact;
