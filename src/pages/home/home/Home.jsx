import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../howItWorks/HowItWorks';
import OurServices from '../ourServices/OurServices';

const Home = () => {
    return (
        <main>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
        </main>
    );
};

export default Home;