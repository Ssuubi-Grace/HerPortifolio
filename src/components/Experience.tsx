const Experience = () => {
    const experiences = [
        {
            role: 'Software Engineering Apprentice',
            company: 'Refactory Academy',
            period: 'June 2025 - Present',
            description: 'Building full-stack development and professional engineering skills focusing on UI/UX, SOLID principles, TDD, and DevOps practices.',
        },
        {
            role: 'Systems Developer',
            company: 'Kutya Mukama Nursery & Primary School',
            period: 'August 2025 - Present',
            description: 'Developing a school record management and payment tracking system.',
        },
        {
            role: 'ICT Support Volunteer',
            company: 'Kampala Capital City Authority (KCCA)',
            period: 'Oct 2024 - April 2025',
            description: 'Resolved hardware/software issues and supported LAN troubleshooting.',
        },
        {
            role: 'Web Development Intern',
            company: 'CodeClause',
            period: 'Jun - Jul 2023',
            description: 'Completed portfolio projects showcasing frontend skills and remote collaboration.',
        },
        {
            role: 'Technical Instructor (Plumbing)',
            company: 'Ntinda Vocational Training Institute',
            period: '2019 - 2021',
            description: 'Delivered hands-on training and assessment under the BTVET framework.',
        },
    ];

    return (
        <section id="experience" className="py-24 px-4 bg-slate-50 dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center">Professional Journey</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                                <div className="md:col-span-1 md:text-right">
                                    <span className="text-primary font-black tracking-tighter text-lg">{exp.period}</span>
                                </div>
                                <div className="hidden md:flex md:col-span-1 justify-center relative h-full">
                                    <div className="w-4 h-4 rounded-full bg-primary z-10 ring-4 ring-primary/20"></div>
                                    <div className="absolute top-4 bottom-0 w-0.5 bg-primary/20 -mb-8"></div>
                                </div>
                                <div className="md:col-span-3 pb-12">
                                    <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                                        <h3 className="text-2xl font-black text-foreground mb-2">{exp.role}</h3>
                                        <h4 className="text-secondary font-bold mb-4 flex items-center gap-2">
                                            {exp.company}
                                            <span className="h-1 w-1 bg-muted rounded-full"></span>
                                        </h4>
                                        <p className="text-muted leading-relaxed font-medium">{exp.description}</p>
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
