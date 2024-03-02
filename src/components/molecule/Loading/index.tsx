import Base from "../../atom/Base"
import loading from "../../../assets/loading.gif";

const Loading = () => {
    return (
    <Base $background="transparent" $width="fit-content">
        <img src={loading} />
    </Base>
    )
}

export default Loading