import Base from "../../components/atom/Base";
import BaseText from "../../components/atom/BaseText";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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
const ShoppingCartPage = () => {

    return (
        <Base>
            <BaseText>Carrinho de Compras</BaseText>
        </Base>
    )
}

export default ShoppingCartPage