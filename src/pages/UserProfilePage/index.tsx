import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText"
import { styled } from "styled-components"
import BaseImage from "../../components/atom/BaseImage"
import userImage from "../../assets/user-profile.png"
import { useState } from "react"
import IconHoverCard from "../../components/molecule/IconHoverCard"
import { HiOutlinePencilAlt } from "react-icons/hi";

interface User {
    id: number;
    imageUrl?: any;
    name: string;
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
    gap: 2rem;
    border-radius: 24px;
`

const Edit = styled.span`
    position: absolute;
    right: 2%;
    top: 20px;
    cursor: pointer;
`

const UserProfilePage = () => {
    const params = useParams()
    const [user, setUser] = useState<User>({id: 2, name: "Natan", imageUrl: {userImage}});

    return (
    <ProfileBase>
        <BaseText $fontWeight="bold" $fontSize={24} >Perfil do Usuário</BaseText>
        <Base $alignItems="center" $background="transparent">
            <BaseImage src={userImage} $borderRadius={128} $width="16rem" $height="16rem"/>
            <BaseText $fontSize={16}>{user.name}</BaseText>
        </Base>
        <Edit>
            <IconHoverCard hoverText="Editar" icon={<HiOutlinePencilAlt color="#000" size={32} />}/>
        </Edit>
    </ProfileBase>)
}

export default UserProfilePage