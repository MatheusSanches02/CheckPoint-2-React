import React from 'react'
import { Coberturas, CorpoSorveteria, Sabores } from './styledCorpo'

export default function Corpo(props) {

    const sabores = props.sorvetes.map(
        (s) => 
        <li>{s}</li>
    )

    const coberturas = props.coberturas.map(
        (c) => 
        <li>{c}</li>
    )

    return (

            <CorpoSorveteria>
                    <Sabores>
                        <h1>Sabores</h1>
                        <h2>{sabores}</h2>
                    </Sabores>
                    <Coberturas>
                        <h1>Acompanhamentos</h1>
                        <h2>{coberturas}</h2>
                    </Coberturas>
            </CorpoSorveteria>
    )
}
