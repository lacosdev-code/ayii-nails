import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Hero from '../components/sections/hero';
import ValueProps from '../components/sections/value-props';
import Services from '../components/sections/services';
import Portfolio from '../components/sections/portfolio';
import HomeService from '../components/sections/home-service';
import HowItWorks from '../components/sections/how-it-works';
import WhyChoose from '../components/sections/why-choose';
import Testimonials from '../components/sections/testimonials';
import Coverage from '../components/sections/coverage';
import FAQ from '../components/sections/faq';
import FinalCTA from '../components/sections/final-cta';
import FomoNotification from '../components/ui/fomo-notification';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ValueProps />
                <Services />
                <Portfolio />
                <HomeService />
                <HowItWorks />
                <WhyChoose />
                <Testimonials />
                <Coverage />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
            <FomoNotification />
        </>
    );
};

export default Home;
