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
import UpdateBook from "../pages/UpdateBook";
import CatItems from "../pages/CatItems";
import DetailsPage from "../pages/DetailsPage";
import BorrowForm from "../pages/BorrowForm";

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
            element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
            loader: () => fetch('https://library-server-pink.vercel.app/books')
        },
        {
            path: '/updatebook/:id',
            element: <PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
            loader: ({params}) => fetch(`https://library-server-pink.vercel.app/books/${params.id}`)
        },
        {
            path: '/catitem/:cat',
            element: <CatItems></CatItems>,
            loader: ({params}) => fetch(`https://library-server-pink.vercel.app/categories/${params.cat}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes>,
            loader: ({params}) => fetch(`https://library-server-pink.vercel.app/books/${params.id}`)
        },
        {
            path: '/borrow/:id',
            element: <PrivateRoutes><BorrowForm></BorrowForm></PrivateRoutes>,
            loader: ({params}) => fetch(`https://library-server-pink.vercel.app/books/${params.id}`)
        },
        {
            path: '/borrowedbooks',
            element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
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