import React from "react";
import {BestServices,BestPrice, FreightCalculate, Hero, OurExperience, ReachOut, ShipmentBook, OurTalent, RecentArticles} from ".";


const Home = () => {
  return <div>
    <Hero/>
    <BestServices/>
    <FreightCalculate/>
    <ReachOut/>
    <BestPrice/>
    <OurExperience/>
    <ShipmentBook/>
    <OurTalent/>
    <RecentArticles/>
  </div>;
};

export default Home;
