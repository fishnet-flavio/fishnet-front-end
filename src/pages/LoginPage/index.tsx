import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText"
import LoginCard from "../../components/molecule/LoginCard"

const LoginPage = () => {
    return (
        <Base $background="transparent" $alignItems="center" $margin="4rem 0 0 0">
            <LoginCard />
        </Base>
    )
}

export default LoginPage