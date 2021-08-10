import axios from 'axios';
import Cards from '../Components/Cards'
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios
    .get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a5a46f77b0a2c615889849e8dcbbd6a3&hash=072ee912aed22ae2168ea55eaf1ec0e8')
    .then(response => setCharacters(response.data.data.results))
  }, [])

  return (
    <div>
      {
        characters.length > 0 
        ? <Cards characters={characters} />
        : <p>Aguarde!</p>
      }
    </div>
  )
}
