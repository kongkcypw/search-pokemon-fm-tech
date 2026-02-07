import Link from "next/link";

export default function FeaturedPokemon() {

    const FEATURED_POKEMON = [
        { name: "Bulbasaur", id: "001", image: "https://img.pokemondb.net/artwork/bulbasaur.jpg", borderColor: "border-green-200", hoverColor: "hover:border-green-500" },
        { name: "Charmander", id: "004", image: "https://img.pokemondb.net/artwork/charmander.jpg", borderColor: "border-red-200", hoverColor: "hover:border-red-500" },
        { name: "Squirtle", id: "007", image: "https://img.pokemondb.net/artwork/squirtle.jpg", borderColor: "border-blue-200", hoverColor: "hover:border-blue-500" },
    ];

    return (
        <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-400 text-center mb-4">
                Featured Pokémon
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {FEATURED_POKEMON.map((poke) => (
                    <Link
                        key={poke.id}
                        href={`/pokemon/${poke.name}`}
                        className={`bg-white border-2 ${poke.borderColor} rounded-2xl p-4 flex flex-col items-center group transition-all hover:ring-2 hover:ring-offset-2 hover:ring-transparent ${poke.hoverColor}`}
                    >
                        <div className="relative w-16 h-16 transition-transform group-hover:scale-110">
                            <img
                                src={poke.image}
                                alt={poke.name}
                                className="object-contain"
                            />
                        </div>
                        <span className="mt-2 text-xs font-bold text-gray-700 uppercase">
                            {poke.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}