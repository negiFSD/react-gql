import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import { useCharacter } from '../hooks/useCharacter';

const GET_CHARACTERS = gql`
query{
    characters{
      results{
        id
        name
        species
        image
        
      }
    }
  }
    
`

function CharacterList() {
 

    
    const {error, data, loading} = useQuery(GET_CHARACTERS);
    //   loading===false && console.log(data.characters.results )  
    // console.log(error)

  return (
    <div>
        {!error&&loading===false && data.characters.results.map((item)=>(
            <div key={item.id}>
                    <p>{item.species}</p>
        <p key={item.id}>{item.name}</p>
        </div>))}
    </div>
  )
}

export default CharacterList