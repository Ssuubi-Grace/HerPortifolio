import React from 'react';

const Education = () => {
    const educationItems = [
        {
            degree: 'Bachelor of Science (Honors) in Computer Science',
            institution: 'KIIT University, Bubaneswar, India',
        },
        {
            degree: 'Diploma in Instructor & Technical Teacher Education',
            institution: 'Kyambogo University',
        },
        {
            degree: 'National Diploma in Water Engineering',
            institution: 'Uganda Technical College - Kyema',
        },
        {
            degree: 'Uganda Advanced Certificate of Education (A-level / Grade 12)',
            institution: 'Grace High School - Bulamu',
        },
    ];

    return (
        <section id="education" className="py-24 px-4 bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#1e40af] dark:text-blue-400 text-center">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationItems.map((edu, index) => (
                        <div key={index} className="p-8 rounded-[30px] bg-[#dbeafe] dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900 shadow-xl hover:shadow-2xl transition-all group">
                            <div className="flex flex-col h-full text-left">
                                <h3 className="text-2xl font-black text-[#000000] dark:text-white mb-2">{edu.degree}</h3>
                                <h4 className="text-[#2563eb] dark:text-blue-400 font-extrabold text-lg mb-6">{edu.institution}</h4>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-[#0f172a] dark:text-slate-400 text-sm font-black">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#1e40af]"></span>
                                    Academic Achievement
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
