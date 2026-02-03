const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-primary/10 relative overflow-hidden">

            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Get In Touch</h2>
                <p className="text-muted text-xl max-w-2xl mx-auto mb-12">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <a
                        href="mailto:hopeliz835@gmail.com"
                        className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group"
                    >
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <span className="text-2xl">✉️</span>
                        </div>
                        <div className="text-left">
                            <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Email Me</p>
                            <p className="text-foreground font-bold text-lg">hopeliz835@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://linkedin.com/in/ssuubi-grace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group"
                    >
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <span className="text-2xl">🔗</span>
                        </div>
                        <div className="text-left">
                            <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">LinkedIn</p>
                            <p className="text-foreground font-bold text-lg">ssuubi-grace</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📍</span>
                        </div>
                        <div className="text-left">
                            <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Location</p>
                            <p className="text-foreground font-bold text-lg">Gayaza, Kampala, Uganda</p>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-border mt-16 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Grace Ssuubi. Built with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
