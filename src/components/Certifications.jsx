import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Certified Data Engineer – Associate',
            issuer: 'Amazon Web Services',
            date: 'Oct 2023 - Oct 2026',
            icon: <Award className="text-brand-cyan" size={32} />,
        },
    ];

    return (
        <section className="section-spacing  relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-brand-cyan text-xs font-black tracking-[0.2em] mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                        CERTIFICATIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Certifications
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-brand-card border border-white/5 flex items-center gap-8 group hover:border-brand-cyan/20 transition-all"
                        >
                            <div className="w-16 h-16 rounded-xl bg-brand-cyan/5 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-2">{cert.title}</h3>
                                <div className="text-[10px] font-black tracking-widest text-[#64748b] uppercase">{cert.issuer} · {cert.date}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
