import Base from "../../components/atom/Base"
import { useEffect, useState } from "react";
import getProfile from "../UserProfilePage/getProfile";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import Card from "../../components/molecule/Card"
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
interface User {
    id: number;
    imageUrl?: string;
    name: string;
}
interface Wishlist{
    id: number;
    userId: number;
    productId: number;
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

const WishlistPage = () => {
    let reloads = 0;
    const [user, setUser] = useState<User>();
    const [items, setItems] = useState<Wishlist[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserAndItems = async () => {
            try {
                const profile = await getProfile(); // Assume this function returns a User object
                if (profile && profile.id) {
                    setUser(profile);
                    const response = await api.get<{ wishList: Wishlist[] }>(`/user/${profile.id}/wishlist`);
                    const wishListData = response.data.wishList;
                    setItems(wishListData);

                    // Fetch product details for each item in the wishlist
                    const fetchProducts = async () => {
                        const productPromises = wishListData.map(async (item) => {
                            const response = await api.get<Product>(`product/${item.productId}`);
                            return response.data;
                        });

                        const productsData = await Promise.all(productPromises);
                        setProducts(productsData);
                    }

                    await fetchProducts();
                } else {
                    throw new Error("Perfil de usuário inválido ou ID ausente.");
                }
            } catch (e) {
                toast.error("Erro ao carregar os dados.", {
                    position: "top-right"
                });
            }
        };

        fetchUserAndItems();
    },[navigate]);
    useEffect(() => {
        if (!user && reloads>20) {
            navigate("/login");
        }
        reloads+=1;
    }, [user, navigate]);


    console.log(items)
    return (<Base  $background="transparent" $flexDirection="row" $justifyContent="space-around" $flexWrap="wrap" $zIndex={1} $gap={2}>
        {products.length > 0 ? (
                products.map((p) => (
                    <Card
                        key={p.id}
                        id={p.id}
                        imageUrl={p.imageUrl}
                        price={p.price}
                        description={p.description}
                        vendor={p.vendor}
                        name={p.name}
                        stock={p.stock}
                    />
                ))
            ) : (
                <p>Nenhum produto encontrado na wishlist.</p>
            )}
    </Base>
    )
}

export default WishlistPage