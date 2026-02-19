import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#020617]">
            {/* Moving Enhancing Tech Background */}
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none overflow-hidden">
                <Image
                    src="/dynamic-tech-bg.png"
                    alt="Dynamic Technology Background"
                    fill
                    className="object-cover scale-125 animate-pan"
                    priority
                />
            </div>

            {/* Tech Vibe Pattern Overlays */}
            <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none animate-pan"></div>
            <div className="scanline"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center justify-center md:justify-start gap-4 text-2xl font-mono">
                        <span className="h-px w-12 bg-primary"></span>
                        👋🏽 Hi I'm
                    </h2>
                    <h1 className="text-7xl md:text-[8rem] font-black mb-8 leading-[0.85] tracking-tighter text-white">
                        Grace<br />
                        <span className="text-primary">Ssuubi</span>
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
                        <div className="h-16 w-1.5 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)]"></div>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-400 italic tracking-tight">
                            Software Developer
                        </h3>
                    </div>
                    <p className="text-slate-400 text-xl md:text-2xl max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed font-medium">
                        I am a passionate and purpose-driven developer leveraging technology to solve real-world problems.
                        Bridging the gap between engineering principles and modern software solutions.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-8">
                        <a
                            href="#projects"
                            className="px-12 py-5 bg-primary hover:bg-primary-hover text-white rounded-2xl font-black transition-all transform hover:-translate-y-2 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 text-lg"
                        >
                            Explore Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="px-12 py-5 border-2 border-primary/40 text-white hover:bg-primary/10 rounded-2xl font-black transition-all transform hover:-translate-y-2 text-lg"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center scale-100 md:scale-110">
                    <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem]">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-[#020617] shadow-2xl z-20">
                            <Image
                                src="/profile.jpg"
                                alt="Ssuubi Grace"
                                fill
                                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                priority
                            />
                        </div>
                        {/* Circle Border Glow in Blue */}
                        <div className="absolute -inset-4 rounded-full border-2 border-primary/40 z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
