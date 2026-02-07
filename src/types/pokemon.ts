export interface PokemonAttack {
    name: string;
    type: string;
    damage: number;
}

export interface Pokemon {
    id: string;
    name: string;
    image: string;
    types: string[];
    attacks: {
        fast: PokemonAttack[];
        special: PokemonAttack[];
    };
    evolutions: {
        id: string;
        name: string;
        image: string;
    }[] | null;
}

export interface GetPokemonDetailData {
    pokemon: Pokemon | null;
}

export interface PokemonPreview {
    id: string;
    name: string;
    image: string;
}

export interface GetPokemonListData {
    pokemons: PokemonPreview[];
}