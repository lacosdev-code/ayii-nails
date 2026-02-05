import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/container';
import Section from '../ui/section';
import { IoAdd, IoRemove, IoHelpCircleOutline } from 'react-icons/io5';

const faqs = [
    {
        question: "Apakah alat yang digunakan steril?",
        answer: "Tentu saja! Kehigienisan adalah prioritas utama kami. Semua alat metal disterilkan dengan autoclave grade medis dan kami menggunakan kikir kuku sekali pakai atau disanitasi menyeluruh untuk setiap pelanggan."
    },
    {
        question: "Home Service ada biaya tambahan transportasi?",
        answer: "Untuk area dalam kota Cilacap (radius tertentu) GRATIS biaya transport. Untuk area yang agak jauh (seperti tercantum di list Coverage), mungkin ada sedikit biaya tambahan bensin yang sangat terjangkau. Silakan chat admin untuk cek ongkir ke lokasimu."
    },
    {
        question: "Berapa lama ketahanan Nail Art-nya?",
        answer: "Dengan perawatan yang wajar, Gel Polish kami bisa tahan 3-4 minggu tanpa chip (mengelupas). Kami menggunakan base coat dan top coat premium untuk memastikan hasil yang awet dan berkilau."
    },
    {
        question: "Harus booking dari H-berapa?",
        answer: "Kami sarankan booking minimal H-1 atau H-2 untuk mengamankan slot waktu yang kamu mau, terutama untuk weekend. Tapi kalau lagi ada slot kosong, booking hari H juga bisa kok! Chat aja dulu ya."
    },
    {
        question: "Bisa request design dari foto Pinterest/Instagram?",
        answer: "Bisa banget! Kirimkan saja foto referensi design yang kamu mau ke WhatsApp kami. Tim kami akan mengestimasi harga dan mengkonfirmasi apakah bisa mengerjakannya (biasanya 95% bisa miripin!)."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className={`border-b border-ayii-beige last:border-0 ${isOpen ? 'bg-ayii-white/50 rounded-2xl border-none my-2' : ''}`}
        >
            <button
                onClick={onClick}
                className="w-full py-6 px-4 flex items-center justify-between text-left focus:outline-none"
            >
                <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-ayii-gold font-bold' : 'text-ayii-dark'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 text-2xl transition-all duration-300 ${isOpen ? 'text-ayii-gold rotate-180' : 'text-ayii-text/50'}`}>
                    {isOpen ? <IoRemove /> : <IoAdd />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-6 text-ayii-text leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <Section className="bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Header Section */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <div className="w-16 h-16 bg-ayii-nude/20 rounded-2xl flex items-center justify-center text-ayii-gold text-3xl mb-6">
                                <IoHelpCircleOutline />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ayii-dark mb-4">
                                Pertanyaan Umum
                            </h2>
                            <p className="text-ayii-text text-lg mb-8">
                                Masih ragu atau ada yang kurang jelas? Cek pertanyaan yang paling sering ditanyakan customer kami di sini.
                            </p>
                            <a
                                href="https://wa.me/6285747407104?text=Halo%20Ayii%20Nails%2C%20ada%20pertanyaan%20lain%20yang%20belum%20ada%20di%20FAQ%20nih..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-ayii-gold font-medium hover:underline hover:text-ayii-gold/80 transition-colors"
                            >
                                Masih punya pertanyaan lain? Chat kami &rarr;
                            </a>
                        </motion.div>
                    </div>

                    {/* FAQ List */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-3xl p-2"
                        >
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FAQ;
