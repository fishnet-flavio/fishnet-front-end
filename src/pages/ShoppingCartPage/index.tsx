import Base from "../../components/atom/Base";
import BaseText from "../../components/atom/BaseText";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import getProfile from "../UserProfilePage/getProfile";
import fetchProfilePicture from "../UserProfilePage/fetchProfilePicture";
import ShoppingCartItem from "../../components/molecule/ShoppingCartItem";
import { idText } from "typescript";
import BaseButton from "../../components/atom/BaseButton";
import { useNavigate } from "react-router";

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

interface ProductItem {
    productId: number;
    quantity: number;
}

interface PurchasePayload {
    buyerId: number;
    products: ProductItem[];
}

interface Product {
    id: number
    image: {
        type: string;
        data: Array<number>;
    };
    name: string;
    stock: number;
    vendor: Vendor;
    price: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
}
const ShoppingCartPage = () => {
    const [user, setUser] = useState<User>({ id:1, name: "test" });
    const [items, setItems] = useState<Cart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserAndItems = async () => {
            try {
                const profile = await getProfile();
                if (profile && profile.id) {
                    setUser(profile);
                    const response = await api.get(`/user/${profile.id}/shoppingcart`);
                    const data = response.data[0];
                    setItems(data.shoppingCart);
                } else {
                    throw new Error("Perfil de usuário inválido ou ID ausente.");
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUserAndItems();
    }, []);

    useEffect(() => {
        const calculateTotal = () => {
            const total = items.reduce((sum, item) => sum + item.product.price * item.ammount, 0);
            setTotalPrice(total);
        };
    
        calculateTotal();
    }, [items]);

    const removeFromCart = async (id: number) => {
        await api.delete(`/shoppingcart/${id}`);
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    const handlePurchase = async () => {
        const products: ProductItem[] = items.map((item) => ({
            productId: item.product.id,
            quantity: item.ammount
        }))

        const payload: PurchasePayload = {
            buyerId: user.id,
            products
        }

        try {
            await api.post("/purchase", payload);
            items.forEach(i => {
                removeFromCart(i.id)
            });
            navigate("/");
        } catch(e) {
            console.log("Error: ", e);
        }
    }

    return (
        <Base $alignItems="center" $padding="2rem 0" $borderRadius={6} >
            <BaseText $fontWeight="bold" $fontSize={24}>Carrinho de Compras</BaseText>
            <Base $alignItems="center" $gap={2}>
                    {items && items.length > 0 ? (
                        items.map(i => 
                            <ShoppingCartItem
                                key={i.id}
                                id={i.id}
                                productId={i.product.id}
                                name={i.product.name}
                                price={i.product.price}
                                ammountBought={i.ammount}
                                vendor={i.product.vendor}
                                deleteMethod={removeFromCart}
                            />
                        )
                        
                    ) : (
                        <BaseText $fontWeight="bold" $fontSize={24}>Nenhum item no carrinho</BaseText>
                    )} 
                    <BaseText $fontWeight="bold" $fontSize={24}>Total: R$ {totalPrice.toFixed(2)}</BaseText>
                <Base $width="80%" $flexDirection="row" $gap={8}>
                    <BaseButton onClick={() => {navigate("/")}}>Continuar Comprando</BaseButton>
                    {
                        items.length > 0 ?
                        <BaseButton onClick={handlePurchase}>Finalizar Compra</BaseButton>
                        : ""
                    }
                </Base>
            </Base>
        </Base>
    );
}

export default ShoppingCartPage