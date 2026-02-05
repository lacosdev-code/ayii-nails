import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import Button from '../ui/button';

const FinalCTA = () => {
    return (
        <Section className="bg-gradient-to-br from-ayii-dark via-ayii-dark to-ayii-taupe text-white py-32 md:py-40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-ayii-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-ayii-nude rounded-full blur-3xl"></div>
            </div>

            <Container className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-white">
                        Siap Tampil Lebih{' '}
                        <span className="text-ayii-nude">Percaya Diri?</span>
                    </h2>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Booking slotmu sekarang sebelum penuh. Rasakan pengalaman nail art premium dari Ayii Nails.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <a href="https://wa.me/6285747407104?text=Halo%20Ayii%20Nails%2C%20saya%20mau%20tanya%20info%20layanan%20dan%20booking." target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-ayii-gold/30">
                                Chat WhatsApp Sekarang
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default FinalCTA;
