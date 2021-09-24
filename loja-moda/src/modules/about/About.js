import React from 'react';
import image01 from '../../assets/images/members/image01.png';
import image02 from '../../assets/images/members/image02.png';
import image03 from '../../assets/images/members/image03.png';
import image04 from '../../assets/images/members/image04.png';
import CardMember from '../_shared/cardMember/CardMember';
import { ContainerCards, ContainerMembers, ContainerPage, Message, Title } from './Style';

export default function Child() {
    return (
        <>
            <ContainerPage>
                <Title>Um pouco sobre a MODA</Title>

                {/* Sobre */}
                <Message>Criada em 2009 em São Paulo, nossa loja é especializada em Moda masculina e feminina. Aqui você encontra roupas, calçados, relógios, bolsas e muito mais da moda. Temos os melhores profissionais para te atender da melhor forma possível. Nossa missão é transformar você em sua melhor versão.</Message>

                {/* Members */}
                <ContainerMembers>
                    <Title>Um pouco sobre os membros</Title>

                    {/* Lista dos cards */}
                    <ContainerCards>

                        {/* Dani Rodrigues */}
                        <CardMember
                            image={image04}
                            name="Danielle Rodrigues"
                            message="Oiii sou a Dani, tenho 19 anos, nasci em São Paulo mas sempre morei em Mogi das Cruzes. Gosto de cozinhar (só doces rs), adoro pintar com tinta a óleo ou aquarela e aprender novos idiomas.">
                        </CardMember>
                        
                        {/* Giovanna França */}
                        <CardMember
                            image={image03}
                            name="Giovanna França"
                            message="Oieee, sou a Gi, meu RM é: 87019, tenho 17 anos e nasci no ano de 2003. Moro em Santana de Parnaíba na região de Aldeia da Serra, gosto de ler e adoro astronomia.">
                        </CardMember>
                        
                        {/* Guilherme Nunes */}
                        <CardMember
                            image={image01}
                            name="Guilherme Nunes"
                            message="Oieee, sou o Gui, meu RM é: 86614, tenho 23 anos e nasci no ano de 1997. Moro em São Bernardo do Campo, gosto de jogar um fute e adoro astronomia.">
                        </CardMember>
                        
                        {/* Matheus Sanches */}
                        <CardMember
                            image={image02}
                            name="Matheus Sanches"
                            message="Eae, eu sou o Matheus mas gosto de ser chamado de Sanches(meu sobrenome), meu RM é: 87426 tenho 18 anos, nascido em 2002, moro em São Paulo desde sempre, na região do Ipiranga, jogo futebol, ando de skate e gosto de rock.">
                        </CardMember>
                    </ContainerCards>
                </ContainerMembers>
            </ContainerPage>
        </>
    );
}
