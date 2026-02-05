import React from 'react';

const Container = ({ children, className = '' }) => {
    return (
        <div className={`container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
