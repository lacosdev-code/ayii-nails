import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoLocationOutline, IoCarOutline } from 'react-icons/io5';

const HomeService = () => {
    return (
        <Section className="py-16">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="bg-gradient-to-br from-ayii-nude/40 to-ayii-blush/40 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 border border-ayii-nude shadow-xl"
                >
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-ayii-dark mb-4 flex items-center gap-3">
                            <IoCarOutline className="text-ayii-gold text-3xl" />
                            Info Home Service
                        </h3>
                        <p className="text-ayii-text mb-6 text-lg leading-relaxed">
                            Kami siap datang ke tempatmu. Nikmati perawatan kuku berkualitas salon tanpa harus keluar rumah.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md"
                        >
                            <IoLocationOutline className="text-ayii-gold text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-ayii-dark text-lg mb-1">Ongkir: 15k - 30k</p>
                                <p className="text-sm text-ayii-text/70 italic leading-relaxed">
                                    *Ongkir tergantung jarak, bisa lebih murah atau lebih mahal. Hubungi kami untuk cek ongkir ke lokasimu.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full md:w-1/3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80"
                            alt="Home Service"
                            className="w-full h-56 object-cover rounded-2xl shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default HomeService;
