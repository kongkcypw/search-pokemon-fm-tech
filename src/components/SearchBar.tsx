"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePokemonList } from "@/hooks/usePokemonList";
import { POKEMON_LIST_LIMIT, POKEMON_SEARCH_LIMIT } from "@/constants/pokemon";

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const { pokemonList } = usePokemonList(POKEMON_LIST_LIMIT);

    // Memoize the filtered list to prevent unnecessary calculations on every render
    const suggestions = useMemo(() => {
        if (!query || query.length < 1 || !pokemonList) return [];

        return pokemonList
            .filter((p: any) => p.name.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, POKEMON_SEARCH_LIMIT);
    }, [query, pokemonList]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/pokemon/${query.trim()}`);
            setIsFocused(false);
        }
    };

    return (
        <div className="relative w-full max-w-md">
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    type="text"
                    value={query}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow clicks
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a Pokémon name..."
                    className="flex-1 p-2 border rounded text-black outline-blue-500"
                />
            </form>

            {/* Suggestion Dropdown */}
            {isFocused && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded mt-1 shadow-lg overflow-hidden">
                    {suggestions.map((pokemon: any) => (
                        <li key={pokemon.id}>
                            <Link
                                href={`/pokemon/${pokemon.name}`}
                                className="block p-2 hover:bg-blue-50 text-black capitalize"
                            >
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}