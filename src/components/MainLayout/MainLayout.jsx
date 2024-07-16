import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({children}) => {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>;
};

export default MainLayout;
