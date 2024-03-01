import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText"

const UserProfilePage = () => {
    const params = useParams()

    return (<Base>
        <BaseText>Perfil do Usuario {params.userId}</BaseText>
    </Base>)
}

export default UserProfilePage