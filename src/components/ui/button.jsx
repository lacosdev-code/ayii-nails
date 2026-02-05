import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform active:scale-95';

    const variants = {
        primary: 'bg-ayii-gold text-white shadow-lg shadow-ayii-gold/30 hover:shadow-xl hover:shadow-ayii-gold/40 hover:-translate-y-0.5',
        secondary: 'bg-ayii-nude text-ayii-dark shadow-md hover:shadow-lg hover:-translate-y-0.5',
        outline: 'border-2 border-ayii-gold text-ayii-gold hover:bg-ayii-gold hover:text-white shadow-sm hover:shadow-md',
        whatsapp: 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
