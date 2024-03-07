import { useEffect, useState } from "react";
import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import VendorCard from "../VendorCard";
import shopImage from "../../../assets/barco.png"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { HandleFavorite } from "./handleFavorite";

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

interface CardProps {
    id: number
    imageUrl: string;
    name: string;
    stock: number;
    vendor: Vendor;
    price: number;
    description: string;
}


const Card = (props: CardProps) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    interface FavProps {
        userId: number,
        productId: number,
    }

    const handleFavorite = (props: FavProps) => {
        setFavorite(!favorite);
        HandleFavorite(props);
    }

    const handleAddToCart = () => {
        
    }

    return (
        <Base $width="45rem" $margin="4rem 0 0 0" $justifyContent="space-between" $flexDirection="row" $padding="2rem" $gap={4} $boxShadow $borderRadius={16} className="responsiveList">
            <Base $width="fit-content" $height="max-content" $gap={2}>
                <BaseImage src={props.imageUrl} $width="16rem" $height="12rem" />
                <VendorCard vendorImageUrl={props.vendor.user.imageUrl ? props.vendor.user.imageUrl : shopImage} vendorName={props.vendor.user.name} />
                <BaseText>Avaliação do vendedor:</BaseText> <BaseText $fontWeight="bold" $fontSize={32} $color={props.vendor.rating >= 70 ? "#09e409a6" : "#fb0" }>{props.vendor.rating}</BaseText>
            </Base>
            <Base $gap={2} $height="max-content" $maxWidth="100%">
                <BaseText $fontSize={24} $fontWeight="bold">{props.name}</BaseText>
                <Base $overflowY="scroll" $maxHeight="15rem" $padding="0 2rem 0 0">
                    <BaseText $textAlign="justify">{props.description}</BaseText>
                </Base>
                {props.stock > 0 ? <BaseText $fontSize={16} >Estoque: {props.stock}</BaseText> : <BaseText $color="#f04" $fontWeight="bold" $fontSize={16}>Sem estoque</BaseText>}
                <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
                <Link to={`/${props.vendor.id}/sale/${props.id}`}>
                    <BaseButton><BaseText $userSelect="none" $fontSize={20} $color="#fff" $fontWeight="bold">Comprar</BaseText></BaseButton>
                </Link>
            </Base>
            <Base $width="fit-content" $gap={2}>
                {favorite ? 
                <FaHeart cursor={"pointer"} size={32} color="#f04" onClick={() => handleFavorite} className="hover" /> :
                <FaRegHeart cursor={"pointer"} size={32} onClick={() => handleFavorite} className="hover" />    
            }
                <MdAddShoppingCart cursor={"pointer"} size={32} className="hover" onClick={handleAddToCart} />
            </Base>
        </Base>
    )
}

export default Card