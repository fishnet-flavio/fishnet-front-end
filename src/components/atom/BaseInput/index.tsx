import styled from "styled-components";

const BaseInput = styled.input<{
    $width?: string;
    $height?: string;
    $padding?: string;
    $margin?: string;
    $background?: string;
    $borderRadius?: number;
}>`
    width: ${props => props.$width ? props.$width : "full"};
    height: ${props => props.$height ? props.$height : "1rem"};
    padding: ${props => props.$padding ? props.$padding : "1rem 1rem"};
    margin: ${props => props.$margin ? props.$margin : "0"};
    background: ${props => props.$background ? props.$background : "#fffc"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
`

export default BaseInput