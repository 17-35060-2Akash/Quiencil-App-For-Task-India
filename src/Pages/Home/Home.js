import React from 'react';
import Alumni from './Alumni';
import CaseStudies from './CaseStudies';
import Founder from './Founder';
import JoinQuencil from './JoinQuencil';
import Placements from './Placements';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Founder></Founder>
            <CaseStudies></CaseStudies>
            <JoinQuencil></JoinQuencil>
            <Alumni></Alumni>
            <Placements></Placements>
        </div>
    );
};

export default Home;