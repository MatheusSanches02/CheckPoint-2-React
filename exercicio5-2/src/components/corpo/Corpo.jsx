import React from 'react'
import { Coberturas, CorpoSorveteria, Sabores } from './styledCorpo'

export default function Corpo(props) {

    const sabores = props.sorvetes.map(
        (s,i) => 
        <li key={i}>{i+1} - {s}</li>
    )

    const coberturas = props.coberturas.map(
        (c,i) => 
        <li key={i}>{i+1} - {c}</li>
    )

    return (
        <div>
            <CorpoSorveteria>
                <Sabores>
                    <h1>Sabores</h1>
                    <h2>{sabores}</h2>
                </Sabores>
                <Coberturas>
                    <h1>Coberturas</h1>
                    <h2>{coberturas}</h2>
                </Coberturas>
            </CorpoSorveteria>
        </div>
    )
}
