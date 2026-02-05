import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoColorPaletteOutline, IoLogoWhatsapp, IoHeartOutline } from 'react-icons/io5';

const steps = [
    {
        icon: <IoColorPaletteOutline />,
        title: "1. Pilih Layanan",
        description: "Cek katalog kami, pilih design nail art favoritmu atau konsultasikan custom design."
    },
    {
        icon: <IoLogoWhatsapp />,
        title: "2. Booking via WA",
        description: "Hubungi admin, tentukan jadwal, dan kirim alamat lengkapmu. Proses cepat & ramah!",
        isHighlight: true
    },
    {
        icon: <IoHeartOutline />,
        title: "3. Relax & Enjoy",
        description: "Duduk manis di rumah, terapis kami akan datang menyulap kukumu jadi cantik ✨"
    }
];

const HowItWorks = () => {
    return (
        <Section className="bg-ayii-white pb-0">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-ayii-dark mb-4">
                        Cara Booking Mudah
                    </h2>
                    <p className="text-ayii-text">
                        Ngapain ribet keluar rumah? Cukup 3 langkah simpel untuk kuku cantik.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-ayii-gold/30 to-transparent -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative bg-white pt-12 pb-8 px-6 rounded-3xl shadow-lg border border-ayii-beige text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`
                absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl transition-colors duration-300
                ${step.isHighlight ? 'bg-ayii-gold text-white' : 'bg-white text-ayii-gold border-2 border-ayii-gold/20 group-hover:border-ayii-gold'}
              `}>
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-serif font-bold text-ayii-dark mb-3 mt-2">
                                {step.title}
                            </h3>
                            <p className="text-ayii-text text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default HowItWorks;
