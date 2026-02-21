import React from 'react';
import { Mail, Linkedin, Github, MessageCircle, Send, Facebook, MapPin, Phone, Twitter } from 'lucide-react';

const Contact = () => {
    const contactLinks = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value1: 'Gayaza, Kampala,',
            value2: 'Uganda',
            href: 'https://maps.apple.com/?address=Kampala,Uganda',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email me',
            value1: 'hopeliz835@gmail.com',
            value2: '',
            href: 'mailto:hopeliz835@gmail.com',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Call me',
            value1: '+256 782 331 731',
            value2: '+256 701 055 258',
            href: 'tel:+256782331731',
        },
    ];

    const socials = [
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/ssuubi-grace', color: 'hover:bg-[#0A66C2]' },
        { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ssuubi_grace', color: 'hover:bg-[#1DA1F2]' },
        { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/ssuubi.grace/', color: 'hover:bg-[#1877F2]' },
        { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.me/256782331731', color: 'hover:bg-[#25D366]' },
        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Ssuubi-Grace', color: 'hover:bg-[#333]' },
    ];

    return (
        <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-[#010409] relative overflow-hidden border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Section: Centered Heading & Invitation */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e40af] dark:text-blue-400">Get in touch</h2>
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a software solution, a professional partnership,community impact, or just want to say hi, my inbox is always open.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column: Contact List with Circular Icons */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            {contactLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="w-14 h-14 min-w-[3.5rem] bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-xl font-black text-blue-600 dark:text-blue-400 mb-1">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-bold">{item.value1}</p>
                                        {item.value2 && <p className="text-slate-600 dark:text-slate-400 font-bold">{item.value2}</p>}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Media Row */}
                        <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                            <h4 className="text-lg font-black text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-widest">Connect with me</h4>
                            <div className="flex flex-wrap gap-4">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg ${social.color} hover:-translate-y-1`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[#1e293b] border border-blue-500/20 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                        {/* Decorative Send Icon background */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Send className="w-40 h-40 text-blue-400" />
                        </div>

                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6 relative z-10"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="67bf53ee-25cb-45b9-a2ea-efa2be15152b"
                            />

                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-[#0f172a] border border-blue-500/10 focus:border-blue-400 text-white outline-none transition-all font-bold placeholder:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-[#0f172a] border border-blue-500/10 focus:border-blue-400 text-white outline-none transition-all font-bold placeholder:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-[#0f172a] border border-blue-500/10 focus:border-blue-400 text-white outline-none transition-all font-bold placeholder:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-[#0f172a] border border-blue-500/10 focus:border-blue-400 text-white outline-none transition-all font-bold placeholder:text-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-xl transition-all flex items-center justify-center gap-3 group/btn shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
                            >
                                Send Message
                                <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-slate-100 dark:border-white/5 text-center">
                    <p className="text-slate-400 font-bold">© {new Date().getFullYear()} Grace Ssuubi. Built with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
