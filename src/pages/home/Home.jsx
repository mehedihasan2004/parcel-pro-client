import React from "react";
import {
  BestServices,
  BestPrice,
  FreightCalculate,
  Hero,
  OurExperience,
  ReachOut,
  ShipmentBook,
  OurTalent,
  RecentArticles,
} from ".";
import JoinTheCrew from "./JoinTheCrew";

const Home = () => {
  return (
    <>
      <Hero />
      <JoinTheCrew></JoinTheCrew>
      <BestServices />
      <FreightCalculate />
      <ReachOut />
      <BestPrice />
      <OurExperience />
      <ShipmentBook />
      <OurTalent />
      <RecentArticles />
    </>
  );
};

export default Home;
