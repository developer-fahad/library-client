import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogout = () => {
    logOut().then((result) => {
      console.log(result);
      navigate("/");
    });
  };
  const links = (
    <>
      <li className="">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
              : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to={"/allbooks"}
          className={({ isActive }) =>
            isActive
              ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
              : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
          }
        >
          All Books
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/borrowedbooks"}
              className={({ isActive }) =>
                isActive
                  ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
                  : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
              }
            >
              Borrowed Books
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to={"/addbooks"}
              className={({ isActive }) =>
                isActive
                  ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
                  : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent hover:border-b-[#012A2D] "
              }
            >
              Add Books
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <nav className=" py-1">
        <div className="navbar items-center container mx-auto xl:px-0">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden px-0 pr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={2}
                className="menu menu-sm relative  dropdown-content mt-3 z-50 bg-white  p-2 shadow rounded-2xl w-48"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-cyan-800"
            >
              QuillBooks
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu flex flex-row items-center gap-5 font-bold xl:text-lg">
              {links}
            </ul>
          </div>
          <div className="navbar-end flex xl:gap-8 md:gap-5 gap-3">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme == "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {user ? (
              <div className="flex items-center md:gap-5 gap-3">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} className="">
                    <img
                      className="md:h-12 h-10 md:w-12 w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content -ml-36 z-10 menu p-2 shadow bg-base-100 rounded-box w-48"
                  >
                    <li className="font-bold">
                      <p>{user.displayName}</p>
                    </li>
                    <li className="">
                      <Link
                        onClick={handleLogout}
                        className="xl:px-3 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base hover:bg-[#012A2D] text-sm bg-gradient-to-r from-green-700 to-cyan-800 text-white"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center md:gap-8 gap-2">
                <Link to="/login">
                  <button className="xl:px-8 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base text-sm border-2 border-green-700 text-green-700 bg-transparent rounded-full transition-all duration-500 hover:text-white hover:bg-gradient-to-r hover:from-green-700 hover:to-cyan-800 hover:border-green-700">
                    Login
                  </button>
                </Link>
                {/* <Link to="/register">
                  <button className="xl:px-3 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base text-sm bg-gradient-to-r from-green-700 to-cyan-800 text-white">
                    Register
                  </button>
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
