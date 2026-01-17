import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { icon: <Mail size={24} />, label: 'Email', value: 'manishpatel2250@gmail.com', href: 'mailto:manishpatel2250@gmail.com' },
        { icon: <Phone size={24} />, label: 'Phone', value: '+91 63917 75385', href: 'tel:+916391775385' },
        { icon: <MapPin size={24} />, label: 'Location', value: 'India', href: '#' },
    ];

    const socials = [
        { icon: <Linkedin size={24} />, label: 'LinkedIn', value: 'View Profile', href: 'https://www.linkedin.com/in/manish-patel-1a22151b3/' },
        { icon: <Github size={24} />, label: 'GitHub', value: 'View Repositories', href: 'https://github.com/Manish-094' },
        { icon: <Instagram size={24} />, label: 'Instagram', value: 'Follow Me', href: 'https://www.instagram.com/_manish_patel_007?igsh=MTZ6ejM1ZWNvbGpibQ%3D%3D&utm_source=qr' },
    ];

    return (
        <section id="contact" className="section-spacing relative overflow-hidden">
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
                        LET'S CONNECT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Let's <span className="text-brand-cyan underline underline-offset-[12px] decoration-brand-cyan/20">Connect</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[...contactInfo, ...socials].map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-brand-card border border-white/5 flex flex-col items-center text-center group transition-all hover:border-brand-cyan/20"
                        >
                            <div className="text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div className="text-[10px] font-black text-[#64748b] uppercase tracking-[0.2em] mb-2">{item.label}</div>
                            <div className="text-[10px] font-black text-white/50 group-hover:text-white transition-colors truncate w-full">{item.value}</div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
