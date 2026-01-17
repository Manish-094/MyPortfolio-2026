import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GridBackground = ({ children }) => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springing for the spotlight
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    // Radial gradient string for the spotlight
    const spotlightGradient = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(20, 184, 166, 0.12), transparent 80%)`
    );

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen  select-none"
        >
            {/* Interactive Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Fixed Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Interactive Spotlight Effect */}
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        background: spotlightGradient
                    }}
                />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GridBackground;
