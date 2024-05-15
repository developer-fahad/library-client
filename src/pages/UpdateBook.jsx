import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const book = useLoaderData()
    const { _id, name, photo, author, category, rating } = book;

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const author = form.author.value;
        const category = form.category.value;
        const photo = form.photo.value;
    
        // console.log(form);
    
        const updatedBook = {
          name,
          rating,
          category,
          photo,
          author
        };
        console.log(updatedBook);
    
        //https://library-server-pink.vercel.app
        //https://library-server-pink.vercel.app
        
        fetch(`https://library-server-pink.vercel.app/books/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedBook),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Book Updated Successfully!",
                icon: "success",
                confirmButtonText: "Cool",
              });
              // Swal.fire("New Coffee Added Successfully!")
            }
            // form.reset();
          });
      };

    return (
        <div>
      <form
        onSubmit={handleUpdateBook}
        className="border space-y-8 lg:w-8/12 md:w-9/12 w-full mx-auto lg:py-12 py-8 lg:px-8 px-3 bg-rose-50"
      >
        <div className="flex justify-center items-center">
          <h1 className="lg:text-5xl md:text-3xl text-xl text-green-500 font-bold">Update Existing Book Info</h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Book Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Your Book Name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">Change Category</label>
            <select className="border py-2 px-5" defaultValue={category} name="category" id="dropdown">
              <option value="Novel">Novel</option>
              <option value="Fiction">Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
            </select>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Author Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="author"
              defaultValue={author}
              placeholder="Author Name"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Change Rating</label>
            <select className="border py-2 px-5" defaultValue={rating} name="rating" id="dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full">
            <input className="border py-2 px-5" defaultValue={photo} type="text" name="photo" id="" placeholder='Photo URL...' />
        </div>
        <div>
          <input
            type="submit"
            value="Add"
            className="btn font-bold btn-accent btn-block"
          />
        </div>
      </form>
    </div>
    );
};

export default UpdateBook;