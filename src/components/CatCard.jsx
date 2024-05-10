import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
  const { img, category } = cat;
  return (
    <div>
      <figure className="flex flex-col justify-center items-center border bg-gray-300  shadow-2xl">
        <div className="bg-blue-500 w-full ">
          <h1 className="text-center py-2 font-bold text-white">{category}</h1>
        </div>
        <div className="h-56 p-3">
          <img className="h-full hover:scale-110 hover:transition" src={img} alt="Movie" />
        </div>
        <div className=" w-full">
          <Link to='/'><button className="py-2 w-full bg-rose-500 text-white font-bold">View All</button></Link>
          
        </div>
      </figure>
    </div>
  );
};

export default CatCard;
