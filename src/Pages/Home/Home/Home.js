import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

                        
                <TopHeader></TopHeader>
                <Navigation></Navigation>
                <Banner></Banner>
                <Services></Services>
                <About></About>
                <Reviews></Reviews>
                <Footer></Footer>
        </div>

    );
};

export default Home;