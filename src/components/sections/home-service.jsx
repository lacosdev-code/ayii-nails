import { getImageUrl } from '../../utils/imagekit';

// ... other imports

const HomeService = () => {
    return (
        <Section className="py-16">
            <Container>
                {/* ... existing content ... */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full md:w-1/3"
                >
                    <img
                        src={getImageUrl("home-service.jpg", { width: 800, quality: 80 })}
                        alt="Home Service"
                        className="w-full h-56 object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>
            </motion.div>
        </Container>
        </Section >
    );
};
                </motion.div >
            </Container >
        </Section >
    );
};

export default HomeService;
