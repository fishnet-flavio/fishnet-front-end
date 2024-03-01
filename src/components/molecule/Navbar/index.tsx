import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

interface User {
    id: string;
    name: string,
    userPhoto?: string
}

const Navbar = () => {
    const currentUser: User = {name: "user", id: "user123"};

    return (
        <Base $width="full" $flexDirection="row" $padding="0 3rem 1rem" $height="8rem" $margin="0 0 3rem 0" $alignItems="center" $justifyContent="space-between">
            <Link to="/">
                <BaseText $fontSize={44} $userSelect="none" $fontWeight="bold">FishNet</BaseText>
            </Link>
            <Base $width="fit-content" $flexDirection="row" $alignItems="center" $gap={5}>
                <Link to={`${currentUser.id}/wishlist`}>
                    <BaseText $fontSize={20}>Lista de Desejos</BaseText>
                </Link>
                <Link to={`${currentUser.id}/shopping-cart`}>
                    <FaShoppingCart color={"#000"} cursor={"pointer"} size={32} />
                </Link>
                <Link to={currentUser ? `${currentUser.id}/profile` : "/login"}>
                    <FaRegUserCircle color={"#000"} cursor={"pointer"} size={32} />
                </Link>
            </Base>
        </Base>
    )
}

export default Navbar;