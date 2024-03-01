import { styled } from "styled-components"


const Base = styled.div<{ 
    $padding?: string;
    $height?: number; 
    $width?: number; 
    $background?: string;
    $borderRadius?: number;
    $boxShadow?: boolean;
    $alignItems?: string;
    $justifyContent?: string;
    $gap?: number;
    $flexDirection?: string;
    }>`
    display: flex;
    padding: ${props => props.$padding ? `${props.$padding}` : "3rem"};
    width: ${props => props.$width ? `${props.$width}rem` : "full"};
    height: ${props => props.$height ? `${props.$height}rem` : "2rem"};
    background: ${props => props.$background ? props.$background : "#fff"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : 0};
    box-shadow: ${props => props.$boxShadow ? "10px 5px 5px #EAE9E8" : "0"};
    align-items: ${props => props.$alignItems ? props.$alignItems : ""};
    justify-content: ${props => props.$justifyContent ? props.$justifyContent : ""};
    gap: ${props => props.$gap ? `${props.$gap}rem` : "0"};
    flex-direction: ${props => props.$flexDirection ? props.$flexDirection : "column"};
`

export default Base