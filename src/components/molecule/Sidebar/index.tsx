import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaFish } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import BaseText from "../../atom/BaseText";
import styled from "styled-components";


interface Item {
    icon: JSX.Element;
    name: string;
    link: string;
    vendorExclusive: boolean;
}

const SidebarItems: Item[] = [
    {
        icon: <IoMdHome size={32} color="#000"/>,
        name: "Home",
        link: "/",
        vendorExclusive: false
    },
    {
        icon: <FaUserAlt size={32} color="#000"/>,
        name: "Perfil",
        link: "/login",
        vendorExclusive: false
    },
    {
        icon: <FaBagShopping size={32} color="#000"/>,
        name: "Histórico",
        link: "/login",
        vendorExclusive: false
    },
    {
        icon: <FaFish size={32} color="#000"/>,
        name: "Cadastrar",
        link: `/${2}/product-register`,
        vendorExclusive: true
    },
    {
        icon: <IoIosCash size={32} color="#000"/>,
        name: "Vendas",
        link: "/login",
        vendorExclusive: true
    }
]

const SideBarDiv = styled.div`
    .side-menu {
        z-index: 3;
        background: #fff;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        position: fixed; 
        display: flex;
        flex-direction: column;
        height: fit-content;
        gap: .5rem;
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
`

const SideMenuItem = styled.div`
    padding: 4px .5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row; 
    gap: 1.5rem; 
    justify-content: left;
    align-items: center;
    transition: .4s;
    border: 1px solid #fff;

    &:hover {
        transition: .2s ease-out;
        border: 1px solid #000;
        gap: 2rem;
    }
`

interface SidebarProps {
    active: boolean;
}

const Sidebar = (props: SidebarProps) => {
    return (
        <SideBarDiv>
            <Base className={props.active ? "side-menu active" : "side-menu"}>
            {SidebarItems.map(
                item => 
                <Link key={item.name} to={item.link} >
                    <SideMenuItem>
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