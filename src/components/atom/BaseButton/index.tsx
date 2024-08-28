import styled from "styled-components";

const BaseButton = styled.button<{
    $padding?: string;
    $width?: string;
    $height?: string;
    $borderRadius?: string;
    $background?: string;
    $border?: string;
    $color?: string;
    $selected?: boolean;
    $margin?: string;
    }>`
    margin: ${props => props.$padding || '0'}
    padding: ${props => props.$padding || '0'};
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '4rem'};
    border-radius: ${props => props.$borderRadius ? `${props.$borderRadius}` : '12px'};
    border: ${props => props.$border || '2px solid #ffaaff'};
    background: ${props => props.$selected ? '#ffaaff' : props.$background || '#000'};
    cursor: pointer;
    color: ${props => props.$color || '#fff'};
    font-size: 20px;
    box-shadow: 10px 5px 5px #d1cfce;
    font-weight: bold;
    text-transform: capitalize;
    transition: 0.5s;
    user-select: none;
    text-align: center;
    &:hover {
        background: ${props => props.$selected ? '#ffaaff' : props.$background || '#fff'};
        color: #000;
        font-size: 24px;
    }
`

export default BaseButton