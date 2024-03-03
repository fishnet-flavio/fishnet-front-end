import { styled } from "styled-components"


const Base = styled.div<{
    $margin?: string;
    $padding?: string;
    $height?: string;
    $minHeight?: string;
    $maxHeight?: string;
    $width?: string; 
    $background?: string;
    $borderRadius?: number;
    $boxShadow?: boolean;
    $alignItems?: string;
    $justifyContent?: string;
    $gap?: number;
    $flexDirection?: string;
    $flexGrow?: number;
    $maxWidth?: string;
    $flexWrap?: string;
    $position?: string;
    $overflow?: string;
    }>`
    display: flex;
    position: ${props => props.$position ? props.$position : "initial"};
    padding: ${props => props.$padding ? `${props.$padding}` : "0"};
    margin: ${props => props.$margin ? props.$margin : "0"};
    width: ${props => props.$width ? props.$width : "100%"};
    max-width: ${props => props.$maxWidth ? props.$width : "100%"};
    max-height: ${props => props.$maxHeight ? props.$maxHeight : "auto"};
    height: ${props => props.$height ? props.$height : "auto"};
    min-height: ${props=> props.$minHeight ? props.$minHeight : "auto"};
    background: ${props => props.$background ? props.$background : "#fff"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : 0};
    box-shadow: ${props => props.$boxShadow ? "10px 5px 5px #d1cfce" : ""};
    align-items: ${props => props.$alignItems ? props.$alignItems : ""};
    justify-content: ${props => props.$justifyContent ? props.$justifyContent : ""};
    gap: ${props => props.$gap ? `${props.$gap}rem` : "0"};
    flex-direction: ${props => props.$flexDirection ? props.$flexDirection : "column"};
    flex-grow: ${props => props.$flexGrow ? props.$flexGrow : "0"};
    flex-wrap: ${props => props.$flexWrap ? props.$flexWrap : "nowrap"};
    overflow: ${props => props.$overflow ? props.$overflow : "visible"};
    
    .hover {
        transition: .5s;
        &:hover {
            scale: 1.02;
        }
    }
`

export default Base