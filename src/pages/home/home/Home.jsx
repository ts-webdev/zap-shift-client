import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../howItWorks/HowItWorks';
import OurServices from '../ourServices/OurServices';
import SalesTeams from '../salesTeams/SalesTeams';
import Services from '../services/Services';

const Home = () => {
    return (
        <main>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <SalesTeams/>
            <Services/>
        </main>
    );
};

export default Home;