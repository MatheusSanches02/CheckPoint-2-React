import styled from "styled-components";

export const ContainerPage = styled.div`
    margin-top: 30px;
`;

export const Title = styled.h1`
    font-size: 17px;
`;

export const ContainerCards = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
    
    @media(max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
