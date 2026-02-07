import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

interface PokemonEvolutionProps {
    pokemon: Pokemon;
}

export default function PokemonEvolution({ pokemon }: PokemonEvolutionProps) {
    if (!pokemon.evolutions || pokemon.evolutions.length === 0) return (
        <section className="pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Evolution</h3>
            <p className="">{pokemon.name} has no evolution.</p>
        </section>
    )


    return (
        <section className="pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Evolution</h3>
            <div className="flex flex-wrap gap-6">
                {pokemon.evolutions.map(evo => (
                    <Link key={evo.id} href={`/pokemon/${evo.name}`} className="group flex flex-col items-center bg-gray-50 p-6 rounded-2xl border border-gray-100 transition-all hover:bg-blue-50 hover:border-blue-100">
                        <div className="relative w-24 h-24 mb-3 transition-transform group-hover:scale-110">
                            <Image
                                src={evo.image}
                                alt={evo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="font-bold text-gray-700 group-hover:text-black">{evo.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}