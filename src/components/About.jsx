import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Monitor, RefreshCw, BarChart3, LineChart } from 'lucide-react';

const About = () => {
    const services = [
        {
            title: 'Cloud Data Engineering',
            description: 'Expert in designing scalable data pipelines using AWS services like S3, Redshift, Lambda, and Glue.',
            icon: <Database className="text-brand-cyan" size={24} />,
        },
        {
            title: 'ETL/ELT Development',
            description: 'Proficient in developing complex data transformation jobs using Python, Spark, and SQL.',
            icon: <Zap className="text-brand-cyan" size={24} />,
        },
        {
            title: 'Data Warehousing',
            description: 'Designing and maintaining centralized billing and accounting data warehouses with Snowflake.',
            icon: <Monitor className="text-brand-cyan" size={24} />,
        },
        {
            title: 'Database Migration',
            description: 'Modernizing infrastructure through seamless migrations using AWS DMS and Schema Conversion Tool.',
            icon: <RefreshCw className="text-brand-cyan" size={24} />,
        },
        {
            title: 'Data Visualization',
            description: 'Creating interactive dashboards using Power BI and Matplotlib for business insights.',
            icon: <BarChart3 className="text-brand-cyan" size={24} />,
        },
        {
            title: 'Performance Optimization',
            description: 'Expert in query optimization, indexing strategies, and database performance tuning.',
            icon: <LineChart className="text-brand-cyan" size={24} />,
        },
    ];

    return (
        <section id="about" className="section-spacing  relative overflow-hidden">
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
                        ABOUT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-10 max-w-2xl leading-tight">
                        Building Data Solutions <br />
                        That <span className="text-brand-cyan">Scale</span>
                    </h2>
                    <p className="text-[#94a3b8] text-lg max-w-3xl leading-relaxed font-medium">
                        AWS Data Engineer with 2.5 years of experience in designing, building, and maintaining scalable data pipelines
                        and cloud-based data solutions. Strong hands-on experience with AWS services such as S3, VPC, Glue, RDS,
                        Redshift, S3, Lambda, Kinesis, IAM, and QuickSight.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-brand-card border border-white/5 transition-all group hover:border-brand-cyan/20 relative overflow-hidden"
                        >
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/5 blur-3xl rounded-full group-hover:bg-brand-cyan/10 transition-colors" />
                            <div className="w-16 h-16 rounded-2xl bg-brand-cyan/5 flex items-center justify-center mb-8 group-hover:bg-brand-cyan/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                            <p className="text-[#94a3b8] leading-relaxed text-base font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
