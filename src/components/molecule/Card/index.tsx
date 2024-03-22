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
import IconHoverCard from "../IconHoverCard";
import { styled } from "styled-components";

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
    mini?: boolean;
}

const CardBase = styled.div<{
    $mini?: boolean;
}>`
    position: relative;
    width: 80%;
    scroll-snap-align: center;
    background: #fff;
    margin: auto;
    z-index: 1;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    padding: 2rem;
    gap: 4rem;
    
    border-radius: 16px;
    overflow: hidden;
    transition: 1s;

    &:hover {
        transition: .3s;
    }

    &::before {
        content: "";
        z-index: -1;
        border-radius: 18px;
        background: #fff;
        position: absolute;
        width: 140%;
        height: 50%;
        left: -20%;
        top: 30%;
        transition: .3s;
    }

    &:hover::before {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        transform: scale(1.4);
        animation: rotate 4s ease infinite;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 5px;
        background: #fff;
        border-radius: 16px;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    ${
        props => props.$mini &&
            `
                box-shadow: 10px 5px 5px #d1cfce;
                height: 100%;
            `
    }

    @media (max-width: 880px) {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem 3rem;
        gap: 1rem;

        &::before {
            top: 25%;
            left: -50%;
            width: 200%;
        }
    }

    @media (max-width: 570px) {
        &::before {
            visibility: hidden;
        }
    }
`
const IconBase = styled.div`
    display: flex;
    width: fit-content;
    z-index: 1;
    gap: 2rem;
    flex-direction: column;
    @media (max-width: 880px) {
        flex-direction: row;
        margin-top: 1rem;
    }
`

const Card = (props: CardProps) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    const handleFavorite = (productId: number, fav: boolean) => {
        HandleFavorite(productId, fav).then(
            () => {
                setFavorite(!favorite);
            }
        );
    }

    const handleAddToCart = () => {
        
    }

    return (
        <CardBase $mini={props.mini}>
            <Base $width="fit-content" $height="max-content" $gap={2} $zIndex={1}>
                <BaseImage src={props.imageUrl} $width="16rem" $height="12rem" />
                <VendorCard vendorImageUrl={props.vendor.user.imageUrl ? props.vendor.user.imageUrl : shopImage} vendorName={props.vendor.user.name} />
                <BaseText>Avaliação do vendedor:</BaseText> <BaseText $fontWeight="bold" $fontSize={32} $color={props.vendor.rating >= 70 ? "#09e409a6" : "#fb0" }>{props.vendor.rating}</BaseText>
            </Base>
            <Base $gap={2} $height="max-content" $maxWidth="100%" $zIndex={1}>
                <BaseText $fontSize={24} $fontWeight="bold">{props.name}</BaseText>
                <Base $overflowY="scroll" $boxSizing="content-box" $maxHeight="15rem" $padding="0 2rem 0 0">
                    <BaseText $textAlign="justify">{props.description}</BaseText>
                </Base>
                {
                    props.stock > 0 ? 
                    <BaseText $fontSize={16} >Estoque: {props.stock}</BaseText> : 
                    <BaseText $color="#f04" $fontWeight="bold" $fontSize={16}>Sem estoque</BaseText>
                }
                <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
                <Link to={`/${props.vendor.id}/sale/${props.id}`}>
                    <BaseButton onClick={() => window.scrollTo(0,0)}>Ver mais</BaseButton>
                </Link>
            </Base>
            <IconBase>
                {favorite ? 
                <IconHoverCard icon={<FaHeart cursor={"pointer"} size={32} color="#f04" onClick={() => handleFavorite(props.id, false)} className="hover" />} hoverText="Desfavoritar" />:
                <IconHoverCard icon={<FaRegHeart cursor={"pointer"} size={32} onClick={() => handleFavorite(props.id, true)} className="hover" /> } hoverText="Favoritar" />
                }
                <IconHoverCard icon={<MdAddShoppingCart cursor={"pointer"} size={32} className="hover" onClick={handleAddToCart} />} hoverText="Adicionar no carrinho"/>
            </IconBase>
        </CardBase>
    )
}

export default Card