import { useParams } from "react-router";
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText";

interface ProductPageProps {
    vendorId: string;
    saleId: string;
}

const ProductPage = () => {
    const params = useParams()
    return (<Base>
        <BaseText>{params.vendorId} : {params.saleId}</BaseText>
    </Base>)
}

export default ProductPage