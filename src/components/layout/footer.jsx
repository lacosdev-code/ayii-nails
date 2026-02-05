import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-ayii-beige/30 to-ayii-beige/50 py-16 border-t border-ayii-gold/10">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left"
                >
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-ayii-gold mb-3">Ayii Nails</h3>
                        <p className="text-ayii-text/70 text-sm md:text-base max-w-xs leading-relaxed">
                            Premium nail art & home service. Kuku rapi, nyaman dipakai, bikin percaya diri.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <motion.a
                            href="https://wa.me/6285747407104?text=Halo%20Ayii%20Nails%2C%20saya%20mau%20tanya%20info%20layanan%20dan%20booking."
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="flex items-center gap-3 text-ayii-text hover:text-ayii-gold transition-colors text-lg font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoWhatsapp className="text-2xl" />
                            <span>0857 4740 7104</span>
                        </motion.a>
                        <p className="text-xs text-ayii-text/50">
                            &copy; {currentYear} Ayii Nails. All rights reserved. | Made by{' '}
                            <a
                                href="https://lacosdev.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-ayii-gold transition-colors"
                            >
                                lacosdev.com
                            </a>
                        </p>
                    </div>
                </motion.div>
            </Container>
        </footer>
    );
};

export default Footer;
