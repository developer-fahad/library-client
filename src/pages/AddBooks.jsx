import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddBooks = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const author = form.author.value;
    const quantity = parseInt(form.quantity.value);
    const category = form.category.value;
    const photo = form.photo.value;
    const user = form.user.value;
    const email = form.email.value;
    const content = form.content.value;

    // console.log(form);

    const newBooks = {
      name,
      rating,
      description,
      author,
      quantity,
      category,
      photo,
      content,
      user,
      email,
    };
    console.log(newBooks);

    //https://library-server-pink.vercel.app
    //https://library-server-pink.vercel.app

    fetch("https://library-server-pink.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Book Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Swal.fire("New Coffee Added Successfully!")
        }
        form.reset();
      });
  };

  return (
    <div className="min-h-screen">
      <div className=" flex justify-between pt-8">
        <div
          className="xl:w-2/4 md:block hidden"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/RQqH0mC/pexels-cottonbro-4855325.jpg)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="xl:w-2/4 w-full">
          <form
            onSubmit={handleAddBooks}
            className=" w-full mx-auto lg:pb-12 pb-8 lg:px-8 px-3 shadow-2xl"
          >
            <div className="flex justify-center items-center pb-8">
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800">
                Add New Book
              </h1>
            </div>
            <div className="flex lg:pb-5 pb-0 lg:flex-row md:flex-row flex-col justify-between md:gap-8 gap-3">
              <div className=" form-control w-full">
                <label className="font-bold">Book Name</label>
                <input
                  className="border py-2 px-5"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Book Name"
                />
              </div>
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">Select Category</label>
                <select
                  className="border py-2 px-5"
                  required
                  name="category"
                  id="dropdown"
                >
                  <option value="Novel">Novel</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Horror">Horror</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>
            </div>
            <div className="flex lg:pb-5 pb-0 lg:flex-row md:flex-row flex-col justify-between md:gap-8 gap-3">
              <div className="form-control w-full">
                <label className="font-bold">Short Descriptions</label>
                <input
                  className="border py-2 px-5"
                  type="text"
                  name="description"
                  required
                  placeholder="Short Descriptions"
                />
              </div>
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">Author Name</label>
                <input
                  className="border py-2 px-5"
                  type="text"
                  name="author"
                  required
                  placeholder="Author Name"
                />
              </div>
            </div>
            <div className="flex lg:pb-5 pb-0 lg:flex-row md:flex-row flex-col justify-between md:gap-8 gap-3">
              <div className=" form-control w-full">
                <label className="font-bold">Rating</label>
                <select
                  className="border py-2 px-5"
                  required
                  name="rating"
                  id="dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">Quantity</label>
                <input
                  className="border py-2 px-5"
                  type="number"
                  name="quantity"
                  required
                  placeholder="Quantity"
                />
              </div>
            </div>
            <div className="flex lg:pb-5 pb-0 lg:flex-row md:flex-row flex-col justify-between md:gap-8 gap-3">
              <div className="form-control w-full">
                <label className="font-bold">User Name</label>
                <input
                  className="border py-2 px-5"
                  type="text"
                  name="user"
                  value={user.displayName}
                  placeholder="User Name"
                />
              </div>
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">User Email</label>
                <input
                  className="border py-2 px-5"
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="User Email"
                />
              </div>
            </div>
            <div className="lg:pb-5 pb-0">
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">Photo URL</label>
                <input
                  className="border py-2 px-5"
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                />
              </div>
            </div>
            <div className="lg:pb-5 pb-0">
              <div className="lg:pb-0 pb-3 form-control w-full">
                <label className="font-bold">About Books</label>
                <textarea
                  className="px-5 pt-5 border"
                  rows={"8"}
                  name="content"
                  value={
                    "Books are portals to imagination, knowledge, and emotion. They transport us to different worlds, expand our minds, and connect us with diverse perspectives. Reading enriches, empowers, and enlightens. Books ignite curiosity, evoke empathy, and inspire change. They hold stories of triumph, loss, and resilience. With every page turned, we discover new truths and embrace endless possibilities."
                  }
                  id=""
                ></textarea>
              </div>
            </div>

            <div>
              <input
                type="submit"
                value="Add Book"
                className="btn font-bold btn-block bg-gradient-to-r from-green-700 to-cyan-800 rounded-full text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
