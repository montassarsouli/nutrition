import React from "react";
import guyPowder from "../assets/images/guy-powder.png";
import TopRating from "./body/TopRating";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:pt-24 pt-12 pb-24">
      <div className="px-6 lg:pl-28 lg:pr-10 lg:pb-0 pb-12 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Need some help?</h1>
        <p className="text-lg mb-6">
          Whether you are new to supplements or just looking for advice, book an
          online consultation to run through your individual needs and best
          products for your own personal health goals.
        </p>
        <button className="cursor-pointer bg-red-400 p-3 rounded-md shadow-xl hover:bg-red-500 transition-colors duration-300 hover:shadow-2xl transform hover:scale-105">
          Contact us
        </button>
      </div>
      <div className="lg:pr-24">
        <img
          src={guyPowder}
          alt="powder-guy"
          className="rounded-md shadow-lg border border-gray-200 max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Body;
