import React from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'Insurance Policy Management',
            description: 'A comprehensive insurance policy management system enabling agents to create, renew, and manage policies efficiently. Includes automated billing and renewal flows.',
            tags: ['AWS Oracle Database', 'AWS Databricks', 'Spark', 'Python', 'Git', 'SQL', 'Power BI'],
            achievements: [
                'Designed and maintained database systems for insurance policy data with focus on data integrity and security.',
                'Implemented Power BI for generating reports and insights.',
                'Created dynamic dashboards using Power BI for business reporting and analysis.',
            ],
        },
        {
            id: '02',
            title: 'Database Migration to AWS',
            description: 'Successfully led the migration of a production-grade Oracle database to AWS RDS using AWS Schema Conversion Tool (SCT) and AWS Database Migration Service (DMS).',
            tags: ['AWS SCT', 'AWS DMS', 'AWS S3', 'VPC', 'SQL', 'AWS IAM', 'AWS EC2 Metadata'],
            achievements: [
                'Used SCT for schema conversion of Oracle database to AWS RDS using AWS SCT and DMS.',
                'Configured AWS DMS tasks for initial load and ongoing replication.',
                'Verified migration performance using CloudWatch and DMS metric.',
            ],
        },
        {
            id: '03',
            title: 'RIB - Data Processing & Cloud Migration',
            description: 'Data processing pipeline converting multiple data formats to standardized CSV format using Python, followed by seamless migration to cloud infrastructure.',
            tags: ['Python', 'SQL', 'Git', 'Data Migration', 'Spark', 'SQL'],
            achievements: [
                'Revised database setup schemes like Star and Snowflake types in cloud applications.',
                'Developed several ETL/ELT pipelines using AWS Glue and PySpark.',
                'Documented and clarified code with various validation rules.',
            ],
        },
    ];

    return (
        <section id="projects" className="section-spacing  relative overflow-hidden">
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
                        CASE WORK
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Recent <span className="text-brand-cyan">Projects</span>
                    </h2>
                </motion.div>

                <div className="space-y-32 ">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7 }}
                            className="relative grid grid-cols-1  lg:grid-cols-12 gap-12"
                        >
                            <div className="lg:col-span-3">
                                <div className="text-8xl md:text-9xl font-black text-white/[0.05] leading-none mb-4 lg:mb-0">
                                    {project.id}
                                </div>
                            </div>

                            <div className="lg:col-span-9">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tight">{project.title}</h3>
                                    <div className="text-[10px] font-black text-brand-cyan px-3 py-1.5 border border-brand-cyan/20 rounded-lg tracking-widest uppercase bg-brand-cyan/5">
                                        CASE STUDY
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
                                    <div>
                                        <div className="text-[10px] font-black text-brand-cyan mb-6 tracking-widest uppercase flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span>
                                            Overview
                                        </div>
                                        <p className="text-[#94a3b8] text-lg leading-relaxed font-medium">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-brand-cyan mb-6 tracking-widest uppercase flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span>
                                            Technologies
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 text-xs font-bold text-white/70 bg-white/5 border border-white/10 rounded-xl hover:text-white hover:border-white/20 transition-all cursor-default"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-12 border-t border-white/5">
                                    <div className="text-[10px] font-black text-brand-cyan tracking-widest uppercase flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-brand-cyan"></span>
                                        Key Results
                                    </div>
                                    <ul className="grid grid-cols-1 gap-6 max-w-4xl">
                                        {project.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-4 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                                                <span className="text-[#94a3b8] text-lg font-medium leading-relaxed group-hover:text-white transition-colors">
                                                    {achievement}
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

export default Projects;
