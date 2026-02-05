import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/container';
import Button from '../ui/button';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-md py-1'
                : 'bg-transparent py-2'
                }`}
        >
            <Container className="flex items-center justify-between">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-center relative w-24 md:w-32 lg:w-40 h-10"
                >
                    <img
                        src="https://ik.imagekit.io/Sgd/LacosDEv/logo.png"
                        alt="Ayii Nails"
                        className="h-24 md:h-32 lg:h-40 w-auto object-contain absolute top-1/2 -translate-y-1/2 left-0"
                    />
                </motion.a>

                <a
                    href="https://wa.me/6285747407104?text=Halo%20Ayii%20Nails%2C%20saya%20mau%20tanya%20info%20layanan%20dan%20booking."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: [
                                "0px 0px 0px rgba(37, 211, 102, 0)",
                                "0px 0px 20px rgba(37, 211, 102, 0.5)",
                                "0px 0px 0px rgba(37, 211, 102, 0)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            relative overflow-hidden group rounded-full px-6 py-2.5 flex items-center gap-2 font-medium transition-all duration-300 border border-transparent
                            ${isScrolled
                                ? 'bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] bg-[length:200%_auto] animate-gradient text-white'
                                : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'}
                        `}
                    >
                        {/* Continuous Shine loop */}
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                        <IoLogoWhatsapp className={`text-xl ${isScrolled ? 'text-white' : 'text-[#25D366] drop-shadow-md'} relative z-10`} />
                        <span className="hidden sm:inline relative z-10 tracking-wide font-semibold">Hubungi Kami</span>
                        <span className="sm:hidden relative z-10 font-bold">Chat</span>

                        {/* Enhanced Online Dot */}
                        <span className="flex h-3 w-3 relative ml-1 z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                        </span>
                    </motion.button>
                </a>
            </Container>
        </motion.header>
    );
};

export default Header;
