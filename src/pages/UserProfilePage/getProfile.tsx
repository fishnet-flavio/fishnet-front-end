import { api } from "../../services/api";

const getProfile = async () => {
    try {
        return (await api.get("/auth/profile")).data;
    } catch (error) {
        console.log("Error:", error);
    }
}

export default getProfile;