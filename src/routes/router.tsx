import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MarketPlacePage from "../pages/MarketPlacePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import WishlistPage from "../pages/WishlistPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import UserProfilePage from "../pages/UserProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <MarketPlacePage />},
            {path: "login", element: <LoginPage />},
            {path: ":vendorId/sale/:saleId", element: <ProductPage />},
            {path: ":userId/wishlist", element: <WishlistPage />},
            {path: ":userId/shopping-cart", element: <ShoppingCartPage />},
            {path: ":userId/profile", element: <UserProfilePage />}
        ]
    }
]);

export default router