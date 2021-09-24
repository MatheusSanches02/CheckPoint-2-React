import styled from "styled-components";

export const ContainerPage = styled.div`
    margin-top: 30px;
`;

export const Title = styled.h2`
    font-size: 17px;
    margin-bottom: 24px;
`;

export const Message = styled.h2`
    font-size: 14px;
    line-height: 20px;
`;

export const ContainerMembers = styled.div`
    margin-top: 24px;
`;

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    padding: 0 100px;

    @media(max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;