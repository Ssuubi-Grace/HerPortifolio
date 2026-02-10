import React from 'react';
import { Layout, Server, Zap, Code2, GitMerge, Palette, Database } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            category: 'Frontend',
            icon: <Layout className="w-5 h-5" />,
            items: [
                { name: 'React', logo: 'react' },
                { name: 'Next.js', logo: 'nextdotjs' },
                { name: 'React Native', logo: 'react' },
                { name: 'Tailwind CSS', logo: 'tailwindcss' },
                { name: 'Bootstrap', logo: 'bootstrap' }
            ]
        },
        {
            category: 'Backend',
            icon: <Server className="w-5 h-5" />,
            items: [
                { name: 'Python', logo: 'python' },
                { name: 'Django', logo: 'django' },
                { name: 'PostgreSQL', logo: 'postgresql' }
            ]
        },
        {
            category: 'CMS & Low-Code',
            icon: <Zap className="w-5 h-5" />,
            items: [
                { name: 'WordPress', logo: 'wordpress' },
                { name: 'Strapi', logo: 'strapi' },
                { name: 'Zoho Creator', logo: 'zoho' },
                { name: 'FlutterFlow', logo: 'flutter' },
                { name: 'Framer', logo: 'framer' }
            ]
        },
        {
            category: 'Languages',
            icon: <Code2 className="w-5 h-5" />,
            items: [
                { name: 'JavaScript', logo: 'javascript' },
                { name: 'TypeScript', logo: 'typescript' },
                { name: 'Python', logo: 'python' },
                { name: 'PHP', logo: 'php' },
                { name: 'Java', logo: 'java' },
                { name: 'C', logo: 'c' },
                { name: 'C++', logo: 'cplusplus' }
            ]
        },
        {
            category: 'DevOps & Agile',
            icon: <GitMerge className="w-5 h-5" />,
            items: [
                { name: 'Git & GitHub', logo: 'github' },
                { name: 'CI/CD', logo: 'githubactions' },
                { name: 'Agile/Scrum', logo: 'jira' },
                { name: 'GitHub Actions', logo: 'githubactions' }
            ]
        },
        {
            category: 'Design & Tools',
            icon: <Palette className="w-5 h-5" />,
            items: [
                { name: 'Figma', logo: 'figma' },
                { name: 'Visily', logo: 'figma' },
                { name: 'VS Code', logo: 'visualstudiocode' },
                { name: 'Google Workspace', logo: 'google' },
                { name: 'MS Office', logo: 'microsoftoffice' }
            ]
        },
        {
            category: 'Databases',
            icon: <Database className="w-5 h-5" />,
            items: [
                { name: 'PostgreSQL', logo: 'postgresql' },
                { name: 'Supabase', logo: 'supabase' },
                { name: 'MySQL', logo: 'mysql' },
                { name: 'Oracle', logo: 'oracle' }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e40af] dark:text-blue-400">Technical Skills</h2>
                    <p className="text-slate-900 dark:text-slate-200 text-lg max-w-2xl mx-auto font-black italic">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-[24px] bg-blue-100 dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 shadow-xl flex flex-col h-full text-left"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-primary border-2 border-blue-100 dark:border-slate-700 shadow-md">
                                    {group.icon}
                                </div>
                                <h3 className="text-lg font-black text-slate-950 dark:text-white uppercase tracking-wider">
                                    {group.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-blue-900/40 text-slate-950 dark:text-white text-sm font-bold border-2 border-blue-100 dark:border-blue-900/20 shadow-md"
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${skill.logo}`}
                                            alt={skill.name}
                                            className="w-4 h-4 object-contain dark:invert opacity-100"
                                        />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
