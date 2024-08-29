import { api } from "../../services/api";

const fetchProfilePicture = async (userId: number) => {
    try {
        const response = await api.get(`/user/${userId}/profile-picture`, {
            responseType: "arraybuffer",
        });
        const imageBlob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
    } catch (error) {
        console.error('Error:', error);
    }
};


export default fetchProfilePicture;