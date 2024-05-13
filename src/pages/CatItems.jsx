import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchingBooksCard from "../components/MatchingBooksCard";

const CatItems = () => {
  const { cat } = useParams();
  console.log(cat);
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    fetch("https://library-server-pink.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const remaining = books.filter((book) => book.category == cat);
  console.log(remaining);

  if(remaining < 1){
    return <div className="min-h-screen flex justify-center items-center">
        <h1 className="font-bold text-2xl text-error">Didn't matched!</h1>
    </div>
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <h1>Total Matched Data: {remaining.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 lg:gap-8">
            {
                remaining?.map(item => <MatchingBooksCard key={item._id} item={item}></MatchingBooksCard>)
            }
        </div>
      </section>
    </div>
  );
};

export default CatItems;
