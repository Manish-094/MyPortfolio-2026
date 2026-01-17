import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onContactClick }) => {
    const stats = [
        { label: 'Years Experience', value: '2.5+' },
        { label: 'Major Projects', value: '3' },
        { label: 'AWS Services', value: '10+' },
        { label: 'AWS Certification', value: '1' },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 text-brand-cyan text-xs font-black tracking-[0.2em] mb-12"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                    WELCOME
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="relative w-40 h-40 mx-auto mb-10"
                >
                    <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full border-2 border-brand-cyan/30 p-2 bg-brand-bg backdrop-blur-sm overflow-hidden">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQGuFEG18BnuIg/profile-displayphoto-shrink_200_200/B4DZd0T3Q1HMAY-/0/1750003055435?e=2147483647&v=beta&t=2-YK3onxmFHvD_Xum_nuFsUcaKXFaAQ8nAeU-rJpxTc"
                            alt="Manish Patel"
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                                e.target.src = "https://ui-avatars.com/api/?name=Manish+Patel&background=020617&color=00f2ff&bold=true";
                            }}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-1 right-1 w-10 h-10  border border-white/10 rounded-xl flex items-center justify-center text-brand-cyan shadow-xl group"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-[7rem] font-black mb-12 leading-[0.85] tracking-tighter"
                >
                    MANISH <br />
                    <span className="text-brand-cyan">PATEL</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#94a3b8] text-xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
                >
                    AWS Data Engineer specializing in scalable cloud data pipelines,
                    ETL/ELT solutions, and real-time data processing.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-8 mb-32"
                >
                    <button
                        onClick={onContactClick}
                        className="px-12 py-6 bg-brand-cyan text-brand-bg font-black rounded-2xl hover:brightness-110 transition-all shadow-2xl shadow-brand-cyan/20 text-lg"
                    >
                        LET'S CONNECT
                    </button>
                    <a
                        href="#projects"
                        className="px-12 py-6 bg-transparent border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all text-lg flex items-center justify-center"
                    >
                        MY WORK
                    </a>

                    <div className="p-1.5 px-6 rounded-full bg-white/10 border border-white/10 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
                        <span className="text-xs font-black tracking-[0.2em] text-[#94a3b8]">PORTFOLIO 2026</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-white/5 pt-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            <div className="text-5xl md:text-6xl font-black text-white">{stat.value}</div>
                            <div className="text-xs text-gray-500 font-black tracking-widest uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
