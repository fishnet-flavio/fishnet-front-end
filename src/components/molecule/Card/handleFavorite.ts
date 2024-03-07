import { toast } from "react-toastify"
import { api } from "../../../services/api";

interface Params {
    userId: number;
    productId: number;
}

export const HandleFavorite = async (params: Params) => {
    try {
        const favorite = async () => {
            return await api.post("/wishlist", {
                userId: params.userId,
                productId: params.productId,
            });
        }
        await favorite();
    } catch {
        toast.error("Erro ao favoritar.", {
            position: "top-right",
        });
    }
}