import Swal from "sweetalert2";

const BorrowedCard = ({ borrow, handleReturn }) => {
  const { _id, name, category, photo, borrowDate, returnDate } = borrow;
  console.log(_id);

  
  return (
    <div className="flex flex-col md:flex-row gap-3 py-3 px-3 rounded-xl shadow-xl">
      <div className="w-full md:w-2/6">
        <img className="hover:scale-110 transition h-full" src={photo} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-8 md:gap-0 w-full md:w-4/6">
        <div className=" space-y-4">
          <p>
            <strong>Name: </strong> {name}
          </p>
          <p>
            <strong>Category: </strong>
            <span className="bg-rose-200 py-1 px-3 rounded-full text-rose-600 font-bold">
              {category}
            </span>
          </p>
          <p>
            <strong>Borrow Date: </strong>
            {borrowDate}
          </p>
          <p>
            <strong>Return Date: </strong>
            {returnDate}
          </p>
        </div>
        <div>
          <button
            onClick={() => handleReturn(_id)}
            className="py-3 btn-block rounded-lg bg-rose-500 text-white font-bold"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;
