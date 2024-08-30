import { useEffect, useState } from "react";
import Base from "../../components/atom/Base";
import BaseText from "../../components/atom/BaseText";
import PurchaseItem from "../../components/molecule/PurchaseItem";
import getProfile from "../UserProfilePage/getProfile";
import { api } from "../../services/api";

interface Vendor {
    id: number;
    name: string;
    rating: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
    image: {
        type: string;
        data: number[];
    };
    vendorId: number;
}

interface PurchaseItem {
    id: number;
    product: Product;
    productId: number;
    purchaseId: number;
    quantity: number;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Purchase {
    id: number;
    date: string;
    items: PurchaseItem[];
    buyerId: number;
}

const MyPurchasesPage = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [user, setUser] = useState<User>({ id: 1, name: "test", email: "test@email.com" });

    useEffect(() => {
        const fetchUserAndPurchases = async () => {
            try {
                const profile = await getProfile();
                if (profile && profile.id) {
                    setUser(profile);
                    const response = await api.get<Purchase[]>(`/purchase/user/${profile.id}`);
                    setPurchases(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUserAndPurchases();
    }, []);

    // Função para calcular o total de uma compra
    const calculateTotal = (items: PurchaseItem[]) => {
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <Base $alignItems="center" $padding="2rem 0" $gap={4} $borderRadius={6} >
            <BaseText $fontWeight="bold" $fontSize={40}>Histórico de Compras</BaseText>
            <Base $alignItems="center" $gap={2}>
                {purchases.length > 0 ? (
                    purchases.map(purchase => (
                        <Base key={purchase.id} $width="80%" $padding="1rem" $borderRadius={16} $alignItems="center" $background="linear-gradient(360deg, rgba(1,76,87,1) 0%, rgba(9,102,121,1) 15%, rgba(9,92,121,1) 49%, rgba(0,122,164,1) 100%)" $gap={1}>
                            <BaseText $fontWeight="bold" $fontSize={32} $color="#fff">Compra {purchase.id}</BaseText>
                            {purchase.items.length > 0 ? (
                                <>
                                    {purchase.items.map(item => (
                                        <PurchaseItem
                                            key={item.id}
                                            id={item.id}
                                            productId={item.productId}
                                            name={item.product.name}
                                            price={item.product.price}
                                            ammountBought={item.quantity}
                                        />
                                    ))}
                                    <BaseText $fontSize={32} $fontWeight="bold" $color="#fff">Total: R$ {calculateTotal(purchase.items).toFixed(2)}</BaseText>
                                </>
                            ) : (
                                <BaseText $fontWeight="bold" $fontSize={32}>Nenhum produto encontrado para esta compra</BaseText>
                            )}
                        </Base>
                    ))
                ) : (
                    <BaseText $fontWeight="bold" $fontSize={24}>Nenhuma compra efetuada</BaseText>
                )}
            </Base>
        </Base>
    );
}

export default MyPurchasesPage;