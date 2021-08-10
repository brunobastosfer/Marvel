import React from 'react'
import Character from '../../Components/Character' 
import { useRouter } from 'next/router'

const Info = () => {
  const { query } = useRouter()
  return (
    <Character id={ query } />
  )
}

export default Info;