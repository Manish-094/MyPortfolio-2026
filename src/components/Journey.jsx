import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Journey = () => {
    const experiences = [
        {
            title: 'Data Engineer',
            company: 'Current Role',
            period: 'Jan 2023 - Present',
            points: [
                'Designed, developed, and maintained scalable data pipelines and cloud-based data solutions.',
                'Developed several ETL/ELT pipelines using AWS Glue and PySpark.',
                'Built data warehouse using AWS Redshift and performed complex analytical queries.',
                'Created dynamic dashboards using Power BI and Amazon QuickSight.',
                'Performed CDC and full data migration using AWS DMS and SCT.',
                'Optimized database performance through query tuning, indexing, and partitioning.',
                'Implemented data quality checks, cleansing, and validation techniques.',
                'Utilized version control and CI/CD deployment with Git and AWS CodePipeline.',
                'Delivered high-performance, production-ready data solutions meeting SLA requirements.',
            ],
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
                        JOURNEY
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Professional <span className="text-brand-cyan">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-12 md:p-16 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden group hover:border-brand-cyan/20 transition-all"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap justify-between items-end gap-8 mb-16 border-b border-white/5 pb-12">
                                    <div className="flex-1 min-w-[300px]">
                                        <div className="text-[10px] font-black tracking-[0.3em] text-brand-cyan uppercase mb-4">Current Position</div>
                                        <h3 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{exp.title}</h3>
                                        <div className="flex items-center gap-4 text-white/50 font-bold">
                                            <span>AWS DATA ENGINEER</span>
                                            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span>
                                            <span>REMOTE</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-black text-brand-cyan tracking-widest shadow-xl">
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
                                    {/* Column 1 */}
                                    <ul className="space-y-8">
                                        {exp.points.slice(0, 5).map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-5 group/item">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
                                                <span className="text-[#94a3b8] text-lg font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Column 2 */}
                                    <ul className="space-y-8">
                                        {exp.points.slice(5).map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-5 group/item">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
                                                <span className="text-[#94a3b8] text-lg font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
