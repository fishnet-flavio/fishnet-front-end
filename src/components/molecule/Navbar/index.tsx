import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import BaseImage from "../../atom/BaseImage";
import logo from "../../../assets/fishnet-logo.png";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../Sidebar";
import getProfile from "../../../pages/UserProfilePage/getProfile"
import { useNavigate } from "react-router-dom";
interface User {
    id: string;
    name: string,
    userPhoto?: string
}

interface Vendor {
    id: number;
    user: User
    rating: number;
}

const NavBase = styled.div`
    z-index: 3;
    display: flex;
    box-sizing: border-box;
    border-radius: 12px;
    background: rgba(255,255,255, .9);
    width: 100%;
    position: fixed;
    overflow-y: clip;
    flex-direction: row;
    height: 6rem;
    padding: 4rem 2rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 850px) {
        height: fit-content;
        padding: 0 2rem;

        .logo {
            gap: 1.5rem;
        }
    }

    @media (max-width: 650px) {
        .logo {
            width: 100%;
            justify-content: left;
            gap: 4rem;
        }
    }
`
const IconList = styled.div`
    width: fit-content;
    display: flex;
    background: transparent;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    @media (max-width: 850px) {
        h2 {
            visibility: hidden;
        }
        gap: 1rem;
    }

    @media (max-width: 650px) {
        display: none;
    }
`

const NavItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: "";
        display: block;
        background: rgba(255,255,255, .9);
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

    @media (max-width: 850px) {
        .label {
            visibility: hidden;
        }
    }
`


const Navbar = () => {
    let reloads = 0;
    const [currentUser, setCurrentUser] = useState<User>({"id": "1", "name":"fakelogin", "userPhoto":"AAAA"});
    const [sidebar, setSidebar] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const profile = await getProfile();
                if (profile && profile.id) {
                    setCurrentUser(profile);
                } else {
                    throw new Error("Perfil de usuário inválido ou ID ausente.");
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [navigate]);
    useEffect(() => {
        if (currentUser.name=="fakelogin" && reloads>20) {
            navigate("/login");
        }
        reloads+=1;
    }, [currentUser, navigate]);
    const changeSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
    <>
        <NavBase>
            <Base $background="transparent" className="logo" $flexDirection="row" $alignItems="center" $gap={3} $width="fit-content" $height="100%">
                <IoMdMenu color={"#000"} cursor={"pointer"} size={32} className="hover" onClick={changeSidebar} />
                <Link to="/">
                    <BaseImage src={logo} $width="12rem" $height="10rem" />
                </Link>
            </Base>
            <IconList>
                <Link to={`${currentUser.id}/wishlist`}>
                    <NavItem>
                        <FaHeart cursor={"pointer"} size={32} color="#000" />
                        <BaseText className="label">Favoritos</BaseText>
                    </NavItem>
                </Link>
                <Link to={`${currentUser.id}/shopping-cart`}>
                    <NavItem>
                        <FaShoppingCart color={"#000"} cursor={"pointer"} size={32} />
                        <BaseText className="label">Meu carrinho</BaseText>
                    </NavItem>
                </Link>
                <Link to={currentUser ? `${currentUser.id}/profile` : "/login"}>
                    <NavItem>
                        <FaRegUserCircle color={"#000"} cursor={"pointer"} size={32} />
                        <BaseText className="label">Perfil</BaseText>
                    </NavItem>
                </Link>
            </IconList>
        </NavBase>
        <Sidebar active={sidebar} />
    </>
    )
}

export default Navbar;