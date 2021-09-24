import React from 'react';
import { ContainerCard, ContainerShadowImage, PriceTag } from './Style';

export default function CardClothe(props) {
    return (
        <>
            <ContainerCard>
                <img src={props.image} />

                {/* Shadow Image */}
                <ContainerShadowImage></ContainerShadowImage>

                {/* Preço */}
                <PriceTag>{props.price}</PriceTag>
            </ContainerCard>
        </>
    );
}