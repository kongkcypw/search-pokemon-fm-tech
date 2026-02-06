export interface Attack {
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
        fast: Attack[];
        special: Attack[];
    };
    evolutions: {
        id: string;
        name: string;
        image: string;
    }[] | null;
}

export interface GetPokemonData {
    pokemon: Pokemon | null;
}