import React from 'react';
import { ContainerCard, ContainerImage, ContainerMessages, Message, Name } from './Style';

export default function CardMember(props) {
    return (
        <>
            <ContainerCard>

                {/* Image */}
                <ContainerImage>
                    <img src={props.image} />
                </ContainerImage>

                {/* Messages */}
                <ContainerMessages>
                    <Name>{props.name}</Name>

                    <Message>{props.message}</Message>
                </ContainerMessages>
            </ContainerCard>
        </>
    );
}