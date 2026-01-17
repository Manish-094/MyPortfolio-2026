import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
    const stack = [
        {
            category: 'Programming Languages',
            items: ['SQL', 'Python', 'PySpark', 'C', 'C++'],
        },
        {
            category: 'Cloud Platforms',
            items: [
                'AWS S3', 'AWS Glue', 'AWS IAM', 'AWS RDS', 'Redshift', 'AWS EC2',
                'AWS Lambda', 'AWS SNS', 'AWS Kinesis', 'AWS SCT', 'DMS',
            ],
        },
        {
            category: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'Snowflake'],
        },
        {
            category: 'Data & AI Tools',
            items: ['Power BI', 'Advanced Tableau', 'Matplotlib', 'Microsoft Fabric', 'QuickSight'],
        },
        {
            category: 'Data Modeling',
            items: ['Dimensional Modeling', 'Star Schema', 'Snowflake Schema'],
        },
        {
            category: 'DevOps & Version Control',
            items: ['Git', 'AWS CodePipeline', 'AWS CodeCommit', 'CI/CD'],
        },
        {
            category: 'Methodologies',
            items: ['Agile', 'ETL/ELT Pipelines', 'Data Warehousing', 'SCRUM'],
        },
    ];

    return (
        <section id="skills" className="section-spacing  relative overflow-hidden">
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
                        STACKS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Technology <span className="text-brand-cyan">Stack</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-brand-card border border-white/5 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 text-[10px] font-black text-brand-cyan mb-6 tracking-widest uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                                {group.category}
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs font-bold text-[#64748b] hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
