import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoLocationOutline, IoStarOutline, IoPeopleOutline } from 'react-icons/io5';

const coverageAreas = [
    "Tambaksari (Lokasi Pasar Blundeng)",
    "Kedungreja",
    "Bangunreja",
    "Ciklapa",
    "Rejamulya",
    "Sidanegara",
    "Bumireja",
    "Kaliworo",
    "Jatisari",
    "Tambakreja",
    "Boongsari"
];

const stats = [
    { icon: <IoPeopleOutline />, value: "500+", label: "Pelanggan Puas" },
    { icon: <IoStarOutline />, value: "4.9/5", label: "Rating Google" },
    { icon: <IoLocationOutline />, value: "11+", label: "Area Jangkauan" }
];

const Coverage = () => {
    return (
        <Section className="bg-gradient-to-b from-ayii-white to-ayii-beige/30">
            <Container>
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-3 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -4 }}
                            className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="text-4xl text-ayii-gold mb-3 flex justify-center">
                                {stat.icon}
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-ayii-dark font-serif mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-ayii-text/70">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Coverage Areas */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ayii-dark mb-4">
                            Melayani Area <span className="text-ayii-gold">Cilacap & Sekitarnya</span>
                        </h2>
                        <p className="text-ayii-text mb-8 text-lg leading-relaxed">
                            Kami siap datang ke lokasimu! Cek apakah area kamu termasuk dalam jangkauan layanan home service premium kami:
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {coverageAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#C9A27E", color: "#ffffff" }}
                                    className="px-5 py-2.5 rounded-full bg-white border border-ayii-gold/20 text-ayii-text text-sm font-medium shadow-sm cursor-default transition-colors duration-300"
                                >
                                    {area}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-ayii-nude/20 backdrop-blur-md border border-ayii-gold/20 rounded-2xl p-6 flex items-start gap-4"
                        >
                            <div className="p-3 bg-ayii-gold/10 rounded-full text-ayii-gold text-xl">
                                <IoLocationOutline />
                            </div>
                            <div>
                                <h4 className="text-ayii-dark font-bold mb-1">
                                    Area kamu belum ada di list?
                                </h4>
                                <p className="text-ayii-text text-sm leading-relaxed">
                                    Tenang! Hubungi kami via WhatsApp untuk cek ongkir. Kami fleksibel untuk area lain di sekitar eks-distrik Kroya & Sidareja.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Google Maps Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <h3 className="text-xl font-serif font-bold text-ayii-dark mb-4 flex items-center gap-2">
                                <IoStarOutline className="text-ayii-gold text-2xl" />
                                Lihat Review Kami di Google Maps
                            </h3>

                            <a
                                href="https://maps.app.goo.gl/bHaf6XsULed6edzH8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative overflow-hidden rounded-2xl border-2 border-ayii-gold/20 hover:border-ayii-gold/40 transition-all"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d109.0!3d-7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMDAuMCJTIDEwOcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-gradient-to-t from-ayii-dark/20 to-transparent pointer-events-none"></div>
                                </motion.div>
                            </a>

                            <motion.a
                                href="https://maps.app.goo.gl/bHaf6XsULed6edzH8"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="mt-4 block text-center bg-ayii-gold text-white py-3 px-6 rounded-full font-semibold hover:bg-ayii-gold/90 transition-all shadow-lg"
                            >
                                Buka di Google Maps
                            </motion.a>

                            <p className="text-xs text-ayii-text/60 text-center mt-4">
                                ⭐ Baca testimoni dari ratusan pelanggan kami yang puas!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Coverage;
