import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-brand-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Side: Contact Info */}
                            <div className="p-8 md:p-12 bg-brand-cyan/5 border-r border-white/5">
                                <div className="text-brand-cyan text-xs font-black tracking-widest uppercase mb-4">Contact Me</div>
                                <h3 className="text-3xl font-black mb-8 text-white">Let's build <br /> something <span className="text-brand-cyan">great</span></h3>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-bg transition-all">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Email</div>
                                            <div className="text-sm font-bold text-white">manishpatel2250@gmail.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-bg transition-all">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Phone</div>
                                            <div className="text-sm font-bold text-white">+91 63917 75385</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-4">Social Connect</div>
                                    <div className="flex gap-4">
                                        {[
                                            { Icon: Linkedin, href: 'https://www.linkedin.com/in/manish-patel-1a22151b3/', label: 'LinkedIn' },
                                            { Icon: Github, href: 'https://github.com/Manish-094', label: 'GitHub' },
                                            { Icon: Instagram, href: 'https://www.instagram.com/_manish_patel_007?igsh=MTZ6ejM1ZWNvbGpibQ%3D%3D&utm_source=qr', label: 'Instagram' }
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={social.label}
                                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-all"
                                            >
                                                <social.Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="p-8 md:p-12">
                                <form className="space-y-6">
                                    <div>
                                        <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-cyan/50 focus:outline-none transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-cyan/50 focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-cyan/50 focus:outline-none transition-colors resize-none"
                                            placeholder="How can I help?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full bg-brand-cyan text-brand-bg font-black py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-brand-cyan/20"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
