import React from 'react';
import { BookOpen, ExternalLink, Globe, Quote } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-24 px-4 bg-slate-100 dark:bg-[#010409] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e40af] dark:text-blue-400">Research & Publications</h2>
                    <p className="text-slate-900 dark:text-slate-200 text-lg max-w-2xl mx-auto font-black italic">
                        Contributing to the advancement of technology and indigenous language preservation.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 md:p-12 rounded-[2rem] bg-slate-900 border-2 border-blue-900 shadow-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:border-primary hover:shadow-primary/20">
                        {/* Decorative Background Icon */}
                        <div className="absolute -right-8 -bottom-8 opacity-5 transition-transform group-hover:scale-110 duration-500">
                            <BookOpen size={240} className="text-blue-400" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-blue-400/10 text-blue-400 text-xs font-black uppercase tracking-widest border border-blue-400/20">
                                    Lead Author
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-400/20">
                                    Springer Nature
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-purple-400/10 text-purple-400 text-xs font-black uppercase tracking-widest border border-purple-400/20">
                                    AI & NLP
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                                Challenges to Prepare the Parallel Corpus for Luganda Language
                            </h3>

                            <div className="flex items-center gap-3 mb-8 text-slate-400 italic">
                                <Quote className="w-5 h-5 text-blue-400" />
                                <p className="text-lg font-medium">
                                    Grace, S., Birungi, J. R., Nabawagga, R., & Parida, S. (2024).
                                </p>
                            </div>

                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                                <p className="font-bold">
                                    Published in: <span className="text-white italic">Applying AI-Based Tools and Technologies Towards Revitalization of Indigenous and Endangered Languages.</span> Studies in Computational Intelligence, vol 1148.
                                </p>
                                <p>
                                    This research addresses the scarcity of digital resources for Luganda, an indigenous Ugandan language. We documented the linguistic challenges and methodology involved in preparing a high-quality parallel corpus, laying the groundwork for more accurate Machine Translation and AI applications for Luganda speakers.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <a
                                    href="https://doi.org/10.1007/978-981-97-1987-7_11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Read Publication (DOI)
                                </a>
                                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 font-bold">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    Indigenous Language NLP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
