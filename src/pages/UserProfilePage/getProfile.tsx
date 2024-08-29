import { api } from "../../services/api";

const getProfile = async () => {
    try {
        const response = (await api.get("/auth/profile"));
        const userProfile = response.data.user;
        return userProfile;
    } catch (error) {
        console.log("Error:", error);
    }
}

export default getProfile;