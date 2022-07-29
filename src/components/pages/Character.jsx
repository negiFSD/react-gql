import React from 'react'
import { useParams } from 'react-router-dom'
import { useChar } from '../hooks/useChar'

function Character() {

    const{idd} =useParams()
   const{data, error, loading} =  useChar(idd)
   // console.log(data.character.name)
   console.log(data)


   if(loading){
    return <div>loading</div>
   }
   if(error){
    return <div>something went wrong here</div>
   }
  return (
    <div>  
        <img src={data.character.image} alt='sdf'/>
        <div>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            {data.character.episode.map(episode=>{
               return <div key={Math.random()}>{episode.name}</div>
            })}
        </div>
    </div>
  )
}

export default Character