import React from 'react';
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
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fhome%2Fmale_banner.jpg?alt=media&token=1fd28b7d-fae9-4095-89b0-d5b0dba0906e"
                        title="Moda masculina"
                        link="/men">
                    </CardTrend>
                    
                    {/* Card Feminino */}
                    <CardTrend 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fhome%2Fmodel_banner.jpg?alt=media&token=1b9b16b9-8cfc-4ed6-a9c1-0e5b2f227504"
                        title="Moda feminina"
                        link="/women">
                    </CardTrend>
                    
                    {/* Card Infantil */}
                    <CardTrend 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fhome%2Fchild_banner.jpg?alt=media&token=56189656-d241-4d8b-88f1-ee49cd05db70"
                        title="Moda infantil"
                        link="/child">
                    </CardTrend>
                </ContainerCards>
            </ContainerPage>
        </>
    );
}
