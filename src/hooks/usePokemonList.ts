"use client";

import { useQuery } from '@apollo/client/react';

import { GET_POKEMON_LIST } from "@/graphql/queries";
import { GetPokemonListData } from '@/types/pokemon';

export function usePokemonList(limit: number) {
    const { data, loading, error } = useQuery<GetPokemonListData>(GET_POKEMON_LIST, {
        variables: {
            first: limit
        },
    })

    const pokemonList = data?.pokemons || [];

    return { pokemonList, loading, error };
}