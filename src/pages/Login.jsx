import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
// import PageTitle from "../../components/PageTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();

    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Login Successfully!");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid Email or Password!");
      });
  };

  const handleGoogle = () => {
    googleLogin().then(() => {
      toast.success("Login Successfully!");
      navigate("/");
    });
  };
  return (
    <div className="container mx-auto">
      {/* <PageTitle pageTitle={"PeakHome | Login"}></PageTitle> */}
      <section className="min-h-screen flex justify-center items-center">
        <div className="border xl:w-2/6 lg:w-4/6 md:w-4/6 w-full p-8 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login</h1>
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
                <span className="text-red-500">
                  <small>This field is required</small>
                </span>
              )}
            </div>
            <div>
              <label className="block font-bold">Password</label>
              <input
                className="relative w-full py-2 pl-5 outline-none border border-gray-200 focus:border-gray-300"
                type="password"
                name="password"
                // required
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">
                  <small>Password required</small>
                </span>
              )}
              <span className="underline text-sm flex justify-end mt-2   ">
                Forgot Password?
              </span>
            </div>
            <div>
              <button className="w-full py-3 bg-gradient-to-r from-green-700 to-cyan-800 text-white font-bold">
                Login
              </button>
            </div>
            <div className="text-center ">
              <p className="inline-block">Don&apos;t have an account?</p>
              <span className="underline text-sky-500">
                <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogle}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-3 space-x-2 border rounded-md font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
