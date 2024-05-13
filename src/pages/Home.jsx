import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CatCard from "../components/CatCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://library-server-pink.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <section className="hidden">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper xl:h-[650px] lg:h-[500px] md:h-[400px] h-[220px]"
          >
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/Zm36rbX/pexels-2dreamersphoto-2716895.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
                <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center px-2">
                  <h1 className="text-white font-bold ">Super Hero</h1>
                  <Link
                    className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                    to="/allartcraft"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/q15K0Gm/pexels-curiosophotography-288100.jpg )`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
                <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center">
                  <h1 className="text-white font-bold">Most Beautiful</h1>
                  <Link
                    className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                    to="/allartcraft"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/r56ZcJD/pexels-sofya-borboris-239815738-12261002.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
                <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center">
                  <h1 className="text-white font-bold">Pencil Sketch</h1>
                  <Link
                    className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                    to="/allartcraft"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/bsB04y2/pexels-tima-miroshnichenko-9572630.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
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
    </div>
  );
};

export default Home;
