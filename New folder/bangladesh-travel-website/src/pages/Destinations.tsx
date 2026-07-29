import React from 'react';
import Card from '../components/Card';

const destinations = [
    {
        id: 1,
        name: 'Sundarbans',
        description: 'The largest mangrove forest in the world, home to the Royal Bengal Tiger.',
        image: 'path/to/sundarbans.jpg'
    },
    {
        id: 2,
        name: 'Cox\'s Bazar',
        description: 'Famous for having the longest natural sea beach in the world.',
        image: 'path/to/coxs-bazar.jpg'
    },
    {
        id: 3,
        name: 'Srimangal',
        description: 'Known as the tea capital of Bangladesh, surrounded by lush green tea gardens.',
        image: 'path/to/srimangal.jpg'
    },
    {
        id: 4,
        name: 'Rangamati',
        description: 'A beautiful hill district with stunning landscapes and tribal culture.',
        image: 'path/to/rangamati.jpg'
    }
];

const Destinations: React.FC = () => {
    return (
        <div className="destinations">
            <h1>Travel Destinations in Bangladesh</h1>
            <div className="destination-list">
                {destinations.map(destination => (
                    <Card key={destination.id} title={destination.name} description={destination.description} image={destination.image} />
                ))}
            </div>
        </div>
    );
};

export default Destinations;