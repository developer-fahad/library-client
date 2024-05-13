import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const book = useLoaderData();
  const {
    _id,
    name,
    author,
    category,
    description,
    quantity,
    rating,
    photo,
    content,
  } = book;
  console.log(book);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-10  xl:px-52">
          <div className="w-full h-[500px] md:w-1/2 text-right flex justify-end">
            <img className="h-full" src={photo} alt="" />
          </div>
          <div className="w-full md:w-1/2 px-2 space-y-5">
            <p>
              <strong>Book Name: </strong>
              {name}
            </p>
            <p>
              <strong>Author Name: </strong>
              {author}
            </p>
            <p>
              <strong>Short Description: </strong>
              {description}
            </p>
            <p>
              <strong>Category: </strong>
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
            <p>
              <strong>Quantity: </strong>
              {quantity}
            </p>
            <div>
              <Link to={`/borrow/${_id}`}>
                <button
                  disabled={quantity < 1}
                  className={`py-3 px-5 ${
                    quantity < 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-rose-500 text-white font-bold"
                  }`}
                >
                  Borrow
                </button>
              </Link>

              {/* Experiment for modal show  */}
              <button
                disabled={quantity < 1}
                className={`py-3 px-5 ${
                  quantity < 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 text-white font-bold"
                }`}
              >
                Borrow
              </button>
              {/* Experiment for modal show  */}

            </div>
          </div>
        </div>
        <div className="py-12 bg-gray-200 space-y-3 px-2 ">
          <h1 className="text-xl font-bold text-rose-500 ">
            Dear, Book Lovers:
          </h1>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;

// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { GoStar, GoStarFill } from "react-icons/go";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import Rating from "react-rating";
// import { Link, useLoaderData } from "react-router-dom";
// import BorrowForm from "./BorrowForm";
// import Swal from "sweetalert2";

// const DetailsPage = () => {
//   const book = useLoaderData();
//   const {
//     _id,
//     name,
//     author,
//     category,
//     description,
//     quantity,
//     rating,
//     photo,
//     content,
//   } = book;

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen">
//       <section className="container mx-auto">
//         {/* Book details */}
//         {/* Other details */}

//         {/* Button to open modal */}
//         <button
//           className="btn"
//           onClick={() => setIsModalOpen(true)}
//           disabled={isModalOpen}
//         >
//           Open modal
//         </button>
//       </section>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <BorrowForm book={book} onCloseModal={handleCloseModal} />
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={handleCloseModal}
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-500 text-base font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetailsPage;
