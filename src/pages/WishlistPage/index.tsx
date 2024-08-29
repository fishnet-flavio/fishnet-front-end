import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText"
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

interface Product {
    id: number
    imageUrl: string;
    name: string;
    stock: number;
    vendor: Vendor;
    price: number;
    description: string;
}
const WishlistPage = () => {
    return (<Base>
        <BaseText>Lista de Desejos</BaseText>
    </Base>
    )
}

export default WishlistPage