import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'Rugyeyo Farm – Management Web Portal',
            description: 'A comprehensive financial and administrative system for tracking farm operations, including sales, expenses, employee wages, and task management.',
            tags: ['React (Vite)', 'Django', 'PostgreSQL'],
            image: '/projects/rugyeyo-farm.png',
            story: 'Facing manual and fragmented operations, this centralized portal provides real-time financial visibility. It significantly boosts operational efficiency and offers clearer financial insights for farm administrators.'
        },
        {
            title: 'Rugyeyo Farm – Field Data Mobile App',
            description: 'An offline-first mobile application featuring QR code scanning for crop traceability, yield recording, and field task management.',
            tags: ['React Native', 'Django', 'Offline-First'],
            image: '/projects/rugyeyo-mobile.png',
            story: 'Designed to solve inaccurate record-keeping in remote areas, this offline-first app features QR scanning for 100% produce traceability from block to dispatch, ensuring data integrity even without constant connectivity.'
        },
        {
            title: 'Rugyeyo Farm – Public Website & Knowledge Hub',
            description: 'A public-facing platform and CMS designed to showcase sustainability metrics, seasonal progress, and agricultural best practices.',
            tags: ['React (Vite)', 'Strapi CMS', 'Django'],
            image: '/projects/rugyeyo-website.png',
            story: 'This CMS-driven platform showcases the farm\'s sustainability journey, increasing brand visibility and serving as a professional hub for sharing best practices and seasonal progress with global stakeholders.'
        },
        {
            title: 'Seethio – Ethiopia Tourism Platform',
            description: 'Award-winning tour guiding platform designed to showcase Ethiopia\'s rich culture and history through curated travel experiences.',
            tags: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'AI Integration'],
            image: '/projects/seethio.png',
            story: 'Winner of 1st Place at Africa Agility Hackathon, this project revolutionized culture discovery in Ethiopia. It provides an innovative approach to tourism by connecting visitors with curated cultural experiences.'
        },
        {
            title: 'Doctors Booking App',
            description: 'A seamless healthcare platform for patient-doctor scheduling, developed to improve access to medical services.',
            tags: ['FlutterFlow', 'Firebase'],
            image: '/projects/doctors-booking.png',
            story: 'Developed to streamline healthcare access, this platform simplifies appointment management for patients and optimizes scheduling workflows for healthcare providers.'
        },
        {
            title: 'School Management System – Kutya Mukama',
            description: 'A robust administration system for managing pupil records, staff salaries, attendance, and visitor logs.',
            tags: ['Next.js', 'Supabase', 'React', 'TypeScript'],
            image: '/projects/school-manager.png',
            story: 'A robust system for digitizing school administration, improving record accuracy for pupil registration, attendance, and fee tracking at Kutya Mukama Nursery & Primary School.'
        },
        {
            title: 'Bancasure – Agent Management System',
            description: 'Centralized platform for agent lifecycle management, policy registration, and claims tracking with compliance monitoring.',
            tags: ['React (Vite)', 'TypeScript', 'Django'],
            image: '/projects/banksure.png',
            story: 'A centralized platform for agent lifecycle management, policies, and compliance. It improves transparency and operational efficiency across the bancassurance sector.'
        },
        {
            title: 'Rapid Clean – Laundry Management',
            description: 'A dedicated system for booking laundry services, managing orders, and tracking financial performance.',
            tags: ['React', 'Node.js'],
            image: '/projects/rapid-clean.png',
            story: 'An automated laundry management system that digitizes order processing and customer communication, reducing manual work and improving turnaround times.'
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 text-foreground bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e40af] dark:text-blue-400 text-center">Explore My Popular Projects</h2>
                    <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-400 mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                            <div className="aspect-[16/11] w-full relative overflow-hidden bg-slate-50 dark:bg-slate-900/80 border-b border-slate-100 dark:border-white/5 p-4 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-all duration-500 rounded-lg group-hover:scale-[1.02]"
                                        priority={index < 2}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>

                            <div className="p-8 flex-grow">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-[#1e40af] dark:text-blue-300 text-[11px] rounded-lg font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-8 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                                        <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Challenge & Impact</p>
                                    </div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                                        "{project.story}"
                                    </p>
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
