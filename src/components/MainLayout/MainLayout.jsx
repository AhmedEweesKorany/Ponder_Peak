import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const MainLayout = ({Children}) => {
  return <div>
    <Navbar/>
    {Children}
    {/* <Footer/> */}
  </div>;
};

export default MainLayout;
