import { useNavigate } from "react-router";
import { api } from "../../../services/api"

const handleUserRegister = async (form: FormData) => {
    try {
        await api.post("/user", 
            form,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return true;
    } catch (error) {
        console.error("Error:", error);
    }
}
export default handleUserRegister;