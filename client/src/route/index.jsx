import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import UserMenuMobile from "../pages/UserMenuMobile";
import OtpVerification from "../pages/OtpVerification";
import ProductDisplayPage from "../pages/ProductDisplayPage";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
import CheckoutPage from "../pages/CheckoutPage";
import CartMobile from "../pages/CartMobile";
import Dashboard from "../layouts/Dashboard";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "search",
            element: <SearchPage />,
        },
        {
            path: "login",
            element: <Login />,

        },
        {
            path: "register",
            element: <Register />,
        },
        {
            path: "forgot-password",
            element: <ForgotPassword />
        },
        {
            path: "verification-otp",
            element: <OtpVerification />
        },
        {
            path: "reset-password",
            element: <ResetPassword />
        },
        {
            path: "user",
            element: <UserMenuMobile />
        },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "profile",
                element: <Profile />
            },
           /*  {
                path: "myorders",
                element: <MyOrders />
            },
            {
                path: "address",
                element: <Address />
            }, */
            /* {
                path: 'category',
                element: <AdminPermision><CategoryPage /></AdminPermision>
            },
            {
                path: "subcategory",
                element: <AdminPermision><SubCategoryPage /></AdminPermision>
            },
            {
                path: 'upload-product',
                element: <AdminPermision><UploadProduct /></AdminPermision>
            },
            {
                path: 'product',
                element: <AdminPermision><ProductAdmin /></AdminPermision>
            } */
        ]
    },
    {
        path: "product/:product",
        element: <ProductDisplayPage />
    },
    {
        path: 'cart',
        element: <CartMobile />
    },
    {
        path: "checkout",
        element: <CheckoutPage />
    },
    {
        path: "success",
        element: <Success />
    },
    {
        path: 'cancel',
        element: <Cancel />
    }
])

export default router