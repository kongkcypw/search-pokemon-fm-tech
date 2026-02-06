import apolloClient from "@/lib/apollo-client";
import { GET_POKEMON_DETAILS } from "@/graphql/queries";
import { GetPokemonData } from "@/types/pokemon";
import Link from "next/link";

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
    const { name } = await params;

    const { data } = await apolloClient.query<GetPokemonData>({
        query: GET_POKEMON_DETAILS,
        variables: { name: name },
    });

    const pokemon = data?.pokemon;

    if (!pokemon) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-red-600">Pokémon Not Found</h2>
                <p className="mt-2 text-gray-600">We couldn't find any results for "{name}".</p>
                <Link href="/" className="text-blue-500 underline mt-4 block">Go back home</Link>
            </div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <img src={pokemon.image} alt={pokemon.name} className="w-64 h-64 object-contain bg-gray-100 p-4 rounded-lg" />

                <div className="flex-1">
                    <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
                    <div className="flex gap-2 mt-2">
                        {pokemon.types.map(type => (
                            <span key={type} className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {pokemon.evolutions && (
                <div className="mt-12">
                    <h3 className="text-xl font-bold border-b pb-2 mb-4">Evolutions</h3>
                    <div className="flex gap-6">
                        {pokemon.evolutions.map(evo => (
                            <Link key={evo.id} href={`/pokemon/${evo.name}`} className="group">
                                <img src={evo.image} alt={evo.name} className="w-24 h-24 object-contain group-hover:scale-105 transition" />
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{evo.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}