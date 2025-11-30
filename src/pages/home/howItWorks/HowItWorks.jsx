import React from 'react';

const cardsData = [
  {
    id: 1,
    title: "Book Your Delivery",
    description: "Enter pickup and drop-off details and choose your preferred delivery option.",
    icon: "📝"
  },
  {
    id: 2,
    title: "We Pick It Up",
    description: "A nearby courier partner collects the package from your location.",
    icon: "📦"
  },
  {
    id: 3,
    title: "Real-Time Tracking",
    description: "Track your parcel live until it reaches the destination.",
    icon: "📍"
  },
  {
    id: 4,
    title: "Delivered Safely",
    description: "Your package is delivered securely and on time — guaranteed!",
    icon: "🚚"
  }
];


const HowItWorks = () => {
    return (
        <section className='max-w-7xl mx-auto px-5 my-10'>
            <h2 className='text-secondary font-bold text-3xl'>How it works</h2>
            {/* cards container*/}
            <div className='grid grid-cols-4 gap-5 mt-7'>
                {
                    cardsData.map(card => {
                        return <div key={card.id} className='bg-white hover:bg-accent/10 p-7 rounded-lg'>
                            <p className='text-3xl '>{card.icon}</p>
                           <h3 className='text-xl font-bold my-5'>{card.title}</h3>
                           <p>{card.description}</p>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default HowItWorks;