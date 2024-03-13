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
    z-index: 2;
    background: #000;
    border-radius: 12px;
    width: var(--width);
    left: calc((var(--width)/2 *-1) + .5rem);
    align-self: center;
    padding: 1rem .2rem;
    text-align: center;
    bottom: -160%;
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