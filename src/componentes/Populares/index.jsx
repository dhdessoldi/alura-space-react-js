import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'
import FotoPopular from './FotoPopular'
import Botao from '../Botao'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map((fotoPopular) => {
                return (
                    <FotoPopular key={fotoPopular.id} styles={styles} fotoPopular={fotoPopular}/>
                )
            })}
        </ul>
        <Botao>Ver mais fotos</Botao>
    </aside>
  )
}
