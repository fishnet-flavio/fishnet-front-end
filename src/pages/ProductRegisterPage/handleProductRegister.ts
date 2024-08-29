import { api } from "../../services/api";



const handleProductRegister = async (form: FormData) => {
    try {
        await api.post("/product", 
            form, 
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        return true;
    } catch (e) {
        console.error("Error:", e);
    }
}

export default handleProductRegister