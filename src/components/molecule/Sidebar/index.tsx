import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import { IoMdHome } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import BaseText from "../../atom/BaseText";
import styled from "styled-components";


interface Item {
    icon: JSX.Element;
    name: string;
    link: string;
}

const SidebarItems: Item[] = [
    {
        icon: <CiLogin size={32} color="#000"/>,
        name: "Login",
        link: "/login"
    },
    {
        icon: <IoMdHome size={32} color="#000"/>,
        name: "Home",
        link: "/"
    }
]

const SideBarDiv = styled.div`
    .side-menu {
        background: #fff; 
        position: fixed; 
        display: flex;
        flex-direction: column;
        height: 100vh;
        gap: 2rem;
        padding: 2rem 0 0 4rem;
        width: 12rem;
        margin: 12.2rem 15rem 0 0;
        left: -100%;
        transition: 850ms;
    }

    .side-menu.active {
        left: 0;
        transition: 350ms;
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
                    <Base $borderRadius={12} $flexDirection="row" $gap={2} $alignItems="center" className="hover">
                        {item.icon}
                        <BaseText $color="#000" $fontWeight="bold">{item.name}</BaseText>
                    </Base>
                </Link>
            )}
            </Base>
        </SideBarDiv>
    )
}

export default Sidebar