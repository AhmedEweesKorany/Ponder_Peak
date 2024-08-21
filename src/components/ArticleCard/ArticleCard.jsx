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

  // format createdAt date 
const date = new Date(data?.createdAt);

// Extract day, month, and year
const day = date.getUTCDate();
const month = date.toLocaleString('default', { month: 'short' }); // Aug
const year = date.getUTCFullYear();

// Combine them into the desired format
const formattedDate = `${day} ${month} ${year}`;
  return (
    <div
      className={`${className} rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 dark:shadow-primary/20`}
    >
<Link to={to}>
<img
        src={ axios.defaults.baseURL + "/uploads/" + data?.avatar}
        alt="articleCardImg"
        className="w-full h-auto object-cover object-center"
      />
</Link>
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
          <span >{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
