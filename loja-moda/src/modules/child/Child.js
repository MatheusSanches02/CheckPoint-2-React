import React from 'react';
import CardClothe from '../_shared/cardClothe/CardClothe';
import { ContainerCards, ContainerPage, Title } from './Style';

export default function Child() {
    return (
        <>
            <ContainerPage>
                <Title>Produtos infantil</Title>
                
                {/* Listagem dos cards */}
                <ContainerCards>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage01.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$699,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage02.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$839,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage03.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$499,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage04.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$249,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage05.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$490,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage06.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$399,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage07.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$459,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage08.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$999,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage09.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$299,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage10.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$389,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage11.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$340,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage12.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$349,00">
                    </CardClothe>
                    <CardClothe 
                        image="https://firebasestorage.googleapis.com/v0/b/fover-1349a.appspot.com/o/fiap%2Fchild%2Fimage13.jpg?alt=media&token=8c35382e-c3dc-4645-974e-84fd1099dce6"
                        price="R$899,00">
                    </CardClothe>
                </ContainerCards>
            </ContainerPage>
        </>
    );
}
