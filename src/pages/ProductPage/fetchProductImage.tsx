import { api } from "../../services/api";

const fetchProductImage = async (productId: number) => {
    try {
        const response = await api.get(`/product/${productId}/image`, {
            responseType: "arraybuffer",
        });
        const imageBlob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
    } catch (error) {
        console.error('Error:', error);
    }
};


export default fetchProductImage;