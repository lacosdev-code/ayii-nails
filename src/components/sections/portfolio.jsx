import { getImageUrl } from '../../utils/imagekit';

// ... other imports

const images = [
    getImageUrl("portfolio-1.jpg", { width: 800, quality: 80 }),
    getImageUrl("portfolio-2.jpg", { width: 800, quality: 80 }),
    getImageUrl("portfolio-3.jpg", { width: 800, quality: 80 }),
    getImageUrl("portfolio-4.jpg", { width: 800, quality: 80 }),
    getImageUrl("portfolio-5.jpg", { width: 800, quality: 80 }),
    getImageUrl("portfolio-6.jpg", { width: 800, quality: 80 })
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const Portfolio = () => {
    return (
        <Section id="portfolio" className="bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-ayii-dark mb-4">Hasil Karya</h2>
                    <p className="text-ayii-text max-w-2xl mx-auto text-lg">
                        Portofolio terbaru kami. Fokus pada detail, kerapihan, dan kebersihan.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            className="group relative overflow-hidden rounded-3xl aspect-square md:aspect-[3/4] shadow-md hover:shadow-2xl transition-shadow"
                        >
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};

export default Portfolio;
