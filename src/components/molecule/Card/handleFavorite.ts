import { toast } from "react-toastify"
import { api } from "../../../services/api";
import { useState } from "react"
import getProfile from "../../../pages/UserProfilePage/getProfile"

interface User {
    id: number;
    username: string;
    email: string;
}

export const HandleFavorite = async (productId: number, fav: boolean, userId: number) => {
    const favorite = async () => {
        //const user = localStorage.getItem("@fishnet:user");

        if (userId && fav) {
            //const userJson = JSON.parse(user) as User;
            return await api.post("/wishlist", {
                productId: productId,
                userId: userId
                //userId: userJson.id
            });
        }
        else if (userId && !fav){
            //const userJson = JSON.parse(user) as User;
            return await api.delete("/wishlist", {
                params:{
                    productId: productId,
                    userId: userId
                }
            });
        }
    }
    return await favorite();
}