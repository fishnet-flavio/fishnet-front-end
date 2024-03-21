import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
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

const NavBase = styled.div`
    z-index: 3;
    display: flex;
    background: #fff;
    width: 100%;
    position: fixed;
    overflow-y: clip;
    flex-direction: row;
    height: 6rem;
    padding: 1rem 4rem;
    margin: 0 0 3rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 850px) {
        padding: 2rem 4rem;
    }
`
const IconList = styled.div`
    width: fit-content;
    display: flex;
    background: #fff;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    margin: 0 6rem 0 0;

    @media (max-width: 850px) {
        h2 {
            visibility: hidden;
        }
        margin-top: 1rem;
        gap: 4px;
        flex-direction: column;
    }
`

const NavItem = styled.span`
    &::after {
        content: "";
        display: block;
        border-radius: 2px;
        margin-top: 2px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
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
        <NavBase>
            <Base $flexDirection="row" $alignItems="center" $gap={2} $width="fit-content" $height="100%">
                <IoMdMenu color={"#000"} cursor={"pointer"} size={32} className="hover" onClick={changeSidebar} />
                <Link to="/">
                    <BaseImage src={logo} $width="12rem" $height="10rem" />
                </Link>
            </Base>
            <IconList>
                <Link to={`${currentUser.id}/wishlist`}>
                    <NavItem>
                        <FaHeart cursor={"pointer"} size={32} color="#000" />
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
            </IconList>
        </NavBase>
        <Sidebar active={sidebar} />
    </>
    )
}

export default Navbar;