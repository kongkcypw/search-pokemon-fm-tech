import Link from "next/link";

interface PokemonNotFoundProps {
    pokemonName?: string;
}

export default function PokemonNotFound({ pokemonName }: PokemonNotFoundProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-16 text-center">
            <div className="mb-6">
                <span className="text-6xl">🔍</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Pokémon Not Found
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-md">
                {pokemonName
                    ? `We searched far and wide, but couldn't find any Pokémon named "${pokemonName}".`
                    : "We searched far and wide, but couldn't find the Pokémon you're looking for."}
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
                Go Back Home
            </Link>
        </div>
    );
}
