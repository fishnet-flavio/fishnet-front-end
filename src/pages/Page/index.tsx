import { Outlet } from "react-router"
import Base from "../../components/atom/Base"
import Navbar from "../../components/molecule/Navbar"

const Page = () => {
    return (
        <Base $background="#f0eeee" $height="100vh">
            <Navbar />
            <Base $background="#f0eeee" $padding="10rem 2rem" $width="full">
                <Outlet />
            </Base>
        </Base>
    )
}

export default Page