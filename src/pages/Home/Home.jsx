import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./Container/Hero";
import Articles from "./Container/Articles";
import CTA from "./Container/CTA";


const Home = () => {
  return <MainLayout>
    <Hero/>
    <Articles/>
    <CTA/>
  </MainLayout>
};

export default Home;
