import { useParams } from "react-router";
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText";
import shopImage from "../../assets/pirarucu.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import BaseImage from "../../components/atom/BaseImage";


interface User {
    name: string;
}

interface ProductInfo {
    id: number;
    price: number;
    name: string;
    stock: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
    vendor: User;
    rating?: number;
}

const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState<ProductInfo>();
    

    useEffect(() => {
        try {
            const getData = async () => {
                const fetchProducts = async () => {
                    const response = await api.get(`product/${params.productId}`);
                    setProduct(response.data);
                }
                await fetchProducts();
            }
                getData();
            } catch (e) {
                toast.error("Erro ao carregar os dados.", {
                    position: "top-right"
                });
            }
        }, [])
    
    if (!product) {
        return (
        <BaseText>Não há informações neste produto</BaseText>
        );
    }

    return (
    <Base $borderRadius={12} $height="fit-content" $padding="2rem 6rem 16rem 2rem" $width="full">
        <Base $justifyContent="space-between" $flexDirection="row">
            <BaseImage src={shopImage} $width="24rem" $height="18rem"/>
            <Base $alignItems="center" $width="50%" $gap={4}>
                <BaseText $fontSize={24} $fontWeight="bold">{product.name}</BaseText>
                <BaseText>{product.description}</BaseText>
            </Base>
        </Base>
    </Base>
    )
}

export default ProductPage