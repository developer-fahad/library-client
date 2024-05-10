import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllBooks from "../pages/AllBooks";
import AddBooks from "../pages/AddBooks";
import PrivateRoutes from "./PrivateRoutes";
import BorrowedBooks from "../pages/BorrowedBooks";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allbooks',
            element: <AllBooks></AllBooks>
        },
        {
            path: '/borrowedbooks',
            element: <BorrowedBooks></BorrowedBooks>
        },
        {
            path: '/addbooks',
            element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default router;  