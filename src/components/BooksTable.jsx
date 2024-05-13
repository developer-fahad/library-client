
import { Link } from "react-router-dom";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-black">
            <th>Image</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id}>
              <td>
                <div className="avatar">
                  <div className="h-24">
                    <img src={book.photo} alt="Avatar" />
                  </div>
                </div>
              </td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.rating}</td>
              <th>
                <Link to={`/updatebook/${book._id}`}>
                  <button className="px-5  py-3 btn-block rounded-lg bg-rose-500 text-white font-bold">
                    Update
                  </button>
                </Link>
                {
                  //   <button
                  //     onClick={() => updateBookingStatus(booking._id)}
                  //     className="btn btn-secondary btn-xs"
                  //   >
                  //     Please Confirm
                  //   </button>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
