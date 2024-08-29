import { useState } from "react";
import { api } from "../../services/api";

const fetchProfilePicture = async (userId: number) => {
    try {
        const [image, setImage] = useState<string | null>(null);
        const response = await api.get(`/user/${userId}/profile-picture`, {
            responseType: 'arraybuffer',
        });

        const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
        return image;
    } catch (error) {
        console.error('Error:', error);
    }
};


export default fetchProfilePicture;