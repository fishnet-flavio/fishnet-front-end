import { Link } from "react-router-dom";
import Base from "../../atom/Base"
import { IoMdHome } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import BaseText from "../../atom/BaseText";


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

const Sidebar = () => {
    return (
        <Base $background="#000" $gap={1} $padding="2rem 1rem" $width="16rem" $margin="0 15rem 0 0">
            {SidebarItems.map(
                item => 
                <Link to={item.link} >
                    <Base $borderRadius={12} $flexDirection="row" $gap={2} $alignItems="center" className="hover">
                        {item.icon}
                        <BaseText $color="black" $fontWeight="bold">{item.name}</BaseText>
                    </Base>
                </Link>
            )}
        </Base>
    )
}

export default Sidebar