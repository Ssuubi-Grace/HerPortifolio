const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap'] },
        { category: 'Backend', items: ['Python', 'Django', 'PostgreSQL', 'PHP', 'Low-code (Zoho)'] },
        { category: 'Languages', items: ['Javascript', 'TypeScript', 'C', 'C++', 'Java'] },
        { category: 'Tools & DevOps', items: ['CI/CD', 'Git/GitHub', 'Agile/Scrum', 'Figma', 'MS Office'] },
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-white dark:bg-card/20 relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="absolute inset-0 tech-grid-bg opacity-[0.05] pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 dark:from-background to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                            <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full"></span>
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((skill) => (
                                    <li key={skill} className="flex items-center text-muted font-medium">
                                        <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
