import React from "react";
import {
  BestServices,
  // BestPrice,
  FreightCalculate,
  Hero, JoinTheCrew, MobileApp, OurExperience, OurServices, OurTalent, ReachOut, RecentArticles, ShipmentBook, WeDeliver
} from ".";


const Home = () => {
  return (
    <>
      <Hero />
      <BestServices />
      <FreightCalculate />
      <OurServices/>
      <WeDeliver/>
      <MobileApp/>
      <JoinTheCrew/>
      <ReachOut />
      {/* <BestPrice /> */}
      <OurExperience />
      <ShipmentBook />
      <OurTalent />
      <RecentArticles />
    </>
  );
};

export default Home;
