const Projects = () => {
    const projects = [
        {
            title: 'Farm Management Information System',
            description: 'A comprehensive mobile and web application for tracking farm records and production analytics.',
            tags: ['Mobile', 'Web', 'React Native', 'Django'],
            problem: 'Manual record keeping leading to data loss and inefficient farm operations.',
        },
        {
            title: 'Doctors Booking App',
            description: 'Winner of Africa\'s Talking Summit Hackathon (1st Runners-Up). A seamless platform for patient-doctor scheduling.',
            tags: ['App Development', 'API Integration', 'Hackathon'],
            problem: 'Difficulty for patients to access available doctors in real-time.',
        },
        {
            title: 'Tourism Web App',
            description: 'Award-winning project (1st Place) for promoting local tourism in Uganda.',
            tags: ['Next.js', 'UI/UX', 'Hackathon'],
            problem: 'Lack of accessible information on local tourist destinations and booking platforms.',
        },
        {
            title: 'Bancassurance Management System',
            description: 'Developed during GirlCode Hackathon to manage insurance agent activities.',
            tags: ['System Design', 'React', 'Fintech'],
            problem: 'Inefficient manual tracking of insurance agents and their sales performance.',
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 text-foreground bg-white dark:bg-card/5 relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="absolute inset-0 tech-grid-bg opacity-[0.06] pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 dark:from-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="aspect-video w-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
                                <span className="text-slate-400 dark:text-gray-500 font-mono text-sm z-10">[Project Screenshot Placeholder]</span>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-black uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted mb-6 font-medium leading-relaxed">{project.description}</p>
                                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-background/50 border border-primary/10">
                                    <p className="text-[10px] font-black text-primary uppercase mb-2 tracking-[0.2em]">Problem Solved</p>
                                    <p className="text-sm text-foreground/90 italic font-medium">"{project.problem}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
