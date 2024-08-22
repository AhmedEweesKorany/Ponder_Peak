import React from "react";
import { images } from "../../constants";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleCard = ({ className,to,data }) => {
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
<a href={to}>
<img
        src={ data?.avatar ? axios.defaults.baseURL + "/uploads/" + data?.avatar : images.post1}
        alt="articleCardImg"
        className="w-full h-[400px] object-cover  object-center"
      />
</a>
      <div className="p-5">
        <h2  className=" font-roboto font-bold text-x text-semiblack dark:text-white">
          {data?.title}
        </h2>
        <p  className="text-sm text-semiblack mt-3 dark:text-gray-400">
          {data?.body}
        </p>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-2">
            <img
              src={data?.user?.avatar ? axios.defaults.baseURL + "/uploads/" + data?.user?.avatar: images.postProfile1}
              alt=""

              className="w-[40px] object-conver rounded-full"
            />
            <div className="fex flex-col">
              <h4  className="font-bold italic text-semiblack text-sm dark:text-gray-300" >
              {data?.user?.name}
              </h4>
            {data?.user?.verified &&
                   <div className="flex items-center gap-x-2">
                 <span className="bg-green-100 p-2 rounded-full text-green-700" >
                  <BsCheckLg />
                  </span>
                <span >Verified Writer</span>
              </div>
                }
            </div>
          </div>
          <span > {new Date(data.createdAt).toLocaleDateString("en-US",{
    day:"numeric", 
    month:"short",
    hour:"numeric",
    minute:"numeric"
  })}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
