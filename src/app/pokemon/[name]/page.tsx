import PokemonDetailView from "../_components/PokemonDetailView";
import PokemonNotFound from "../_components/PokemonNotFound";
import apolloClient from "@/lib/apollo-client";
import { GetPokemonDetailData } from "@/types/pokemon";
import { GET_POKEMON_DETAILS } from "@/graphql/queries";

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
    const { name } = await params;

    const { data } = await apolloClient.query<GetPokemonDetailData>({
        query: GET_POKEMON_DETAILS,
        variables: { name },
    });

    const pokemon = data?.pokemon;
    if (!pokemon) {
        return <PokemonNotFound pokemonName={name} />;
    }

    return (
        <main className="max-w-4xl mx-auto p-8">
            <PokemonDetailView pokemon={pokemon} />
        </main>
    );
}