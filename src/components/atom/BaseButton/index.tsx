import styled from "styled-components";

const BaseButton = styled.button<{
    $padding?: string;
    $width?: string;
    $height?: string;
    $borderRadius?: number;
    $background?: string;
    $border?: string;
    }>`
    padding: ${props => props.$padding ? props.$padding : "0"};
    width: ${props => props.$width ? props.$width : "100%"};
    height: ${props => props.$height ? props.$height : "4rem"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
    border: ${props => props.$border ? props.$border : "none"};
    background: ${props => props.$background ? props.$background : "#000"};
    cursor: pointer;
    box-shadow: "10px 5px 5px #EAE9E8";
    transition: .5s;
    user-select: none;
    text-align: center;
    border: ${props => `2px solid ${props.$background}`}; 
    &:hover {
        scale: 1.01;
    }
`

export default BaseButton