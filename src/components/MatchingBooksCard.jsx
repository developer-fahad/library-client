import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const MatchingBooksCard = ({ item }) => {
  const { _id, name, author, photo, category, rating } = item;
  return (
    <div className="flex flex-col md:flex-row gap-3 py-3 px-3 rounded-xl shadow-xl">
      <div className="w-full md:w-2/6">
        <img className="hover:scale-110 transition h-full" src={photo} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-8 md:gap-0 w-full md:w-4/6">
        <div className=" space-y-4">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Category:</strong>{" "}
            <span className="bg-rose-200 py-1 px-3 rounded-full text-rose-600 font-bold">
              {category}
            </span>
          </p>
          <div className="flex gap-2">
            <p>
              <strong>Rating: </strong>
            </p>
            <Rating
              className="mt-1"
              emptySymbol={<GoStar className="" />}
              fullSymbol={<GoStarFill className="text-orange-500" />}
              initialRating={rating}
              readonly
            />
          </div>
        </div>
        <div>
          <Link to={`/details/${_id}`}>
            <button className="  py-3 btn-block rounded-lg bg-rose-500 text-white font-bold">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchingBooksCard;
