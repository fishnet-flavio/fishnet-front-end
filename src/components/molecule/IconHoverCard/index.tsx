import styled from "styled-components";
import Base from "../../atom/Base"
import BaseText from "../../atom/BaseText";

interface Props {
    icon: JSX.Element;
    hoverText: string;
}

const HoverBase = styled.div`
    position: relative;
    .card {
        position: absolute;
        --width: 12rem;
        z-index: 5;
        background: #000;
        border-radius: 12px;
        width: var(--width);
        top: -25%;
        left: calc((var(--width)/2 *-1) *2.2);
        align-self: center;
        padding: 1rem .2rem;
        text-align: center;
        position: absolute;
        transition-delay: 0s;
        transition: .4s ease;
        visibility: hidden;
    }  
    &:hover {
        .card {
            visibility: visible;
            transition-delay: 1s;
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