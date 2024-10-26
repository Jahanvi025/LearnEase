import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Custom404() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const bounceAnimation = {
        y: [0, -20, 0],
        transition: {
            y: {
                repeat: Infinity,
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <motion.h1
                className="text-9xl font-bold text-black mb-8"
                animate={bounceAnimation}
            >
                404
            </motion.h1>
            <p className="text-2xl text-gray-800 mb-8">Oops! Page not found</p>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button
                    onClick={() => navigate('/')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`px-6 py-3 text-lg transition-colors duration-300 rounded ${
                        isHovered ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                >
                    Go Home
                </button>
            </motion.div>
        </div>
    );
}