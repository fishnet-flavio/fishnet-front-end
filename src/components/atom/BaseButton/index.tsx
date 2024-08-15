import styled from "styled-components";

const BaseButton = styled.button<{
    $padding?: string;
    $width?: string;
    $height?: string;
    $borderRadius?: number;
    $background?: string;
    $border?: string;
    $color?: string;
    }>`
    padding: ${props => props.$padding ? props.$padding : "0"};
    width: ${props => props.$width ? props.$width : "100%"};
    height: ${props => props.$height ? props.$height : "4rem"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
    border: ${props => props.$border ? props.$border : "2px solid #ffaaff"};
    background: ${props => props.$background ? props.$background : "#000"};
    cursor: pointer;
    color: ${props=> props.$color ? props.$color:"#fff"};
    font-size: 20px;
    box-shadow: "10px 5px 5px #d1cfce";
    font-weight: bold;
    text-transform: capitalize;
    transition: .5s;
    user-select: none;
    text-align: center;
    &:hover {
        background: #fff;
        color: #000;
        font-size: 24px;
    }
`

export default BaseButton