import React from "react";
import { images } from "../../constants";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { randomAnimation } from "../../services/ui/randonAnimation";

const ArticleCard = ({ className,to }) => {
  /**
   * A functional component that renders an article card with an image and text content.
   *
   * @param {Object} props - The component's props.
   * @param {string} props.className - Additional CSS classes to apply to the root element.
   *
   * @returns {JSX.Element} - The rendered article card component.
   */

  return (
    <div
      className={`${className} rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 dark:shadow-primary/20`}
    >
<Link to={to}>
<img
        src={images.post1}
        alt="articleCardImg"
        className="w-full h-auto object-cover object-center"
      />
</Link>
      <div className="p-5">
        <h2 data-aos = {randomAnimation()} className=" font-roboto font-bold text-x text-semiblack dark:text-white">
          Feature of Work
        </h2>
        <p data-aos = {randomAnimation()} className="text-sm text-semiblack mt-3 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          exercitationem quidem cumque doloribus. Sapiente ullam ipsam
          reiciendis harum repudiandae!
        </p>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-2">
            <img
              src={images.postProfile1}
              alt=""
              data-aos = {randomAnimation()}
              className="w-[40px] object-conver rounded-full"
            />
            <div className="fex flex-col">
              <h4 data-aos = {randomAnimation()} className="font-bold italic text-semiblack text-sm dark:text-gray-300" >
                Ahmed Ewees
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-green-100 p-2 rounded-full text-green-700" data-aos = {randomAnimation()}>
                  <BsCheckLg />
                  </span>
                <span data-aos = {randomAnimation()}>Verified Writer</span>
              </div>
            </div>
          </div>
          <span data-aos = {randomAnimation()}>02 may</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
