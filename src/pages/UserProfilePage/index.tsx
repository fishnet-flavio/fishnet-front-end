import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText"
import { styled } from "styled-components"
import BaseImage from "../../components/atom/BaseImage"
import userImage from "../../assets/user-profile.png"
import { useEffect, useState } from "react"
import IconHoverCard from "../../components/molecule/IconHoverCard"
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { FaBagShopping } from "react-icons/fa6"
import getProfile from "./getProfile"
import fetchProfilePicture from "./fetchProfilePicture"

interface User {
    id: number;
    username: string;
    email: string;
    vendor?: Vendor;
}

interface Vendor {
    id: number;
    rating: number;
}

const ProfileBase = styled.div`
    background: #fff;
    position: relative;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
    border-radius: 24px;
`

const Edit = styled.span`
    position: absolute;
    right: 2%;
    top: 20px;
    cursor: pointer;
`

const NavItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s;

    &::before {
        content: "";
        display: block;
        background: rgba(255,255,255, .9);
        margin-bottom: 1rem;
        border-radius: 2px;
        margin-top: 2px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        height: 4px;
        width: 30%;
        transition: .3s;
        transform: scaleX(1);
        transform-origin: center;
    }

    &:hover::before {
        transform: scaleX(0);
    }

    &:hover::after {
        transform: scaleX(0);
    }

    .label {
        visibility: hidden;
    }

    &:hover {
        transform: translateY(.5rem);
        .label {
            visibility: visible;
        }
    }

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

const UserProfilePage = () => {
    const [user, setUser] = useState<User>({ id: 1, email: "test@email.com", username:"test" });
    const [userProfilePicture, setUserProfilePicture] = useState<string>("");
    
    useEffect(() => {
        const getData = async () => {
            const getUserData = async () => {
                setUser(await getProfile());
            }
            await getUserData();
        }
        getData();
    }, [])

    useEffect(() => {
        const getData = async () => {
            const getProfilePicture = async () => {
                const image = await fetchProfilePicture(user.id);
                if (image) {
                    setUserProfilePicture(image);
                }
            }
            await getProfilePicture();
        }
        getData();
    }, [user]);

    return (
    <ProfileBase>
        <BaseText $fontWeight="bold" $fontSize={24} >Perfil do Usuário</BaseText>
        <Base $alignItems="center" $background="transparent">
            <BaseImage src={userProfilePicture ? userProfilePicture : userImage} $borderRadius={128} $width="16rem" $height="16rem"/>
            <BaseText $fontSize={16}>{user.username}</BaseText>
        </Base>
        <Base $background="transparent" $position="relative" $flexDirection="row" $width="fit-content">
            <NavItem>
                <Link to={`/shopping-cart`} >
                    <FaShoppingCart color="#000" size={32} />
                    <BaseText className="label">Meu Carrinho</BaseText>
                </Link>
            </NavItem>
            <NavItem>
                <Link to={`#`} >
                    <FaBagShopping  color="#000" size={32} />
                    <BaseText className="label">Minhas Compras</BaseText>
                </Link>
            </NavItem>
        </Base>
    </ProfileBase>)
}

export default UserProfilePage