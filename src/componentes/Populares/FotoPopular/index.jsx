import React from 'react'

export default function FotoPopular({fotoPopular, styles}) {
  return (
    <li key={fotoPopular.id} >
        <img src={fotoPopular.path} alt={fotoPopular.alt} className={styles.populares__imagens__imagem}/>
    </li>
  )
}
