import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section
        className="relative  flex justify-center items-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/VJv9VFQ/foot.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-full bg-black bg-opacity-95"></div>
        <footer className="footer bg-transparent z-10 p-10 text-white ">
          <aside>
            <Link
              to="/"
              className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
            >
              QuillBooks
            </Link>
            <p className="text-white">
              QuillBooks Public Library <br />
              Immerse Yourself in Worlds of Words.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
