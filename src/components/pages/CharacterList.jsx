import React from 'react'
import { Link } from 'react-router-dom';
// import { useQuery, gql } from '@apollo/client'
import { useCharacter } from '../hooks/useCharacter';


// const GET_CHARACTERS = gql`
// query{
//     characters{
//       results{
//         id
//         name
//         species
//         image
        
//       }
//     }
//   }
    
// `
function CharacterList() {
     
    // const {error, data, loading} = useQuery(GET_CHARACTERS);
    const {error, data, loading} =   useCharacter()
    //   loading===false && console.log(data.characters.results )  
    // console.log(error)
// console.log(data)
  return (
    <div className="single-card">
   
      
        {!error&&loading===false && data.characters.results.map((item)=>(
          <Link to={`/${item.id}`}>  <div  key={item.id}>
                    <img src={item.image} alt={'SDF'}/>
        <p>{item.name}</p>
        </div></Link>))}
    </div>
  )
}

export default CharacterList