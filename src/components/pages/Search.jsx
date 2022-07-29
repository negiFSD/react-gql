import {  gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocation($name:String){
  characters(filter:{
    name: $name
  }){
    results{ 
      location{
        name
      }}
  }
}

`

function Search() {
    const [name,setName] = useState('Morty Smith')
    const [getLocations,{loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {variables:{
        name
    }})

    console.log({loading, error, data, called})
  return (
    <div>
        <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='input'></input>
        <button onClick={getLocations}>Search</button>
    </div>
  )
}

export default Search