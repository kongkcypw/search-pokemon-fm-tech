"use client";

import { useState, useMemo } from "react"; // Added useEffect
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePokemonList } from "@/hooks/usePokemonList";
import { POKEMON_LIST_LIMIT } from "@/constants/pokemon";
import { SEARCH_SUGGESTION_LIMIT } from "@/constants/search-bar";
import { PokemonPreview } from "@/types/pokemon";

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1); // Track keyboard selection
    const { pokemonList } = usePokemonList(POKEMON_LIST_LIMIT);

    const suggestions = useMemo(() => {
        if (!query || query.length < 1 || !pokemonList) return [];
        return pokemonList
            .filter((p: PokemonPreview) => p.name.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, SEARCH_SUGGESTION_LIMIT);
    }, [query, pokemonList]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestions.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
            e.preventDefault();
            const selectedPokemon = suggestions[selectedIndex];
            router.push(`/pokemon/${selectedPokemon.name}`);
            setIsFocused(false);
            setQuery(selectedPokemon.name);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() && selectedIndex === -1) {
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
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setSelectedIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a Pokémon name..."
                    className="flex-1 p-2 border rounded text-black outline-blue-500"
                />
            </form>

            {isFocused && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded mt-1 shadow-lg overflow-hidden">
                    {suggestions.map((pokemon, index) => (
                        <li key={pokemon.id}>
                            <Link
                                href={`/pokemon/${pokemon.name}`}
                                className={`block p-2 text-black capitalize transition-colors ${index === selectedIndex ? "bg-blue-100" : "hover:bg-blue-50"
                                    }`}
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