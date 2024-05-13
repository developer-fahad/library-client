import { useLoaderData } from "react-router-dom";
import BooksCard from "../components/BooksCard";
import { useState } from "react";

const AllBooks = () => {
  const books = useLoaderData();
  console.log(books);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const toggleAvailableBooks = () => {
    setShowAvailableBooks((prevState) => !prevState);
  };

  const filteredBooks = showAvailableBooks
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleAvailableBooks}
          >
            {showAvailableBooks ? "Show All Books" : "Show Available Books"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {filteredBooks?.map((book) => (
            <BooksCard key={book._id} book={book}></BooksCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllBooks;
