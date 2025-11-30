import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../howItWorks/HowItWorks';
import OurServices from '../ourServices/OurServices';
import SalesTeams from '../salesTeams/SalesTeams';
import Services from '../services/Services';
import Reviews from '../reviews/Reviews';

const Home = () => {
    return (
        <main>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <SalesTeams/>
            <Services/>
            <Reviews/>
        </main>
    );
};

export default Home;