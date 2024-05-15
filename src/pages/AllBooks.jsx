import BooksCard from "../components/BooksCard";
import { useState } from "react";
import BooksTable from "../components/BooksTable";
import axios from "axios";

const AllBooks = () => {
  // const books = useLoaderData();
  const [books, setBooks] = useState([]);

  // console.log(books);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);
    const [viewType, setViewType] = useState('card');
    const [loading, setLoading] = useState(true);

    axios('https://library-server-pink.vercel.app/books',)
    .then(res => {
      setBooks(res.data);
      setLoading(false)
    })
     

    if (loading) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      );
    }

  const toggleAvailableBooks = () => {
    setShowAvailableBooks((prevState) => !prevState);
  };

  const filteredBooks = showAvailableBooks
    ? books.filter((book) => book.quantity > 0)
    : books;

  
    const handleChangeViewType = (event) => {
      setViewType(event.target.value);
    };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex justify-between pt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleAvailableBooks}
          >
            {showAvailableBooks ? "All Books" : "Available Books"}
          </button>
          <select
            className="bg-white border border-gray-300 rounded px-4 py-2"
            value={viewType}
            onChange={handleChangeViewType}
          >
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>
        {viewType === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 pt-8">
            {filteredBooks.map((book) => (
              <BooksCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <BooksTable books={filteredBooks} />
        )}
      </section>
    </div>
  );
};

export default AllBooks;
