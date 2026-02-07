import { Pokemon } from "@/types/pokemon";
import Link from "next/link";

interface PokemonDetailViewProps {
    pokemon: Pokemon;
}

export default async function PokemonDetailView({ pokemon }: PokemonDetailViewProps) {

    return (
        <div>
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

            {pokemon.attacks && (
                <div className="mt-12">
                    <h3 className="text-xl font-bold border-b pb-2 mb-4">Attacks</h3>
                    <div className="flex gap-6">
                        {pokemon.attacks.fast.map(attack => (
                            <div key={attack.name} className="group">
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.name}</p>
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.type}</p>
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.damage}</p>
                            </div>
                        ))}
                        {pokemon.attacks.special.map(attack => (
                            <div key={attack.name} className="group">
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.name}</p>
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.type}</p>
                                <p className="text-center mt-2 group-hover:text-blue-600 font-medium">{attack.damage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}