import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Bangladesh Travel. All rights reserved.</p>
            <div>
                <a href="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
                <a href="/destinations" style={{ color: 'white', margin: '0 10px' }}>Destinations</a>
                <a href="/" style={{ color: 'white', margin: '0 10px' }}>Home</a>
            </div>
        </footer>
    );
};

export default Footer;