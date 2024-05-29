import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";

const ModalForm = ({ onCloseModal }) => {
  const book = useLoaderData();
  // const [book, setBook] = useState([]);
  console.log(book);
  const { _id, name, photo, category, quantity } = book;
  // const {_id, name, photo, category, quantity} = modalBook;
  const bookId = _id;
  console.log(quantity);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  console.log(book);

  const handleBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    // const borrowDate = form.borrowDate.value;
    const borrowDate = new Date().toISOString().split('T')[0];
    const returnDate = form.returnDate.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const borrow = {
      bookId,
      name,
      photo,
      category,
      quantity,
      borrowDate,
      returnDate,
      userName,
      email,
    };
    console.log(borrow);

    fetch("https://library-server-pink.vercel.app/borrow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrow),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Borrowed Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Swal.fire("New Coffee Added Successfully!")
          onCloseModal();
          navigate("/borrowedbooks");
        }
      })
      .catch((error) => {
        toast.error("Already borrowed this book!.");
        console.error("Error borrowing book:", error);
        onCloseModal();
      });
  };

  return (
    <div className="flex">
      <section className="container mx-auto">
        <div className="h-full flex justify-center">
          <form
            onSubmit={handleBorrow}
            className=" md:w-2/6 w-full p-8 shadow-xl rounded-md border bg-white"
          >
            {/* <div>
              <label>
                <strong>Borrow Date</strong>
              </label>
              <input
                className="w-full border px-2"
                required
                type="date"
                name="borrowDate"
                id=""
              />
            </div> */}
            <div className=" py-4">
              <label>
                <strong>Return Date</strong>
              </label>
              <input
                className="w-full border px-2"
                required
                type="date"
                name="returnDate"
                id=""
              />
            </div>
            <div className="flex flex-col ">
              <div className=" py-4">
                <label>
                  <strong>User Name</strong>
                </label>
                <input
                  defaultValue={user?.displayName}
                  className="w-full bg-gray-100 py-1 px-2 border border-black rounded-sm"
                  type="text"
                  name="userName"
                  id=""
                />
              </div>
              <div className=" py-4">
                <label>
                  <strong>Email</strong>
                </label>
                <input
                  defaultValue={user?.email}
                  className="w-full bg-gray-100 py-1 px-2 border border-black rounded-sm"
                  type="email"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div className="py-4">
              <input
                type="submit"
                value="Confirm to Borrow"
                className="btn font-bold btn-block bg-gradient-to-r from-green-700 to-cyan-800 rounded-full text-white"
              />
            </div>
          </form>
        </div>
      </section>
      {/* <h1>Book Title: {book.name}</h1> */}
    </div>
  );
};

export default ModalForm;

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";

// const BorrowForm = ({ book, onCloseModal }) => {
//   const { user } = useContext(AuthContext);
//   const { _id, name, photo, category, quantity } = book;

//   const handleBorrow = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const borrowDate = form.borrowDate.value;
//     const returnDate = form.returnDate.value;
//     const userName = form.userName.value;
//     const email = form.email.value;
//     const borrow = {
//       bookId: _id,
//       name,
//       photo,
//       category,
//       quantity,
//       borrowDate,
//       returnDate,
//       userName,
//       email,
//     };

//     fetch("https://library-server-pink.vercel.app/borrow", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(borrow),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Borrowed Successfully!",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//           onCloseModal(); // Close modal after successful submission
//         } else {
//           toast.error("You have already borrowed this book.");
//         }
//       });
//   };

//   return (
//     <form onSubmit={handleBorrow} className="w-2/6 p-8 shadow-xl">
//       {/* Form fields */}
//       <div>
//         <label>Borrow Date</label>
//         <input
//           className="w-full border px-2"
//           required
//           type="date"
//           name="borrowDate"
//         />
//       </div>
//       <div className=" py-4">
//         <label>Return Date</label>
//         <input
//           className="w-full border px-2"
//           required
//           type="date"
//           name="returnDate"
//         />
//       </div>
//       <div className="flex flex-col ">
//         <div className=" py-4">
//           <label>User Name</label>
//           <input
//             value={user?.displayName}
//             className="w-full bg-gray-100 py-1 px-2 border border-black rounded-sm"
//             type="text"
//             name="userName"
//           />
//         </div>
//         <div className=" py-4">
//           <label>Email</label>
//           <input
//             value={user?.email}
//             className="w-full bg-gray-100 py-1 px-2 border border-black rounded-sm"
//             type="email"
//             name="email"
//           />
//         </div>
//       </div>
//       <div className="py-4">
//         <input
//           type="submit"
//           value="Confirm to Borrow"
//           className="btn font-bold btn-accent btn-block"
//         />
//       </div>
//     </form>
//   );
// };

// export default BorrowForm;
