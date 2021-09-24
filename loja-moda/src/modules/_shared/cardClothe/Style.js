import styled from "styled-components";

export const ContainerCard = styled.div`
    position: relative;
    height: 340px;
    border-radius: 7px;
    cursor: pointer;
    transition: var(--transition);
    
    &:hover
    {
        box-shadow: var(--shadow);
    }
    
    img
    {
        width: 100%;
        height: 100%;
        border-radius: 7px;
    }
`;

export const ContainerShadowImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000060;
    border-radius: 7px;
`;

export const PriceTag = styled.h2`
    position: absolute;
    bottom: 12px;
    left: 12px;
    color: var(--white);
    font-family: 'Courgette', cursive;
    font-size: 24px;
`;