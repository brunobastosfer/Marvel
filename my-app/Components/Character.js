import React, { useState, useEffect } from 'react'
import axios from 'axios';

import styles from '../styles/Character.module.css'

const Character = ({ id }) => {
  const [info, setInfo] = useState([])

  const urlThumb = info.length > 0 ? info[0].thumbnail.path + '.' + info[0].thumbnail.extension : ''

  const { id: i } = id 
  const url = `https://gateway.marvel.com:443/v1/public/characters/${i}?ts=1&apikey=a5a46f77b0a2c615889849e8dcbbd6a3&hash=072ee912aed22ae2168ea55eaf1ec0e8`
  useEffect(() => {
    axios
    .get(url)
    .then(response => setInfo(response.data.data.results))
  },[url])

  return (
    <div className>
      {
        info.length > 0 
        ?
        <>
          <img className={styles.imageCard} src={ urlThumb } />
          <p>{info[0].name}</p>
        </>
        :<p>Aguarde.</p>
      }
    </div>
  )
}

export default Character