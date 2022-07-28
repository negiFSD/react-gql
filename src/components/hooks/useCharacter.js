import {useQuery, gql } from '@apollo/client'



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

export  const useCharacter=()=>{    
    const {loading, error, data} = useQuery(GET_CHARACTERS);

    return{
        error, data, loading
    }
}



