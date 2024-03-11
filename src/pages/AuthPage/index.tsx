import { Outlet } from "react-router"
import Base from "../../components/atom/Base"

const AuthPage = () => {
    return (
        <Base $background="#f0eeee" $height="100vh">
            <Base $background="#f0eeee" $padding="0 2rem" $width="full">
                <Outlet />
            </Base>
        </Base>
    )
}

export default AuthPage