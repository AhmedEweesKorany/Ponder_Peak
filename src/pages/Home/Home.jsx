import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./Container/Hero";
import Articles from "./Container/Articles";

const Home = () => {
  return <MainLayout>
    <Hero/>
    <Articles/>
  </MainLayout>
};

export default Home;
