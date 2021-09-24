import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/menu/moda-logo.png';
import { ContainerItem, ContainerLogo, ContainerMenu, ContainerOptions } from './Style';

export default function Menu() {
    return (
        <>
            <ContainerMenu>
                
                {/* Logo Moda */}
                <ContainerLogo>
                    <img src={Logo} title="Loja moda" />
                </ContainerLogo>

                {/*Options*/}
                <ContainerOptions>
                    <ContainerItem><Link to="/">Home</Link></ContainerItem>
                    <ContainerItem><Link to="/men">Modo Maculina</Link></ContainerItem>
                    <ContainerItem><Link to="/women">Modo Feminina</Link></ContainerItem>
                    <ContainerItem><Link to="/child">Modo infantil</Link></ContainerItem>
                    <ContainerItem><Link to="/about">Sobre</Link></ContainerItem>
                </ContainerOptions>
            </ContainerMenu>
        </>
    );
}