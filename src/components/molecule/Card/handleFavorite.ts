import { toast } from "react-toastify"
import { api } from "../../../services/api";

interface User {
    id: number;
    username: string;
    email: string;
}

export const HandleFavorite = async (productId: number, fav: boolean) => {
    const favorite = async () => {
        //const user = localStorage.getItem("@fishnet:user");
        const user : User = {id:1, username:"Test", email: "test@email.com"}
        if (user) {
            //const userJson = JSON.parse(user) as User;
            return await api.post("/wishlist", {
                productId: productId,
                userId: user.id
                //userId: userJson.id
            });
        }
    }
    return await favorite();
}