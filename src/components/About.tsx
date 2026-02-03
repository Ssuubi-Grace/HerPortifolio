const About = () => {
    return (
        <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">About Me</h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            <p>
                                I am a passionate and purpose-driven <span className="text-primary font-bold">Software Developer</span> with a unique background in Water Engineering.
                                My transition into technology was fueled by a desire to create impact through innovation, especially in education and community development.

                            </p>
                            <p>
                                With hands-on experience in full-stack development <span className="text-foreground font-semibold">(React, Next.js, Django, PostgreSQL)</span> and Agile collaboration,
                                I focus on building solutions that bridge the digital divide. I am deeply committed to digital inclusion and STEM advocacy for girls and young learners.
                            </p>
                            <p>
                                Beyond technical skills, I am a founder of initiatives like <span className="text-secondary font-bold underline decoration-primary/30">Girls in STEM</span> and the <span className="text-secondary font-bold underline decoration-primary/30">Digital Kids Program</span>,
                                where I mentor the next generation of tech leaders.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
                            <h4 className="text-foreground font-bold text-xl mb-2">Education</h4>
                            <p className="text-muted text-sm">B.Sc Computer Science - KIIT University, India</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-colors">
                            <h4 className="text-foreground font-bold text-xl mb-2">Location</h4>
                            <p className="text-muted text-sm">Gayaza, Kampala, Uganda</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition-colors">
                            <h4 className="text-foreground font-bold text-xl mb-2">Impact</h4>
                            <p className="text-muted text-sm">Founder of Girls in STEM Initiative</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
                            <h4 className="text-foreground font-bold text-xl mb-2">Values</h4>
                            <p className="text-muted text-sm">Inclusion, Empowerment, Innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
