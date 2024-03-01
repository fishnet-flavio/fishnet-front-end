import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";
import image from "../../../assets/pirarucu.jpg";

interface Vendor {
    name: string
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
    return (
        <Base $width="26rem" $height="8rem" $justifyContent="space-between" $flexDirection="row" $padding="4rem 3rem" $gap={5} $boxShadow $borderRadius={16} $alignItems="center">
            <BaseImage src={image} />
        <div>
            <BaseText $fontSize={24} $fontWeight="bold">{props.itemName}</BaseText>
            <BaseText $fontSize={16} >{props.description}</BaseText>
            <BaseButton $width="100%"><BaseText $fontSize={16} $color="#fff" $fontWeight="bold">Comprar</BaseText></BaseButton>
        </div>
        </Base>
    )
}

export default Card