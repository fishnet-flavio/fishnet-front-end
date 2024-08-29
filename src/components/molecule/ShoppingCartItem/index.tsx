import { useEffect, useState } from "react";
import shopImage from "../../../assets/barco.png";
import productTemplateImage from "../../../assets/pirarucu.jpg"
import Base from "../../atom/Base";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import VendorCard from "../VendorCard";
import fetchProfilePicture from "../../../pages/UserProfilePage/fetchProfilePicture";
import fetchProductImage from "../../../pages/ProductPage/fetchProductImage";

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

interface CartProps {
    id: number
    imageUrl: string;
    name: string;
    stock: number;
    vendor: Vendor;
    price: number;
    ammountBought: number;
}

const ShoppingCartItem = (props: CartProps) => {

    const [userProfilePicture, setUserProfilePicture] = useState<string>("");
    const [productImage, setProductImage] = useState<string>("");

    useEffect(() => {
        const getProfilePicture = async () => {
            const profilePicture = await fetchProfilePicture(props.vendor.id);
            if (profilePicture) {
                setUserProfilePicture(profilePicture);
            }
        }
        getProfilePicture();
    }, [])

    useEffect(() => {
        const getProductImage = async () => {
            const productImage = await fetchProductImage(props.id);
            if (productImage) {
                setProductImage(productImage);
            }
        }
        getProductImage();
    }, [])

    return (
        <Base>
            <Base $width="fit-content" $height="max-content" $gap={2} $zIndex={1}>
                <BaseImage src={ productImage ? productImage : productTemplateImage } $width="16rem" $height="12rem" />
                <VendorCard vendorImageUrl={ userProfilePicture ? userProfilePicture : shopImage } vendorName={props.vendor.user.name} />
            </Base>
            <Base $gap={2} $height="max-content" $maxWidth="100%" $zIndex={1}>
                <BaseText $fontSize={24} $fontWeight="bold">{props.name}</BaseText>
                <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
            </Base>
            <BaseText>{props.ammountBought}</BaseText>
        </Base>
    )
}

export default ShoppingCartItem;