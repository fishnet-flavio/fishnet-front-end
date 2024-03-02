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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <MarketPlacePage />},
            {path: "login", element: <LoginPage />},
            {path: "signin", element: <SignInPage />},
            {path: ":vendorId", children: [
                {path: "sale/:saleId", element: <ProductPage />},
                {path: "product-register", element: <ProductRegisterPage />}
            ]},
            {path: ":userId", children: [
                {path: "profile", element: <UserProfilePage />},
                {path: "wishlist", element: <WishlistPage />},
                {path: "shopping-cart", element: <ShoppingCartPage />},
            ]}
        ]
    }
]);

export default router