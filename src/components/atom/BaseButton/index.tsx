import styled from "styled-components";

const BaseButton = styled.button<{
    $width?: number;
    $height?: number;
    $borderRadius?: number;
    $background?: string;
    $border?: string;
    }>`
    width: ${props => props.$width ? `${props.$width}rem` : "6rem"};
    height: ${props => props.$height ? `${props.$height}rem` : "4rem"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
    border: ${props => props.$border ? props.$border : "none"};
    background: ${props => props.$background ? props.$background : "#000"};
`

export default BaseButton