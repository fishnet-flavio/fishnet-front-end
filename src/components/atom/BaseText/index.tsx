import styled from "styled-components";

const BaseText = styled.h2<{ 
    $color?: string;
    $fontSize?: number;
    $fontWeight?: string;
    $textAlign?: string;
    }>`
    color: ${props => props.$color ? props.$color : "#000"};
    font-size: ${props => props.$fontSize ? `${props.$fontSize}px` : "12px"};
    font-weight: ${props => props.$fontWeight ? `${props.$fontWeight}` : "normal"};
    word-break: normal;
    text-align: ${props => props.$textAlign ? props.$textAlign : ""};
`

export default BaseText