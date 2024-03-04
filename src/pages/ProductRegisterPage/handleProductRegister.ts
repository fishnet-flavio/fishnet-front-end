import { api } from "../../services/api";

interface Params {
    vendorId: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    image?: File;
}

const handleProductRegister = (params : Params) => {
    try {
        const createProduct = async () => {
            return await api.post("/product", {
                price: params.price,
                name: params.name,
                stock: params.stock,
                description: params.description,
                vendorId: params.vendorId
            });
        }
        createProduct();
    } catch (e) {
        console.error(e);
    }
}

export default handleProductRegister