import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaFish, FaShoppingCart, FaHeart } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import BaseText from "../../atom/BaseText";
import styled from "styled-components";
import { useState } from "react";


interface Item {
    icon: JSX.Element;
    name: string;
    link: string;
    responsive: boolean;
}

interface User {
    id: number;
    name: string;
    userPhoto?: string;
    vendor?: Vendor;
}

interface Vendor {
    id?: number;
    user?: User;
    rating?: number;
}


const SideBarDiv = styled.div`
    .side-menu {
        z-index: 3;
        background: rgba(255,255,255, .9);
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        position: fixed; 
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding: 2rem 1rem;
        width: 12rem;
        margin: 15rem 0 0 0;
        left: -100%;
        transition: 700ms;
    }

    .side-menu.active {
        left: 0;
        transition: 350ms;
    }

    .responsive {
        display: none;

        @media (max-width: 650px) {
            display: flex;
        }
    }
`

const SideMenuItem = styled.div`
    padding: 4px 0 4px .5rem;
    margin-top: .5rem;
    width: 80%;
    border-radius: 8px;
    display: flex;
    position: relative;
    flex-direction: row; 
    gap: 1.5rem; 
    justify-content: left;
    align-items: center;
    transition: .4s;

    &:hover {
        transform: translateX(20px);
    }

    &::before {
        content: "";
        border-radius: 2px;
        position: absolute;
        background: #000;
        display: inline-block;
        height: 80%;
        width: 4px;
        transform: translateX(-40px);
        opacity: 0;
        transition: .3s ease;
    }

    &:hover::before {
        opacity: 100%;
        transform: translateX(-20px);
    }
`

interface SidebarProps {
    active: boolean;
}

const Sidebar = (props: SidebarProps) => {

    const [currentUser, setCurrentUser] = useState<User>({id: 123, name: "Natan"});

    const SidebarUserItems: Item[] = [
        {
            icon: <IoMdHome size={32} color="#000"/>,
            name: "Home",
            link: "/",
            responsive: false
        },
        {
            icon: <FaUserAlt size={32} color="#000"/>,
            name: "Perfil",
            link: "/login",
            responsive: true
        },
        {
            icon: <FaShoppingCart size={32} color="#000"/>,
            name: "Carrinho",
            link: `/${currentUser.id}/shopping-cart`,
            responsive: true
        },
        {
            icon: <FaHeart size={32} color="#000"/>,
            name: "Favoritos",
            link: "/",
            responsive: true
        },
        {
            icon: <FaBagShopping size={32} color="#000"/>,
            name: "Histórico",
            link: "/login",
            responsive: false
        },
    ]

    const SidebarVendorItems: Item[] = [
        {
            icon: <FaFish size={32} color="#000"/>,
            name: "Cadastrar",
            link: `/${currentUser.vendor?.id}/product-register`,
            responsive: false
        },
        {
            icon: <IoIosCash size={32} color="#000"/>,
            name: "Vendas",
            link: "/login",
            responsive: false
        }
    ]

    return (
        <SideBarDiv>
            <Base className={props.active ? "side-menu active" : "side-menu"}>
            {SidebarUserItems.map(
                item => 
                <Link key={item.name} to={item.link} >
                    <SideMenuItem className={`${item.responsive ? "responsive" : ""}`}>
                        {item.icon}
                        <BaseText $color="#000" $fontWeight="bold">{item.name}</BaseText>
                    </SideMenuItem>
                </Link>
            )}
            {currentUser.vendor &&
            SidebarVendorItems.map(
                item => 
                <Link key={item.name} to={item.link} >
                    <SideMenuItem className={`${item.responsive ? "responsive" : ""}`}>
                        {item.icon}
                        <BaseText $color="#000" $fontWeight="bold">{item.name}</BaseText>
                    </SideMenuItem>
                </Link>
            )}
            </Base>
        </SideBarDiv>
    );
}

export default Sidebar