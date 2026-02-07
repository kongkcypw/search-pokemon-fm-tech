import { HttpLink, InMemoryCache } from "@apollo/client";

export const APOLLO_URI = process.env.NEXT_PUBLIC_POKEMON_GRAPHQL_API_URL;

export const getApolloOptions = () => ({
    link: new HttpLink({ uri: APOLLO_URI }),
    cache: new InMemoryCache(),
});