import { getImageUrl } from '../../utils/imagekit';

// ... other imports

const WhyChoose = () => {
    return (
        <Section className="bg-gradient-to-b from-ayii-white to-ayii-beige/20">
            {/* ... existing content ... */}
            <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                src={getImageUrl("why-choose.jpg", { width: 1000, quality: 80 })}
                alt="Why Choose Ayii Nails"
                className="relative z-10 w-full h-[500px] object-cover rounded-t-full rounded-b-[10rem] shadow-2xl"
            />
        </div>
                    </motion.div >
                </div >
            </Container >
        </Section >
    );
};

export default WhyChoose;
