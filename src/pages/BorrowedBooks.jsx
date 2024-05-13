import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BorrowedCard from '../components/BorrowedCard';
import Swal from 'sweetalert2';

const BorrowedBooks = () => {
    const {user} = useContext(AuthContext);
    const [allBorrows, setAllBorrows] = useState([]);
    console.log(allBorrows);

    const handleReturn = id => {
        console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            console.log("Returned Confirmed");
    
            fetch(`https://library-server-pink.vercel.app/borrow/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Returned!",
                    text: "Your book has been returned.",
                    icon: "success",
                  });
                  const remaining = allBorrows.filter((borrow) => borrow._id !== id);
                  setAllBorrows(remaining);
                }
              });
          }
        });
      };


    const url = `https://library-server-pink.vercel.app/borrow?email=${user?.email}`;
    
    useEffect(() =>{
        fetch(url, {credentials: 'include'})
        .then(res => res.json())
        .then(data => setAllBorrows(data))
    },[url])


    return (
        <div className='min-h-screen'>
            <section className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10'>
                    {
                        allBorrows.map(borrow => <BorrowedCard key={borrow._id} borrow={borrow} handleReturn={handleReturn} allBorrows={allBorrows} setAllBorrows={setAllBorrows}></BorrowedCard>)
                    }
                </div>

            </section>
        </div>
    );
};

export default BorrowedBooks;