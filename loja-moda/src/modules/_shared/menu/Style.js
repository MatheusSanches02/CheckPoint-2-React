import styled from "styled-components";

export const ContainerLogo = styled.div`
    img {
        width: 100px;
    }
`;

export const ContainerMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 220px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
    height: 50px;
    background-color: var(--white);
    color: var(--font);
    box-shadow: var(--shadow);
    border: solid 1px var(--border-light);
`;

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerItem = styled.div`
    position: relative;
    height: 50px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 50px;
    transition: var(--transition);
    
    a
    {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--font);
        height: 50px;
    }

    &:last-child
    {
        margin-right: 0;
    }
`;