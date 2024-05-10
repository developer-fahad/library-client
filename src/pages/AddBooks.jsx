import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddBooks = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const handleAddBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const author = form.author.value;
    const quantity = form.quantity.value;
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

    //https://art-store-server.vercel.app/paintings
    //http://localhost:5000/paintings
    
    fetch("https://art-store-server.vercel.app/paintings", {
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
            text: "New Paiting Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Swal.fire("New Coffee Added Successfully!")
        }
        // form.reset();
      });
  };

  return (
    <div className="bg-rose-100">
      <form
        onSubmit={handleAddBooks}
        className="border space-y-8 lg:w-8/12 md:w-9/12 w-full mx-auto lg:py-12 py-8 lg:px-8 px-3 bg-rose-50"
      >
        <div className="flex justify-center items-center">
          <h1 className="lg:text-5xl md:text-3xl text-xl text-green-500 font-bold">Add New Book</h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Book Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="name"
              required
              placeholder="Your Book Name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">Select Category</label>
            <select className="border py-2 px-5" required name="category" id="dropdown">
              <option value="Novel">Novel</option>
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Self Development">Self Development</option>
            </select>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
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
          <div className="form-control w-full">
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
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Rating</label>
            <select className="border py-2 px-5" required name="rating" id="dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-control w-full">
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
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
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
          <div className="form-control w-full">
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
        <div className="">
          <div className="form-control w-full">
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
        <div className="">
          <div className="form-control w-full">
            <label className="font-bold">About Books</label>
            <textarea className="px-5 pt-5" rows={'8'} name="content" value={'Books are portals to imagination, knowledge, and emotion. They transport us to different worlds, expand our minds, and connect us with diverse perspectives. Reading enriches, empowers, and enlightens. Books ignite curiosity, evoke empathy, and inspire change. They hold stories of triumph, loss, and resilience. With every page turned, we discover new truths and embrace endless possibilities.'} id=""></textarea>
          </div>
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

export default AddBooks;
