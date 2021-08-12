import axios from 'axios';
import Cards from '../Components/Cards'
import React, { useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../Components/styledComponents/backDrop';

import styles from '../styles/Cards.module.css'

export default function Home() {
  const classes = useStyles();
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios
    .get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a5a46f77b0a2c615889849e8dcbbd6a3&hash=072ee912aed22ae2168ea55eaf1ec0e8')
    .then(response => setCharacters(response.data.data.results))
  }, [])

  return (
    <div className={styles.container}>
      {
        characters.length > 0 
        ?characters.map((item, index) => <Cards character={item} key={index} />)
        :
        <Backdrop className={classes.backdrop} open={characters.length === 0}>
          <p>Jarvis está validando suas informações. Por favor aguarde, Tony!</p>
          <img src='https://miro.medium.com/max/861/0*Hwc_uw3VBMICEd84.jpg' width='800' />
          <CircularProgress color='inherit' />
        </Backdrop>
      }
    </div>
  )
}
