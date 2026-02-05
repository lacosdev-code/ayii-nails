import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';

const notifications = [
    { name: "Siti", area: "Tambaksari", action: "bertanya tentang harga nail art" },
    { name: "Rina", area: "Kedungreja", action: "booking slot untuk besok" },
    { name: "Dewi", area: "Bangunreja", action: "menanyakan home service" },
    { name: "Ayu", area: "Ciklapa", action: "bertanya tentang design custom" },
    { name: "Maya", area: "Rejamulya", action: "booking untuk acara weekend" },
    { name: "Fitri", area: "Sidanegara", action: "menanyakan ongkir ke lokasi" },
    { name: "Dina", area: "Bumireja", action: "bertanya tentang cat eye" },
    { name: "Lina", area: "Kaliworo", action: "booking slot hari ini" },
    { name: "Sari", area: "Jatisari", action: "menanyakan nail extension" },
    { name: "Novi", area: "Tambakreja", action: "bertanya tentang promo" },
    { name: "Tika", area: "Boongsari", action: "booking untuk event" }
];

const FomoNotification = () => {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        if (isDismissed) return;

        const showNotification = () => {
            const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
            setCurrentNotification(randomNotif);
            setIsVisible(true);

            // Hide after 7 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 7000);
        };

        // Show first notification after 30 seconds
        const initialTimeout = setTimeout(showNotification, 30000);

        // Show new notification every 45-90 seconds
        const interval = setInterval(() => {
            showNotification();
        }, Math.random() * 45000 + 45000); // Random between 45-90 seconds

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
    };

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-4 right-4 z-50 max-w-[300px]"
                >
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-[#25D366] p-3 pr-8 relative overflow-hidden flex items-center gap-3">

                        {/* Close button - smaller */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-1 right-1 text-gray-300 hover:text-gray-500 transition-colors"
                        >
                            <IoCloseOutline className="text-lg" />
                        </button>

                        {/* Avatar / WhatsApp Logo - Compact */}
                        <div className="relative flex-shrink-0">
                            <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                <span className="font-bold text-gray-400 text-xs">{currentNotification.name.charAt(0)}</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                <div className="bg-[#25D366] rounded-full p-0.5 text-white">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M414.73 97.1A222.14 222.14 0 00257.66 32C136.16 32 37.13 131.62 37.14 254.55a222.08 222.08 0 0029.09 107.56l-31 113.3 113.43-30.8a221.72 221.72 0 00108.95 28.52h.1a224.28 224.28 0 00224.28-223.16 220.88 220.88 0 00-67.26-152.86zM257.66 426.68h-.08a183.1 183.1 0 01-94.22-26.23l-6.7-4-69.59 18.23 18.57-67.89-4.38-6.99A183.74 183.74 0 0153.21 254.55c0-101.48 82.5-184 183.92-184a183.13 183.13 0 01130.43 54.1 185.17 185.17 0 0154 130.87c0 101.66-82.52 184.16-163.9 184.16zm100.82-95.21c-5.52-2.77-32.74-16.14-37.81-18-5.06-1.85-8.75-2.77-12.44 2.77-3.69 5.53-14.28 17.99-17.51 21.68-3.23 3.69-6.45 4.15-11.98 1.38-5.53-2.77-23.34-8.62-44.47-27.46-16.5-14.73-27.64-32.93-30.87-38.46-3.23-5.53-.35-8.52 2.41-11.27 2.49-2.49 5.53-6.45 8.3-9.68 2.76-3.23 3.69-5.53 5.53-9.23 1.84-3.69.92-6.92-.46-9.69-1.38-2.77-12.44-30-17.05-41.06-4.49-10.78-9.07-9.32-12.44-9.5-3.23-.17-6.92-.17-10.6-.17-3.69 0-9.68 1.39-14.75 6.92-5.07 5.54-19.35 18.92-19.35 46.13 0 27.22 19.81 53.52 22.58 57.21 2.77 3.69 77.29 118 107.56 131.06 72.03 31.08 72.03 20.73 85.86 19.29 13.82-1.44 32.74-13.4 37.35-26.35 4.61-12.95 4.61-24 3.23-26.35-1.39-2.32-5.07-3.7-10.6-6.47z"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Text Content - Minimalist */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                                <p className="text-xs text-gray-800 font-semibold truncate pr-2">
                                    {currentNotification.name} <span className="text-gray-400 font-normal">from {currentNotification.area}</span>
                                </p>
                                {/* Online Indicator inline */}
                                <div className="flex items-center gap-1 flex-shrink-0">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#25D366]"></span>
                                    </span>
                                </div>
                            </div>

                            <p className="text-[10px] text-gray-500 truncate leading-tight">
                                {currentNotification.action}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FomoNotification;
