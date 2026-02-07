import { gql } from "@apollo/client";

export const GET_POKEMON_DETAILS = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_LIST = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
    }
  }
`;