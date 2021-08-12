import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Character.module.css'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styledComponents/backDrop';
import TableSeries from './TableSeries';
import TableFilmes from './TableFilmes';
import { Button } from '@material-ui/core';

const Character = ({ id }) => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  console.log(info)

  const urlThumb = info.length > 0 ? info[0].thumbnail.path + '.' + info[0].thumbnail.extension : ''

  const { id: i } = id 
  const url = `https://gateway.marvel.com:443/v1/public/characters/${i}?ts=1&apikey=a5a46f77b0a2c615889849e8dcbbd6a3&hash=072ee912aed22ae2168ea55eaf1ec0e8`
  useEffect(() => {
    axios
    .get(url)
    .then(response => setInfo(response.data.data.results))
  },[url])

  console.log(info)

  return (
    <div className={styles.container}>
      {
        info.length > 0 
        ?
        <>
          <img className={styles.imageCard} src={ urlThumb } />
          <p>{info[0].name}</p>
          <p>Lista de series:</p>
          <TableSeries series={info[0].series}/>
          <p>Lista de Filmes:</p>
          <TableFilmes filmes={info[0].stories} />
        </>
        : 
        <Backdrop className={classes.backdrop} open={info.length === 0}>
          <CircularProgress color='inherit' />
        </Backdrop>
      }
      <Button className={styles.buttonBack} variant="contained" color="primary" href="/">
        Voltar
      </Button>
    </div>
  )
}

export default Character