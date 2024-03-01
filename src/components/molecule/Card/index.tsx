import { useState } from "react";
import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import VendorCard from "../VendorCard";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Vendor {
    imageUrl: string;
    name: string;
    rating: number;
}

interface CardProps {
    imageUrl: string;
    itemName: string;
    stock: number;
    vendor: Vendor;
    price: number;
    description: string;
}

const Card = (props: CardProps) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    const handleFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <Base $width="45rem" $justifyContent="space-between" $flexDirection="row" $padding="2rem 2rem" $gap={4} $boxShadow $borderRadius={16} >
            <Base $width="fit-content" $height="max-content" $gap={2}>
                <BaseImage src={props.imageUrl} />
                <VendorCard vendorImageUrl={props.vendor.imageUrl} vendorName={props.vendor.name} />
                <BaseText>Avaliação do vendedor:</BaseText> <BaseText $fontWeight="bold" $fontSize={32} $color={props.vendor.rating >= 70 ? "#09e409a6" : "#fb0" }>{props.vendor.rating}</BaseText>
            </Base>
            <Base $gap={2} $height="max-content" $maxWidth="100%">
                <BaseText $fontSize={24} $fontWeight="bold">{props.itemName}</BaseText>
                <BaseText $fontSize={16} $textAlign="justify">{props.description}</BaseText>
                {props.stock > 0 ? <BaseText $fontSize={16} >Estoque: {props.stock}</BaseText> : <BaseText $color="#f04" $fontWeight="bold" $fontSize={16}>Sem estoque</BaseText>}
                <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
                <Link to="/vendor/sale/pirarucu">
                    <BaseButton $width="100%" $height="4rem"><BaseText $userSelect="none" $fontSize={16} $color="#fff" $fontWeight="bold">Comprar</BaseText></BaseButton>
                </Link>
            </Base>
            <Base $width="fit-content" $gap={2} >
                {favorite ? 
                <FaHeart cursor={"pointer"} size={32} color="#f04" onClick={handleFavorite} /> :
                <FaRegHeart cursor={"pointer"} size={32} onClick={handleFavorite}/>    
            }
                <FaShoppingCart cursor={"pointer"} size={32} />
            </Base>
        </Base>
    )
}

export default Card