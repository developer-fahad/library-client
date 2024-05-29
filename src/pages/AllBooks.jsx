
// import BooksCard from "../components/BooksCard";
// import { useEffect, useState } from "react";
// import BooksTable from "../components/BooksTable";
// import axios from "axios";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [showAvailableBooks, setShowAvailableBooks] = useState(false);
//   const [viewType, setViewType] = useState("card");
//   const [loading, setLoading] = useState(true);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(
//           "https://library-server-pink.vercel.app/books"
//         );
//         setBooks(response.data);
//         setFilteredBooks(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const filterBooks = (books, showAvailable) => {
//     if (showAvailable) {
//       return books.filter((book) => book.quantity > 0);
//     }
//     return books;
//   };

//   const handleShowAvailableBooks = () => {
//     const newShowAvailableBooks = !showAvailableBooks;
//     setShowAvailableBooks(newShowAvailableBooks);
//     const results = filterBooks(books, newShowAvailableBooks);
//     setFilteredBooks(results);
//   };

//   const handleChangeViewType = (event) => {
//     setViewType(event.target.value);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <section className="container mx-auto">
//         <div
//           className="relative lg:py-28 md:py-20 py-12 flex justify-center items-center"
//           style={{
//             backgroundImage: "url(https://i.ibb.co/1b8ZMMp/pexels-cottonbro-6334763.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-65">
//             <h1 className="lg:text-5xl md:text-3xl text-2xl uppercase font-bold text-white">
//               All Books
//             </h1>
//           </div>
//         </div>

//         <div className="flex justify-between items-center border-b lg:mb-8 mb-5 bg-white p-4">
//           <button
//             className={`${
//               showAvailableBooks
//                 ? "px-5 font-bold text-white bg-blue-500"
//                 : "px-5 font-bold text-white bg-rose-500"
//             }`}
//             onClick={handleShowAvailableBooks}
//           >
//             {showAvailableBooks ? "Show All Books" : "Show Available Books"}
//           </button>
//           <select
//             className="bg-white border border-gray-300 rounded px-4 py-2"
//             value={viewType}
//             onChange={handleChangeViewType}
//           >
//             <option value="card">Card View</option>
//             <option value="table">Table View</option>
//           </select>
//         </div>

//         {viewType === "card" ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 pt-8">
//             {filteredBooks.map((book) => (
//               <BooksCard key={book._id} book={book} />
//             ))}
//           </div>
//         ) : (
//           <BooksTable books={filteredBooks} />
//         )}
//       </section>
//     </div>
//   );
// };

// export default AllBooks;




import BooksCard from "../components/BooksCard";
import { useEffect, useState } from "react";
import BooksTable from "../components/BooksTable";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);
  const [viewType, setViewType] = useState("card");
  const [loading, setLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://library-server-pink.vercel.app/books"
        );
        setBooks(response.data);
        setFilteredBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filterAndSortBooks = (books, showAvailable, sortOption) => {
    let filtered = books;
    if (showAvailable) {
      filtered = filtered.filter((book) => book.quantity > 0);
    }
    if (sortOption === "ratingHighToLow") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "ratingLowToHigh") {
      filtered = filtered.sort((a, b) => a.rating - b.rating);
    }
    return filtered;
  };

  const handleShowAvailableBooks = () => {
    const newShowAvailableBooks = !showAvailableBooks;
    setShowAvailableBooks(newShowAvailableBooks);
    const results = filterAndSortBooks(books, newShowAvailableBooks, sortOption);
    setFilteredBooks(results);
  };

  const handleChangeViewType = (event) => {
    setViewType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    const results = filterAndSortBooks(books, showAvailableBooks, event.target.value);
    setFilteredBooks(results);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto">
        <div
          className="relative lg:py-28 md:py-20 py-12 flex justify-center items-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/1b8ZMMp/pexels-cottonbro-6334763.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-65">
            <h1 className="lg:text-5xl md:text-3xl text-2xl uppercase font-bold text-white">
              All Books
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-b lg:mb-8 mb-5 bg-white p-4 ">
          <button
            className={`${
              showAvailableBooks
                ? "px-5 font-bold text-white bg-blue-500"
                : "px-5 font-bold text-white bg-rose-500"
            }`}
            onClick={handleShowAvailableBooks}
          >
            {showAvailableBooks ? "Show All Books" : "Show Available Books"}
          </button>
          <select
            className="bg-white border border-gray-300 rounded px-4 py-2"
            value={viewType}
            onChange={handleChangeViewType}
          >
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
          <select
            className="bg-white border border-gray-300 rounded px-4 py-2 ml-4"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="none">Sort by Rating</option>
            <option value="ratingHighToLow">Rating High to Low</option>
            <option value="ratingLowToHigh">Rating Low to High</option>
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
