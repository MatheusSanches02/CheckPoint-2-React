import React from 'react';
import ChildBanner from '../../../../assets/images/home/child_banner.jpg';
import MaleBanner from '../../../../assets/images/home/male_banner.jpg';
import ModelBanner from '../../../../assets/images/home/model_banner.jpg';
import CardTrend from '../cardTrend/CardTrend';
import { ContainerCards, ContainerPage, Title } from './Style';

export default function Trend() {
    return (
        <>
            <ContainerPage>
                <Title>TENDÊNCIAS DA TEMPORADA</Title>

                <ContainerCards>

                    {/* Card Masculino */}
                    <CardTrend 
                        image={MaleBanner}
                        title="Moda masculina"
                        link="/men">
                    </CardTrend>
                    
                    {/* Card Feminino */}
                    <CardTrend 
                        image={ModelBanner}
                        title="Moda feminina"
                        link="/women">
                    </CardTrend>
                    
                    {/* Card Infantil */}
                    <CardTrend 
                        image={ChildBanner}
                        title="Moda infantil"
                        link="/child">
                    </CardTrend>
                </ContainerCards>
            </ContainerPage>
        </>
    );
}
