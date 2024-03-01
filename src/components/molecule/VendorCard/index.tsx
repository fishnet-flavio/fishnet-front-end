import Base from "../../atom/Base"
import BaseImage from "../../atom/BaseImage";
import BaseText from "../../atom/BaseText";

interface VendorCardProps {
    vendorName: string;
    vendorImageUrl: string;
}

const VendorCard = (props: VendorCardProps) => {
    return (
        <Base $width="100%" $flexDirection="row" $alignItems="center" $justifyContent="left" $gap={1}>
            <BaseImage src={props.vendorImageUrl} $width="2rem" $height="2rem" $borderRadius={20} />
            <BaseText>{props.vendorName}</BaseText>
        </Base>
    )
}

export default VendorCard