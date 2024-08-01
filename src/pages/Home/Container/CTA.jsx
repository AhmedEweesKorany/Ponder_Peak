import { Link } from "react-router-dom";
import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <section id="contact" className="bg-semiblack text-white dark:bg-primary w-full h-auto min-h-40 p-0">
        <div className="container grid grid-cols-12 mx-auto lg:place-items-center">
          <div className="col-span-12 py-4 px-5 sm:px-0 lg:col-span-6 lg:order-first ">
            <h2 className="font-roboto text-white font-bold text-2xl">
              Get Our Stories To Your Inbox Weekly.
            </h2>
            <div className="w-full max-w-[490px] mt-12 space-y-3 mx-auto lg:mx-0 ">
              <input
                type="text"
                placeholder="Enter Your Email "
                className="px-3 py-4 w-full outline-none border-none text-black  rounded-lg placeholder:text-semiblack"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary dark:bg-semiblack">
                Get Started
              </button>
            </div>
            <p className="text-gray-400 dark:text-white mt-6 leading-7 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              accusamus cumque fuga, possimus excepturi voluptates.
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] mt-20 md:block md:order-first lg:col-span-6">
          <div
      className="rounded-xl  w-full bg-white p-3 z-[1] relative"
    >
<img
        src={images.contactImg}
        alt="articleCardImg"
        className="w-[500px] h-[300px] mx-auto object-cover object-center"
      />
      <div className="p-5">
        <h2 className=" font-roboto font-bold text-x text-semiblack">
          Feature of Work
        </h2>
        <p className="text-sm text-semiblack mt-3 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          exercitationem quidem cumque doloribus. Sapiente ullam ipsam
          reiciendis harum repudiandae!
        </p>

      </div>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
