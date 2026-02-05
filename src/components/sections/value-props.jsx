import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoSparklesOutline, IoBrushOutline, IoHomeOutline } from 'react-icons/io5';

const features = [
    {
        icon: <IoSparklesOutline />,
        title: "Rapi & Teliti",
        description: "Pengerjaan detail dengan hasil yang presisi dan tahan lama."
    },
    {
        icon: <IoBrushOutline />,
        title: "Custom Design",
        description: "Bisa request design sesuai selera dan gaya pribadimu."
    },
    {
        icon: <IoHomeOutline />,
        title: "Home Service",
        description: "Layanan panggil ke rumah. Hemat waktu dan tenaga."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const ValueProps = () => {
    return (
        <Section className="bg-ayii-white relative z-20 -mt-10 md:-mt-20 rounded-t-[2.5rem] shadow-2xl">
            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-ayii-gold/10"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="w-20 h-20 rounded-full bg-gradient-to-br from-ayii-nude/60 to-ayii-blush/60 flex items-center justify-center text-3xl text-ayii-gold mb-6 shadow-md"
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-serif font-semibold mb-3 text-ayii-dark">{feature.title}</h3>
                            <p className="text-ayii-text leading-relaxed font-light">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};

export default ValueProps;
