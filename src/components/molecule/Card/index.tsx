import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton";
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";

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
        <Base $width={26} $height={8} $justifyContent="space-between" $flexDirection="row" $padding="4rem 3rem" $gap={5} $boxShadow $borderRadius={16} $alignItems="center">
            <BaseImage src={props.imageUrl}  />
        <div>
            <BaseText $fontSize={24} $fontWeight="bold">{props.itemName}</BaseText>
            <BaseText $fontSize={16} >{props.description}</BaseText>
            <BaseButton><BaseText $fontSize={16} $color="#fff" $fontWeight="bold">Comprar</BaseText></BaseButton>
        </div>
        </Base>
    )
}

export default Card