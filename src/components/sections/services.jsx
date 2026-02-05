import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';

const PriceItem = ({ name, price }) => (
    <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex justify-between items-center py-4 border-b border-ayii-gold/10 last:border-0 hover:bg-ayii-nude/20 transition-colors px-4 rounded-xl"
    >
        <span className="text-ayii-text font-medium">{name}</span>
        <span className="text-ayii-gold font-bold font-serif text-lg">{price}</span>
    </motion.div>
);

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const Services = () => {
    return (
        <Section id="services" className="bg-gradient-to-b from-ayii-beige/30 to-ayii-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-ayii-dark mb-4">Pilihan Layanan</h2>
                    <p className="text-ayii-text max-w-2xl mx-auto text-lg">
                        Harga terjangkau dengan kualitas premium. Pilih layanan sesuai kebutuhan kukumu.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card Kuku Asli */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-ayii-gold"
                    >
                        <h3 className="text-2xl font-serif font-bold text-center mb-8 text-ayii-dark">Kuku Asli</h3>
                        <div className="space-y-2">
                            <PriceItem name="Nail Polos" price="35k" />
                            <PriceItem name="Cat Eye" price="40k" />
                            <PriceItem name="Nail Art Design" price="Mulai 50k" />
                            <PriceItem name="Aksesoris" price="1k - 5k" />
                        </div>
                    </motion.div>

                    {/* Card Extension */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-ayii-taupe"
                    >
                        <h3 className="text-2xl font-serif font-bold text-center mb-8 text-ayii-dark">Kuku Extension</h3>
                        <div className="space-y-2">
                            <PriceItem name="Nail Polos" price="50k" />
                            <PriceItem name="Nail Cat Eye" price="60k" />
                            <PriceItem name="Nail Design" price="70k" />
                            <PriceItem name="Aksesoris" price="1k - 5k" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Services;
