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
        <section id="projects" className="py-24 px-4 text-foreground bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#1e40af] dark:text-blue-400 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-[32px] overflow-hidden bg-[#dbeafe] dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900 shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-video w-full bg-white dark:bg-gray-800 flex items-center justify-center relative overflow-hidden border-b-2 border-blue-100 dark:border-blue-900">
                                <span className="text-[#1e40af] dark:text-gray-500 font-mono text-sm z-10">[Project Screenshot Placeholder]</span>
                            </div>
                            <div className="p-8 text-left">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#1e40af] text-white text-xs rounded-full font-black uppercase tracking-wider shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#000000] dark:text-white group-hover:text-[#1e40af] transition-colors">{project.title}</h3>
                                <p className="text-[#000000] dark:text-slate-100 mb-6 font-bold leading-relaxed">{project.description}</p>
                                <div className="p-5 rounded-2xl bg-white dark:bg-background/50 border-2 border-blue-200">
                                    <p className="text-[10px] font-black text-[#1e40af] uppercase mb-2 tracking-[0.2em]">Problem Solved</p>
                                    <p className="text-sm text-[#0f172a] dark:text-white italic font-extrabold">"{project.problem}"</p>
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
