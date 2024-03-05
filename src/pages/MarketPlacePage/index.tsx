import Card from "../../components/molecule/Card"
import shopImage from "../../assets/pirarucu.jpg"
import Base from "../../components/atom/Base";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Loading from "../../components/molecule/Loading";
import BaseText from "../../components/atom/BaseText";

interface User {
    id: number;
    imageUrl?: string;
    name: string;
}

interface Vendor {
    id: number;
    user: User
    rating: number;
}

interface Product {
    id: number
    imageUrl: string;
    name: string;
    stock: number;
    vendor: Vendor;
    price: number;
    description: string;
}

const MarketPlacePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        try {
            const getData = async () => {
                const fetchProducts = async () => {
                    const response = await api.get("product");
                    setProducts(response.data);
                }
                await fetchProducts();
            }
                getData();
            } catch (e) {
                console.error(e)
            }
        }, [])
        
        return (
            <Base $background="transparent" $flexDirection="row" $justifyContent="space-around" $flexWrap="wrap" $gap={2}>
                {
                    products.length > 0 ? (
                        products.map(p => 
                            <Card
                                key={p.id}
                                id={p.id}
                                imageUrl={shopImage}
                                price={p.price}  
                                description={p.description}
                                vendor={p.vendor}
                                name={p.name}
                                stock={p.stock}
                            />)
                    ) : (
                        <BaseText $fontWeight="bold" $fontSize={24}>Nenhum produto encontrado</BaseText>
                    )
                }
            </Base>
        )
}

export default MarketPlacePage
/*

*/