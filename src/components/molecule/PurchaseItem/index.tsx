import { useEffect, useState } from "react";
import productTemplateImage from "../../../assets/pirarucu.jpg"
import Base from "../../atom/Base";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import fetchProductImage from "../../../pages/ProductPage/fetchProductImage";



interface PurchaseProps {
    id: number;
    productId: number;
    name: string;
    price: number;
    ammountBought: number;
}

const PurchaseItem = (props: PurchaseProps) => {

    const [productImage, setProductImage] = useState<string>("");

    useEffect(() => {
        const getProductImage = async () => {
            const productImage = await fetchProductImage(props.productId);
            if (productImage) {
                setProductImage(productImage);
            }
        }
        getProductImage();
    }, [])

    return (
        <Base $flexDirection="row" $alignItems="center" $padding="2rem" $width="80%" $gap={3} $borderRadius={12} $justifyContent="space-between">
            <Base $width="fit-content" $height="max-content" $gap={2} $zIndex={1}>
                <BaseImage src={ productImage ? productImage : productTemplateImage } $width="12rem" $height="8rem" />
            </Base>
            <BaseText $fontSize={24} $fontWeight="bold">{props.name}</BaseText>
            <BaseText $fontSize={36} $fontWeight="bold">R$ {props.price.toFixed(2)}</BaseText>
            <BaseText>Quantidade comprada: {props.ammountBought}</BaseText>
        </Base>
    )
}

export default PurchaseItem;