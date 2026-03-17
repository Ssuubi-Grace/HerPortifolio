import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 bg-slate-100 dark:bg-[#010409] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
            {/* Background elements */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100 dark:from-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#1e40af] dark:text-blue-400 text-center">About Me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="relative group flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src="/profile.jpg"
                                alt="Grace Ssuubi"
                                fill
                                className="object-cover transition-all duration-700 group-hover:grayscale"
                                priority
                            />
                            {/* Decorative border overlays */}
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none"></div>
                            <div className="absolute -inset-1 border border-primary/10 rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        {/* Background glow */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="text-left lg:pl-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 leading-tight">
                            <span className="text-primary">Driven,</span> <span className="text-blue-600/80 dark:text-blue-400/80">Innovative Software</span> <span className="text-primary">Developer</span>
                        </h2>

                        <div className="space-y-6 text-slate-600/90 dark:text-blue-100/70 text-lg leading-relaxed mb-10">
                            <p>
                                <span className="text-foreground dark:text-white font-bold italic">I’m </span>
                                a <span className="text-primary font-bold">software developer</span> with a strong foundation in <span className="text-primary font-bold">IT Support</span>, on a mission to use technology to <span className="text-primary font-bold">empower communities</span> and close digital gaps.
                            </p>
                            <p>
                                With a foundation in <span className="text-primary font-bold">computer science</span> and hands-on experience building <span className="text-primary font-bold">full-stack applications</span>,
                                I focus on creating <span className="text-primary font-bold">practical, user-friendly solutions</span> that solve real problems. My unique path, from <span className="text-primary font-bold">Water Engineering</span> and <span className="text-primary font-bold">Vocational Instruction</span> to <span className="text-primary font-bold">Software Engineering</span>, shapes my <span className="text-primary font-bold">human-centered approach</span>. I don’t just build products; I build for people.
                            </p>
                            <p>
                                My background in <span className="text-primary font-bold">IT Support</span> gave me a front-row seat to how digital systems fail and how users interact with them. I don't just build apps; I build them with the <span className="text-primary font-bold">mindset of a support professional</span>, ensuring they are <span className="text-primary font-bold">secure, easy to troubleshoot, and built to last</span>.
                            </p>
                            <p>
                                Beyond development, I’m passionate about <span className="text-primary font-bold">digital inclusion</span> and <span className="text-primary font-bold">STEM education</span>. I lead <span className="text-primary font-bold">community initiatives</span> like <span className="text-secondary font-bold">Digital Kids</span> and <span className="text-secondary font-bold">Girls in STEM</span>,
                                helping young learners access technology, coding, and safe digital skills. I thrive in collaborative, impact-driven environments and I’m always exploring how <span className="text-primary font-bold">emerging technologies</span> can serve communities better.
                            </p>
                            <p>
                                Looking ahead, I’m working toward a future where individuals, schools, and small businesses across different sectors can access simple, affordable digital solutions and build a strong online presence.
                            </p>
                            <p className="font-bold text-primary italic">
                                The future is digital.
                            </p>
                        </div>

                        {/* Languages & Social row */}
                        <div className="flex flex-wrap gap-5 items-center pt-8 border-t border-border/50">

                            <div className="flex gap-4">
                                <a href="https://github.com/Ssuubi-Grace" target="_blank" rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 dark:bg-card border border-blue-800 dark:border-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm text-slate-300 hover:text-blue-400">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/ssuubi-grace" target="_blank" rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 dark:bg-card border border-blue-800 dark:border-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm text-slate-300 hover:text-blue-400">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://x.com/grace_ssuubi" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 dark:bg-card border border-blue-800 dark:border-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm text-slate-300 hover:text-blue-400">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="mailto:hopeliz835@gmail.com"
                                    className="p-3 bg-slate-900 dark:bg-card border border-blue-800 dark:border-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm font-bold flex items-center gap-2 text-slate-300 hover:text-blue-400">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="flex gap-2 items-center mr-4">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Languages:</span>
                                <span className="px-3 py-1 bg-blue-900/10 text-blue-400 text-xs font-black rounded-lg border border-blue-400/20">English</span>
                                <span className="px-3 py-1 bg-blue-900/10 text-blue-400 text-xs font-black rounded-lg border border-blue-400/20">Luganda</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
