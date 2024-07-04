import React from "react";
import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="flex justify-between gap-60 items-center">
      <div>
        <h1>Read The Most interesting Articles</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sint ab harum reiciendis, itaque possimus, fugiat.
        </p>

        <div>
            <div>
            <input type="text" name="" id="" className="border rounded-md p-3 shadow-md dark:bg-gray-600 dark:border-gray-500" />

            </div>
        <button>Search</button>
        </div>
        <div>
            <span>Popular Tags:</span>
            <ul>
                <li>Design</li>
                <li>Programming</li>
                <li>Cloud Computing</li>
            </ul>
        </div>
      </div>
      <div >

        <img src={images.HeroImage} alt="image that describe users reading articles" className="w-full object-cover dark:bg-gray-900 " />
      </div>
    </section>
  );
};

export default Hero;
