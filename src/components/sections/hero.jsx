import { getImageUrl } from '../../utils/imagekit';

// ... other imports

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
            // ... (keep props)
            >
                <img
                    src="https://ik.imagekit.io/Sgd/LacosDEv/Ayii%20Nails/4?updatedAt=1770300924822"
                    alt="Elegant Nail Art"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
            </motion.div>

            {/* Content */}
            <Container className="relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Kuku Rapi, <br />
                        <span className="text-ayii-gold">Nyaman Dipakai,</span> <br />
                        Bikin Percaya Diri
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Nail art & home service dengan sentuhan profesional.
                        Tampil cantik tanpa harus keluar rumah.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a href="https://wa.me/6285747407104?text=Halo%20Ayii%20Nails%2C%20saya%20mau%20tanya%20info%20layanan%20dan%20booking." target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="w-full sm:w-auto text-lg">
                                Booking via WhatsApp
                            </Button>
                        </a>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto text-lg bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-ayii-dark"
                            onClick={() => {
                                const servicesSection = document.getElementById('services');
                                if (servicesSection) {
                                    const headerOffset = 100;
                                    const elementPosition = servicesSection.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        >
                            Lihat Harga
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;
