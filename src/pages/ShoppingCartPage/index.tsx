import Base from "../../components/atom/Base";
import BaseText from "../../components/atom/BaseText";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import getProfile from "../UserProfilePage/getProfile";
import fetchProfilePicture from "../UserProfilePage/fetchProfilePicture";

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

interface Cart {
    id: number,
    ammount: number,
    product: Product,
    addedAt: Date
}

interface Product {
    id: number
    image: {
        type: string;
        data: Array<number>;
    };
    name: string;
    stock: number;
    vendorId: number;
    price: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
}
const ShoppingCartPage = () => {
    const [user, setUser] = useState<User>();
    const [items, setItems] = useState<Cart[]>([]);

    useEffect(() => {
        const fetchUserAndItems = async () => {
            try {
                const profile = await getProfile();
                if (profile && profile.id) {
                    setUser(profile);
                    const response = await api.get(`/user/${profile.id}/shoppingcart`);
                    setItems(response.data);
                } else {
                    throw new Error("Perfil de usuário inválido ou ID ausente.");
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUserAndItems();
    }, []);

    console.log(items);

    return (
        <Base $padding="0 6rem" $borderRadius={6}>
            <BaseText $fontWeight="bold" $fontSize={24}>Carrinho de Compras</BaseText>
            <Base>
                {items && items.length > 0 ? (
                    items.map(i => 
                        i.product ? (
                            <BaseText key={i.id}>{i.product.name}</BaseText>
                        ) : (
                            <BaseText key={i.id}>Produto não encontrado</BaseText>
                        )
                    )
                ) : (
                    <BaseText $fontWeight="bold" $fontSize={24}>Nenhum item no carrinho</BaseText>
                )}
            </Base>
        </Base>
    );
}

export default ShoppingCartPage