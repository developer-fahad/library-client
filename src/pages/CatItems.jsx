import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchingBooksCard from "../components/MatchingBooksCard";

const CatItems = () => {
  const { cat } = useParams();
  console.log(cat);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(books);

  useEffect(() => {
    fetch("https://library-server-pink.vercel.app/books", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter((book) => book.category == cat);
        setBooks(remaining);
        setLoading(false);
      });
  }, [cat]);

  // console.log(remaining);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // if(books < 1){
  //   return <div className="min-h-screen flex justify-center items-center">
  //       <h1 className="font-bold text-2xl text-error">Didn't matched!</h1>
  //   </div>
  // }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <h1>Total Matched Data: {books.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {books?.map((item) => (
            <MatchingBooksCard key={item._id} item={item}></MatchingBooksCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatItems;
