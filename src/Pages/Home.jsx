import React from 'react';
import HomeCard from '../Components/HomeCard';
import Banner from '../Components/Banner';
import FisrtStat from '../Components/FisrtStat';
import SecondStat from '../Components/SecondStat';
import HeroSection from '../Components/HeroSection';

const Home = () => {


    return (
        <div className='my-15'>
            <title>Home</title>
            {/* <Banner></Banner> */}

            <HeroSection></HeroSection>
            <HomeCard></HomeCard>
            <FisrtStat></FisrtStat>
            <SecondStat></SecondStat>
        </div>
    );
};

export default Home;