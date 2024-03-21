import { Outlet } from "react-router"
import Base from "../../components/atom/Base"

const AuthPage = () => {
    return (
        <Base $background="linear-gradient(360deg, rgba(1,76,87,1) 0%, rgba(9,102,121,1) 15%, rgba(9,92,121,1) 49%, rgba(0,122,164,1) 100%)" $minHeight="100vh" $height="auto" $padding="0 0 4rem 0">
            <Base $background="transparent" $padding="0 2rem" $width="full">
                <Outlet />
            </Base>
        </Base>
    )
}

export default AuthPage