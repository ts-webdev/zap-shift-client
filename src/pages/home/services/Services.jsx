import React from 'react';
import liveTracking from "../../../assets/live-tracking.png"
import safeDelivery from "../../../assets/safe-delivery.png"
const Services = () => {
    return (
        <section className='max-w-7xl mx-auto px-5'>
            <div className='border-y-2 border-dashed border-accent/50 py-20'>
                <div className='flex items-center gap-20 bg-white p-7 rounded-xl'>
                    <div className='border-r-2  border-dashed border-accent/50 pr-10'>
                        <img src={liveTracking} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-secondary mb-5'>Live Parcel Tracking</h2>
                        <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
                <div className='flex items-center gap-20 bg-white p-7 rounded-xl mt-10'>
                    <div className='border-r-2  border-dashed border-accent/50 pr-10'>
                        <img src={safeDelivery} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-secondary mb-5'>100% Safe Delivery</h2>
                        <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>
                <div className='flex items-center gap-20 bg-white p-7 rounded-xl mt-10'>
                    <div className='border-r-2  border-dashed border-accent/50 pr-10'>
                        <img src={safeDelivery} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-secondary mb-5'>24/7 Call Center Support</h2>
                        <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;