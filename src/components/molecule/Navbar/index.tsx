import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import BaseImage from "../../atom/BaseImage";
import logo from "../../../assets/fishnet-logo.png";
import { useState } from "react";
import Sidebar from "../Sidebar";

interface User {
    id: string;
    name: string,
    userPhoto?: string
}

const Navbar = () => {
    const currentUser: User = {name: "user", id: "user123"};
    const [sidebar, setSidebar] = useState<boolean>(false);

    const changeSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
    <>
        <Base $width="100%" $position="fixed" $flexDirection="row" $padding="1rem 3rem" $min-height="8rem" $margin="0 0 3rem " $alignItems="center" $justifyContent="space-between">
            <Base $flexDirection="row" $alignItems="center" $gap={5} $width="fit-content" >
                <IoMdMenu color={"#000"} cursor={"pointer"} size={32} className="hover" onClick={changeSidebar} />
                <Link to="/">
                    <BaseImage src={logo} $width="12rem" $height="10rem" />
                </Link>
            </Base>
            <Base $width="fit-content" $flexDirection="row" $alignItems="center" $gap={5} $margin="0 6rem 0 0" >
                <Link to={`${currentUser.id}/wishlist`}>
                    <BaseText $fontSize={20} className="hover" >Lista de Desejos</BaseText>
                </Link>
                <Link to={`${currentUser.id}/shopping-cart`}>
                    <FaShoppingCart color={"#000"} cursor={"pointer"} size={32} className="hover" />
                </Link>
                <Link to={currentUser ? `${currentUser.id}/profile` : "/login"}>
                    <FaRegUserCircle color={"#000"} cursor={"pointer"} size={32} className="hover" />
                </Link>
            </Base>
        </Base>
        <Sidebar active={sidebar} />
    </>
    )
}

export default Navbar;