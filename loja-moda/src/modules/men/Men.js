import React from 'react';
import image01 from '../../assets/images/mens/image01.jpg';
import image02 from '../../assets/images/mens/image02.jpg';
import image03 from '../../assets/images/mens/image03.jpg';
import image04 from '../../assets/images/mens/image04.jpg';
import image05 from '../../assets/images/mens/image05.jpg';
import image06 from '../../assets/images/mens/image06.jpg';
import image07 from '../../assets/images/mens/image07.jpg';
import image08 from '../../assets/images/mens/image08.jpg';
import image09 from '../../assets/images/mens/image09.jpg';
import image10 from '../../assets/images/mens/image10.jpg';
import image11 from '../../assets/images/mens/image11.jpg';
import image12 from '../../assets/images/mens/image12.jpg';
import image13 from '../../assets/images/mens/image13.jpg';
import image14 from '../../assets/images/mens/image14.jpg';
import image15 from '../../assets/images/mens/image15.jpg';
import CardClothe from '../_shared/cardClothe/CardClothe';
import { ContainerCards, ContainerPage, Title } from './Style';

export default function Men() {
    return (
        <>
            <ContainerPage>
                <Title>Produtos masculinos</Title>
                
                {/* Listagem dos cards */}
                <ContainerCards>
                    <CardClothe 
                        image={image01}
                        price="R$699,00">
                    </CardClothe>
                    <CardClothe 
                        image={image02}
                        price="R$839,00">
                    </CardClothe>
                    <CardClothe 
                        image={image03}
                        price="R$499,00">
                    </CardClothe>
                    <CardClothe 
                        image={image04}
                        price="R$249,00">
                    </CardClothe>
                    <CardClothe 
                        image={image05}
                        price="R$490,00">
                    </CardClothe>
                    <CardClothe 
                        image={image06}
                        price="R$399,00">
                    </CardClothe>
                    <CardClothe 
                        image={image07}
                        price="R$459,00">
                    </CardClothe>
                    <CardClothe 
                        image={image08}
                        price="R$999,00">
                    </CardClothe>
                    <CardClothe 
                        image={image09}
                        price="R$299,00">
                    </CardClothe>
                    <CardClothe 
                        image={image10}
                        price="R$389,00">
                    </CardClothe>
                    <CardClothe 
                        image={image11}
                        price="R$340,00">
                    </CardClothe>
                    <CardClothe 
                        image={image12}
                        price="R$349,00">
                    </CardClothe>
                    <CardClothe 
                        image={image13}
                        price="R$899,00">
                    </CardClothe>
                    <CardClothe 
                        image={image14}
                        price="R$499,00">
                    </CardClothe>
                    <CardClothe 
                        image={image15}
                        price="R$999,00">
                    </CardClothe>
                </ContainerCards>
            </ContainerPage>
        </>
    );
}
