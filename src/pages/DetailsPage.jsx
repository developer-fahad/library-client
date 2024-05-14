import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import ModalForm from "./ModalForm";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              {/* <Link to={`/borrow/${_id}`}>
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
              </Link> */}

              {/* Experiment for Modal Showing */}
              <button
                onClick={handleOpenModal}
                disabled={quantity < 1}
                className={`py-3 px-5 ${
                  quantity < 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-rose-500 text-white font-bold"
                }`}
              >
                Borrow
              </button>
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen">
                    <dialog
                      id="my_modal_4"
                      className="modal"
                      open={isModalOpen} // Ensure the modal is open when isModalOpen is true
                    >
                      <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <ModalForm onCloseModal={handleCloseModal}></ModalForm>
                            {/* Close button */}
                            <div className="flex justify-center py-5">
                            <button className="btn btn-block bg-rose-500 text-white font-bold" onClick={handleCloseModal}>
                              Close
                            </button>
                            </div>
                            
                      </div>
                    </dialog>
                  </div>
                </div>
              )}
              {/* Experiment for Modal Showing */}
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
