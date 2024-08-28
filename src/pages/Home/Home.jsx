import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./Container/Hero";
import Articles from "./Container/Articles";
import CTA from "./Container/CTA";
import TourGuied from "../../components/TourGuied/TourGuied";
import { driver } from "driver.js";
const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '#ddd', popover: { title: 'Header', description: 'This is our hero section header' } },
    { element: '#ppp', popover: { title: 'description', description: 'this is our hero section description' } },
    { element: '#contact', popover: { title: 'Contact US Now', description: 'Enter your email to contacct us' } },
  ]
});


const Home = () => {
  return <MainLayout>
    <TourGuied driverObj={driverObj}/>

    <Hero/>
    <Articles/>
    <CTA/>
  </MainLayout>
};

export default Home;
