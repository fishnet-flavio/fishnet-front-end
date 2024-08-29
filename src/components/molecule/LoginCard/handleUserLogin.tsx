import { api } from "../../../services/api";

const handleUserLogin = async (email: string, password: string) => {
    try {
        const response = await api.post("/auth/login", {
            email,
            password
        })
        localStorage.setItem("token", response.data.access_token);
        console.log(localStorage.getItem("token"));

        return true;
    } catch (error) {
        console.log("Error:", error);
    }
}
export default handleUserLogin;