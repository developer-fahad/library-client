import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CatCard from "../components/CatCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://library-server-pink.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <section>
        <div
          className="hero min-h-[550px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/bsB04y2/pexels-tima-miroshnichenko-9572630.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="md:max-w-md lg:max-w-lg xl:max-w-xl max-w-full">
              <h1 className="mb-5 xl:text-5xl md:text-3xl text-2xl font-bold">
                Welcome to{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800">
                  QuillBooks
                </span>{" "}
                Library
              </h1>
              <p className="mb-5">
                Immerse Yourself in Worlds of Words. Dive into a world of
                literature with QuillBooks Library. Discover endless stories,
                expand your horizons, and feed your imagination.
              </p>
              <Link>
                <button className="py-3 px-5 font-bold bg-gradient-to-r from-green-700 to-cyan-800 text-white">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 md:py-8 lg:py-12 container mx-auto px-2">
        <div className="pb-5 md:pb-8 lg:pb-12 flex justify-center items-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl lg:text-rose-500 xl:text-black">
            All Categories
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {categories.map((cat) => (
            <CatCard key={cat._id} cat={cat}></CatCard>
          ))}
        </div>
      </section>
      <section>
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/1b8ZMMp/pexels-cottonbro-6334763.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="md:max-w-md lg:max-w-lg xl:max-w-xl max-w-full">
              <h1 className="mb-5 xl:text-5xl md:text-4xl text-2xl font-bold">
                Place To Study
              </h1>
              <p className="mb-5">
                There are group study rooms, individual study carrels, computers
                labs, and other spaces to study in the Libraries.
              </p>
              <Link>
                <button className="py-3 px-5 font-bold bg-gradient-to-r from-green-700 to-cyan-800 text-white">
                  Reserve Room
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="py-20 px-5 flex flex-col lg:flex-row justify-between items-center md:gap-10 gap-8 ">
          <div className="space-y-5 md:justify-start justify-center text-white">
            <p className="lg:text-left text-center">Donation</p>
            <h1 className="mb-5 xl:text-5xl md:text-4xl text-2xl lg:text-left text-center font-bold ">
              Support the Library, Give Today.
            </h1>
          </div>
          <div>
            <Link>
              <button className="py-5 px-5 font-bold bg-gradient-to-r from-green-700 to-cyan-800 rounded-full text-white">
                Make A Donation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
