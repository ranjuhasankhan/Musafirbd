import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Explore the Beauty of Bangladesh</h1>
                <p>Join us on an unforgettable journey through the lush landscapes, vibrant culture, and rich history of Bangladesh.</p>
                <a href="#destinations" className="cta-button">Discover More</a>
            </div>
            <div className="hero-image">
                <img src="/path/to/your/image.jpg" alt="Beautiful landscape of Bangladesh" />
            </div>
        </div>
    );
};

export default Hero;