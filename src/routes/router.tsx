import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MarketPlacePage from "../pages/MarketPlacePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import WishlistPage from "../pages/WishlistPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import UserProfilePage from "../pages/UserProfilePage";
import ProductRegisterPage from "../pages/ProductRegisterPage";
import SignInPage from "../pages/SignInPage";
import Page from "../pages/Page";
import AuthPage from "../pages/AuthPage";
import ProtectedRoute from "./protectedRoute";
import MyPurchasesPage from "../pages/MyPurchasesPage";

const isAuthenticated  = () => {
    const token = localStorage.getItem("token");
    return !!token;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Page />, children: [
                {path: "", element: <MarketPlacePage />},
                {path: ":vendorId", element: <ProtectedRoute isAuthenticated={isAuthenticated} />, 
                children: [
                    {path: "sale/:productId", element: <ProductPage />},
                    {path: "product-register", element: <ProductRegisterPage />}]},
                {path: ":userId", element: <ProtectedRoute isAuthenticated={isAuthenticated} />, 
                children: [
                    {path: "profile", element: <UserProfilePage />},
                    {path: "wishlist", element: <WishlistPage />},
                    {path: "shopping-cart", element: <ShoppingCartPage />},
                    {path: "history", element: <MyPurchasesPage />}
                ]},
            ]},
            {path: "", element: <AuthPage />, children: [
                {path: "login", element: <LoginPage />},
                {path: "signin", element: <SignInPage />},
            ]},
        ]
    }
]);

export default router