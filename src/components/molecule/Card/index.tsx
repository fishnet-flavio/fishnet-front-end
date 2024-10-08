import { useState, useEffect } from "react";
import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import VendorCard from "../VendorCard";
import shopImage from "../../../assets/barco.png"
import productPlaceHolderImage from "../../../assets/pirarucu.jpg";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { HandleFavorite } from "./handleFavorite";
import IconHoverCard from "../IconHoverCard";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import getProfile from "../../../pages/UserProfilePage/getProfile"
import fetchProfilePicture from "../../../pages/UserProfilePage/fetchProfilePicture";
import fetchProductImage from "../../../pages/ProductPage/fetchProductImage";
import Modal from "../Modal";
import { HandleAddToCart } from "./handleAddToCart";
import { api } from "../../../services/api";
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
    const [user, setUser] = useState<User>({ id: 2, imageUrl: "AAA", name: "Test" });
    const [userProfilePicture, setUserProfilePicture] = useState<string>("");
    const [productImage, setProductImage] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getProfile();
                if (profile) {
                    setUser(profile);

                    // Fetch the user's wishlist to determine if the current product is favorited
                    const wishlistResponse = await api.get<{ wishList: { productId: number }[] }>(`/user/${profile.id}/wishlist`);
                    const wishList = wishlistResponse.data.wishList.map(item => item.productId);

                    // Check if this product is in the user's wishlist
                    if (wishList.includes(props.id)) {
                        setFavorite(true);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUserProfile();
    }, [props.id]);

    useEffect(() => {
        const getProfilePicture = async () => {
            const profilePicture = await fetchProfilePicture(props.vendor.id);
            if (profilePicture) {
                setUserProfilePicture(profilePicture);
            }
        };
        getProfilePicture();
    }, [props.vendor.id]);

    useEffect(() => {
        const getProductImage = async () => {
            const productImage = await fetchProductImage(props.id);
            if (productImage) {
                setProductImage(productImage);
            }
        };
        getProductImage();
    }, [props.id]);

    const handleFavorite = async (productId: number, fav: boolean, userId: number) => {
        await HandleFavorite(productId, fav, userId);
        setFavorite(!favorite);
    };

    const handleCart = () => {
        setIsModalOpen(true);
    };

    const handleConfirm = (quantity: number) => {
        setSelectedQuantity(quantity);
        createCart();
    };

    const createCart = async () => {
        const cart = await HandleAddToCart(user.id, props.id, selectedQuantity);
        if (cart) {
            navigate(`${user.id}/shopping-cart`);
        }
    };

    return (
        <CardBase $mini={props.mini}>
            <Base $width="fit-content" $height="max-content" $gap={2} $zIndex={1}>
                <BaseImage src={productImage ? productImage : productPlaceHolderImage} $width="16rem" $height="12rem" />
                <VendorCard vendorImageUrl={userProfilePicture ? userProfilePicture : shopImage} vendorName={props.vendor.user.name} />
                <BaseText>Avaliação do vendedor:</BaseText> 
                <BaseText $fontWeight="bold" $fontSize={32} $color={props.vendor.rating >= 70 ? "#09e409a6" : "#fb0" }>
                    {props.vendor.rating}
                </BaseText>
            </Base>
            <Base $gap={2} $height="max-content" $maxWidth="100%" $zIndex={1}>
                <BaseText $fontSize={24} $fontWeight="bold">{props.name}</BaseText>
                <Base $overflowY="scroll" $boxSizing="content-box" $maxHeight="15rem" $padding="0 2rem 0 0">
                    <BaseText $textAlign="justify">{props.description}</BaseText>
                </Base>
                {props.stock > 0 ? 
                    <BaseText $fontSize={16}>Estoque: {props.stock}</BaseText> :
                    <BaseText $color="#f04" $fontWeight="bold" $fontSize={16}>Sem estoque</BaseText>
                }
                <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
                <Link to={`/${props.vendor.id}/sale/${props.id}`}>
                    <BaseButton onClick={() => window.scrollTo(0, 0)}>Ver mais</BaseButton>
                </Link>
            </Base>
            <IconBase>
                {favorite ? 
                <IconHoverCard icon={<FaHeart cursor={"pointer"} size={32} color="#f04" onClick={() => handleFavorite(props.id, false, user.id)} className="hover" />} hoverText="Desfavoritar" />
                :
                <IconHoverCard icon={<FaRegHeart cursor={"pointer"} size={32} onClick={() => handleFavorite(props.id, true, user.id)} className="hover" />} hoverText="Favoritar" />
                }
                <IconHoverCard icon={<MdAddShoppingCart cursor={"pointer"} size={32} className="hover" onClick={handleCart} />} hoverText="Adicionar no carrinho" />
            </IconBase>

            <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
            />
        </CardBase>
    );
};
export default Card