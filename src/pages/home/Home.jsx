import React from "react";
import {
  BestServices,
  // BestPrice,
  FreightCalculate,
  Hero,
  OurExperience,
  ReachOut,
  ShipmentBook,
  OurTalent,
  RecentArticles,
  MobileApp
} from ".";
import JoinTheCrew from "./JoinTheCrew";

const Home = () => {
  return (
    <>
      <Hero />
      <BestServices />
      <FreightCalculate />
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
