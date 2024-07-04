import React, { useContext } from "react";
import { Data, images } from "../../constants";
import { Link } from "react-router-dom";
import NavITem from "../NavItem/NavITem";
import { DarkModeContext } from "../../store";
import UseResponsiveNav from "../../hooks/UseResponsiveNav";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
/* The code snippet you provided is a React functional component for a Navbar. */
  const [DarkMode, setDarkMode] = useContext(DarkModeContext);
  const { isNavVisible, toggleNav } = UseResponsiveNav();

  return (
    <section>
      <header className="flex items-center justify-between py-6 px-10 sm:px-6">
        <div>
          <img
            src={DarkMode ? images.darkmodeLogo : images.logo}
            className="w-20"
            alt="logo"
          />{" "}
        </div>
        <div  className="cursor-pointer z-50 lg:hidden">
          {isNavVisible ? <AiOutlineClose onClick={toggleNav}  className="w-6 h-6 "/> :
           <AiOutlineMenu  onClick={toggleNav} className="w-6 h-6" />}
        </div>
        <div
          className={`${
            isNavVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[137px] lg:mt-0 bg-green-900 dark:bg-gray-900 lg:bg-transparent text-white dark:text-white lg:text-black z-[39] w-full lg-w-auto flex flex-col justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0  lg:static items-center gap-y-9 lg:gap-x-9`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-4 font-semibold tracking-wider">
            {Data.NavInfo.map((item, i) => {
           return   item.type === "link"?  <NavITem name={item.name} path={item.path} key={i} />:<>
             <li className="relative group">
             <Link  className="px-4 py-2 flex gap-1 items-center">{item.name}              <MdArrowDropDown className="text-2xl group-hover:rotate-180 transition-all duration-150"/>
             </Link>
            
              <div className="hidden transition-all duration-500 pt-4 absolute top-0 bottom-0  transform translate-y-full group-hover:block w-max">
              <div className="flex flex-col rounded-lg shadow-lg dark:bg-gray-900 dark:text-white dark:shadow-primary p-2">
              {item.items.map((item, i) =>{
                  return  <Link className="px-4 py-2 hover:underline" to={item.path}>{item.name}</Link>
                })}
              </div>
              </div>
             </li>
              </>
            })}
          </ul>
          <Link
            to={"/login"}
            className=" text-center hover:underline border-primary p-2 w-[110px] border-[3px] rounded-full hover:text-white hover:bg-primary transition-all duration-100"
          >
            Sign in
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
