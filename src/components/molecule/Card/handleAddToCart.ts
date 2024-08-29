import { api } from "../../../services/api"

export const HandleAddToCart = async (userId: number, productId: number, ammount: number) => {
    try {
        await api.post("/shoppingcart", {
            userId,
            productId,
            ammount
        });
        return true;
    } catch(e) {
        console.log("Error:", e);
    }
}