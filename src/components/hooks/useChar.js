import { useQuery, gql } from "@apollo/client";


//variable is used in this query

const GET_CHAR = gql`
query
    GetCharById($id:ID!){
    character(id:$id){
        name
        gender
        id
        image
        episode{
        name
        episode
  }
    } 
}
`;

export const useChar = (id)=>{
    const {data, error, loading} = useQuery(GET_CHAR, {variables:{
        id,
    }})

    return {data, error, loading}
}