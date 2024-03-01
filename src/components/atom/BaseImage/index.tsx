import styled from "styled-components";

const BaseImage = styled.img<{
    $width?: string;
    $height?: string;
    $borderRadius?: number;
}>`
    width: ${props => props.$width ? props.$width : "12rem"};
    height: ${props => props.$height ? props.$height : "8rem"};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}px` : "12px"};
`

export default BaseImage