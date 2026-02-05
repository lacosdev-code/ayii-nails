import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoStar } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';
import image1 from '../../assets/images/testimonials/javanese_woman_1.png';
import image2 from '../../assets/images/testimonials/javanese_woman_2.png';
import image3 from '../../assets/images/testimonials/javanese_woman_3.png';

const reviews = [
    {
        name: "Bu Sri",
        role: "Juragan Beras, Pasar Kroya",
        image: image3,
        rating: 5,
        text: "Jan apik tenan asile! Kuku dadi resik, kinclong. Mbake sing nggarap alus banget, ora lara babar blas. Maturnuwun ya Mbak Ayii."
    },
    {
        name: "Mbak Siti",
        role: "Mahasiswi, Adipala",
        image: image2,
        rating: 4,
        text: "Seneng banget bisa nail art cantik tanpa harus ke kota. Harganya ramah, hasilnya rapi walaupun nunggunya agak antri. Tapi overall puas!"
    },
    {
        name: "Yu Darmi",
        role: "Ibu Rumah Tangga, Karangpucung",
        image: image1,
        rating: 5,
        text: "Penak banget bisa dipanggil ke rumah. Aku ndak perlu ninggal anak, kuku tetep bisa cetar. Tanggane pada takon kabeh nail art nang endi."
    }
];

const Testimonials = () => {
    return (
        <Section className="bg-ayii-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ayii-nude/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-ayii-beige/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-ayii-dark mb-4"
                    >
                        Kata Mereka Tentang <span className="text-ayii-gold">Ayii Nails</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-ayii-text text-lg"
                    >
                        Kepuasan pelanggan adalah prioritas kami. Lihat pengalaman mereka menggunakan layanan nail art kami.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-ayii-beige/50 relative group"
                        >
                            <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-ayii-nude/40 group-hover:text-ayii-gold/20 transition-colors" />

                            <div className="flex items-center gap-1 mb-4 text-ayii-gold">
                                {[...Array(review.rating)].map((_, i) => (
                                    <IoStar key={i} className="text-lg" />
                                ))}
                            </div>

                            <p className="text-ayii-text mb-6 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-ayii-gold/20"
                                />
                                <div>
                                    <h4 className="font-serif font-bold text-ayii-dark text-lg">{review.name}</h4>
                                    <p className="text-sm text-ayii-text/60">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Testimonials;
