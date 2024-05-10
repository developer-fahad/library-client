import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePass = (value) => {
    if (!/(?=.*[a-z])/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    // if (!/(?=.*[!@#$%^&*])/.test(value)) {
    //   return "Password must contain at least one special character";
    // }
    return true;
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photo);
        toast.success("User created successfully");
        // logOut();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your email is not valid!")
      });
  };

  return (
    <div className="container mx-auto">
      {/* <PageTitle pageTitle={"PeakHome | Register"}></PageTitle> */}
      <section className="min-h-screen flex justify-center items-center">
        <div className="border xl:w-2/6 lg:w-4/6 md:w-4/6 w-full p-8 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Please Register</h1>
            </div>
            <div>
              <label className="block font-bold">Name</label>
              <input
                className="w-full py-2 pl-5 outline-none border border-gray-200 focus:border-gray-300"
                type="text"
                name="name"
                placeholder="Your full name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500"><small>This field is required</small></span>
              )}
            </div>
            <div>
              <label className="block font-bold">Photo URL</label>
              <input
                className="w-full py-2 pl-5 outline-none border border-gray-200 focus:border-gray-300"
                type="text"
                name="photo"
                placeholder="Photo url"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500"><small>This field is required</small></span>
              )}
            </div>
            <div>
              <label className="block font-bold">Email</label>
              <input
                className="w-full py-2 pl-5 outline-none border border-gray-200 focus:border-gray-300"
                type="email"
                name="email"
                // required
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500"><small>This field is required</small></span>
              )}
            </div>
            <div>
              <label className="block font-bold">Password</label>
              <input
                className=" relative w-full py-2 pl-5 outline-none border border-gray-200 focus:border-gray-300"
                type={showPass ? "text" : "password"}
                name="password"
                // required
                placeholder="Password"
                // {...register("password", { required: true, minLength: 6 })}
                {...register("password", {
                  required: "Password field shouldn't be left empty!",
                  validate: validatePass,
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <span className="absolute -ml-8 mt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </button>
              </span>
              {errors.password && (
                <span className="text-red-500">
                  <small>{errors.password.message}</small>
                </span>
              )}
              {/* {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-500">Password must be at least 6 characters long</span>
              )} */}
            </div>
            <div>
              <button className="w-full py-3 bg-[#012A2D] text-white font-bold">
                Submit
              </button>
            </div>
            <div className="text-center ">
              <p className="inline-block">Already have an account?</p>
              <span className="underline text-sky-500">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
