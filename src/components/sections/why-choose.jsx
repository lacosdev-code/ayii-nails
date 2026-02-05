import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const reasons = [
    "Fokus kebersihan alat & detail pengerjaan",
    "Hasil rapi & nyaman dipakai beraktivitas",
    "Pilihan design modern & elegan",
    "Cocok untuk daily wear maupun event spesial",
    "Terapis ramah & profesional"
];

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const WhyChoose = () => {
    return (
        <Section className="bg-gradient-to-b from-ayii-white to-ayii-beige/20">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-ayii-dark mb-8"
                        >
                            Kenapa Memilih Ayii Nails?
                        </motion.h2>
                        <motion.div
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-4"
                        >
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-ayii-gold/10"
                                >
                                    <IoCheckmarkCircleOutline className="text-ayii-gold text-2xl flex-shrink-0 mt-0.5" />
                                    <p className="text-ayii-text font-medium leading-relaxed">{reason}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-ayii-gold/20 to-ayii-nude/20 rounded-t-full rounded-b-[10rem] transform rotate-6 blur-xl"></div>
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000&auto=format&fit=crop&q=80"
                                alt="Why Choose Ayii Nails"
                                className="relative z-10 w-full h-[500px] object-cover rounded-t-full rounded-b-[10rem] shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default WhyChoose;
