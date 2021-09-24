import styled from "styled-components";

export const ContainerPage = styled.div`
    margin-top: 30px;
`;

export const Title = styled.h2`
    font-size: 17px;
    margin-bottom: 24px;
`;

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 14px;
    
    @media(max-width: 1250px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media(max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;