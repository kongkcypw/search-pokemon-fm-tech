import PokemonNotFound from "../_components/PokemonNotFound";
import apolloClient from "@/lib/apollo-client";
import { GetPokemonDetailData } from "@/types/pokemon";
import { GET_POKEMON_DETAILS } from "@/graphql/queries";
import PokemonDetailHeader from "../_components/PokemonDetailHeader";
import PokemonAttack from "../_components/PokemonAttack";
import PokemonEvolution from "../_components/PokemonEvolution";

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
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 space-y-12">
                    <PokemonDetailHeader pokemon={pokemon} />
                    <PokemonAttack pokemon={pokemon} />
                    <PokemonEvolution pokemon={pokemon} />
                </div>
            </div>
        </main>
    );
}