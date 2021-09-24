import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerCard, ContainerShadowImage, Title } from './Style';

export default function CardTrend(props) {
    return (
        <>
            <Link to={props.link}>
                <ContainerCard>
                    <img src={props.image} />

                    {/* Shadow */}
                    <ContainerShadowImage></ContainerShadowImage>

                    <Title>{props.title}</Title>
                </ContainerCard>
            </Link>
        </>
    );
}
