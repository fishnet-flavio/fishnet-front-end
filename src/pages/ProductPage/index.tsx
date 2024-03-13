import { useParams } from "react-router";
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText";
import shopImage from "../../assets/pirarucu.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import BaseImage from "../../components/atom/BaseImage";
import BaseButton from "../../components/atom/BaseButton";
import { format } from "date-fns";
import VendorCard from "../../components/molecule/VendorCard";


interface User {
    name: string;
}

interface Vendor {
    user: User
    rating: number
}

interface ProductInfo {
    id: number;
    price: number;
    name: string;
    stock: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
    vendor: Vendor;
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
    console.log(product.vendor)
    return (
        <Base $gap={1} $background="transparent">
            <Base $borderRadius={12} $height="fit-content" $padding="2rem 6rem 16rem 2rem" $width="full">
                <Base $justifyContent="space-between" $flexDirection="row">
                    <Base $alignItems="center" $width="50%" $gap={4}>
                        <BaseText $fontSize={24} $fontWeight="bold">{product.name}</BaseText>
                        <BaseText>{product.description}</BaseText>
                        <BaseButton>Comprar</BaseButton>
                    </Base>
                    <Base $width="fit-content" $alignItems="center" $gap={1.5}>
                        <BaseImage src={shopImage} $width="24rem" $height="18rem"/>
                        <VendorCard vendorName={product.vendor.user.name} vendorImageUrl="" />
                        <BaseText>Anunciado em: {format(new Date(product.announcedAt), "dd/MM/yyyy")}</BaseText>
                    </Base>
                </Base>
            </Base>
            <Base $borderRadius={12} $height="fit-content" $padding="2rem 6rem 16rem 2rem" $width="full">
                <BaseText $textAlign="center">Mais do mesmo vendedor:</BaseText>
            </Base>
        </Base>
    )
}

export default ProductPage