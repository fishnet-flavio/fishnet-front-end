import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import BaseImage from "../../atom/BaseImage";
import logo from "../../../assets/fishnet-logo.png";
import { useState } from "react";
import { styled } from "styled-components";
import Sidebar from "../Sidebar";
import IconHoverCard from "../IconHoverCard";

interface User {
    id: string;
    name: string,
    userPhoto?: string
}

const NavItem = styled.span`
    &::after {
        content: "";
        display: block;
        border-radius: 2px;
        margin-top: 2px;
        background: #000;
        height: 4px;
        width: 100%;
        transform: scaleX(0);
        transition: .3s;
        transform-origin: center;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`

const Navbar = () => {
    const currentUser: User = {name: "user", id: "user123"};
    const [sidebar, setSidebar] = useState<boolean>(false);

    const changeSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
    <>
        <Base $zIndex={3} $width="100%" $position="fixed" $overflowY="clip" $flexDirection="row" $padding="1rem 3rem" $height="6rem" $margin="0 0 3rem " $alignItems="center" $justifyContent="space-between">
            <Base $flexDirection="row" $alignItems="center" $gap={5} $width="fit-content" $height="100%">
                <IoMdMenu color={"#000"} cursor={"pointer"} size={32} className="hover" onClick={changeSidebar} />
                <Link to="/">
                    <NavItem>
                        <BaseImage src={logo} $width="12rem" $height="10rem" />
                    </NavItem>
                </Link>
            </Base>
            <Base $width="fit-content" $flexDirection="row" $alignItems="center" $gap={5} $margin="0 6rem 0 0" >
                <Link to={`${currentUser.id}/wishlist`}>
                    <NavItem>
                        <BaseText $fontSize={20} >Lista de Desejos</BaseText>
                    </NavItem>
                </Link>
                <Link to={`${currentUser.id}/shopping-cart`}>
                    <NavItem>
                        <FaShoppingCart color={"#000"} cursor={"pointer"} size={32} />
                    </NavItem>
                </Link>
                <Link to={currentUser ? `${currentUser.id}/profile` : "/login"}>
                    <NavItem>
                        <FaRegUserCircle color={"#000"} cursor={"pointer"} size={32} />
                    </NavItem>
                </Link>
            </Base>
        </Base>
        <Sidebar active={sidebar} />
    </>
    )
}

export default Navbar;