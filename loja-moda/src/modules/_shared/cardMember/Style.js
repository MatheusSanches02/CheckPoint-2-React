import styled from "styled-components";

export const ContainerCard = styled.div`
    border-radius: 7px;
    cursor: pointer;
    transition: var(--transition);
    border: solid 1px var(--border-light);
    
    &:hover
    {
        box-shadow: var(--shadow);
    }
`;

export const ContainerImage = styled.div`
    height: 300px;
    background-color: red;

    img 
    {
        height: 100%;
        width: 100%;
        border-radius: 7px 7px 0 0;
    }
`;

export const ContainerMessages = styled.div`
    padding: 14px;
    box-sizing: border-box;
`;

export const Name = styled.h2`
    font-size: 17px;
    font-family: 'Courgette', cursive;
    color: var(--font);
`;

export const Message = styled.h4`
    font-size: 15px;
    line-height: 1.5;
    margin-top: 12px;
    color: var(--font-light);
`;