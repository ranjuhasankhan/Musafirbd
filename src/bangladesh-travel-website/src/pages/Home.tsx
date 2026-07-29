import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Destinations />
            <Footer />
        </div>
    );
};

export default Home;