import styled from "styled-components";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";

interface Props {
    icon: JSX.Element;
    hoverText: string;
}

const HoverBase = styled.div`
    .card {
    --width: 12rem;
    z-index: 5;
    background: #000;
    border-radius: 12px;
    width: var(--width);
    left: -6rem;
    padding: 1rem;
    text-align: center;
    opacity: 0%;
    bottom: -200%;
    position: absolute;
    transition-delay: 0s;
    transition: .4s ease;
    }  
    &:hover {
        .card {
            transition-delay: 1s;
            transition: .2 ease;
            opacity: 100%;
        }
    }
`

const IconHoverCard = (props: Props) => {
    return (
        <Base $background="transparent" $height="fit-content" $position="relative">
            <HoverBase>
                {props.icon}
                <BaseText $color="#fff" $fontWeight="bold" className="card" $userSelect="none">{props.hoverText}</BaseText>
            </HoverBase>
        </Base>
    )
}

export default IconHoverCard