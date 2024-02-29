import { styled } from "styled-components"


const BaseCard = styled.div<{ 
    $padding?: string;
    $height?: number; 
    $width?: number; 
    $background?: string;
    $borderRadius?: number;
    }>`
    padding: ${props => props.$padding ? `${props.$padding}rem` : "3rem"};
    width: ${props => props.$width ? `${props.$width}rem` : "full"};
    height: ${props => props.$height ? `${props.$height}rem` : "2rem"};
    background: ${props => props.$background ? props.$background : "#fff"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : 0};
    display: flex;
    box-shadow: 10px 5px 5px #EAE9E8;
`

export default BaseCard