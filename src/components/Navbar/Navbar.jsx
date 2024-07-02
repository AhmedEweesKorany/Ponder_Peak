import React from "react";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <section>
      <header className="flex items-center justify-between py-6">
        <div>
          <img src={images.logo} width={60} alt="logo" />{" "}
        </div>
        <div className="flex items-center gap-x-9">
          <ul className="flex items-center gap-x-7">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
          <button className=" border-primary p-2 w-[110px] border-[3px] rounded-lg hover:text-white hover:bg-primary transition-all duration-100">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
