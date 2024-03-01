import styled from "styled-components";

const BaseImage = styled.img<{
    $width?: number;
    $height?: number;
    $borderRadius?: number;
}>`
    width: ${props => props.$width ? `${props.$width}rem` : "6rem"};
    height: ${props => props.$height ? `${props.$height}rem` : "4rem"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
`

export default BaseImage