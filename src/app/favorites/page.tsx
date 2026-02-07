"use client";

import { useMemo } from "react";
import { useFavoritePokemon } from "@/hooks/useFavoritePokemon";
import { usePokemonList } from "@/hooks/usePokemonList";
import BackButton from "@/components/BackButton";
import { FaTrashAlt } from "react-icons/fa";
import { FavoriteSkeleton } from "./_components/FavoriteSkeletonLoading";
import { FavoriteCard } from "./_components/FavoriteCard";
import FavariteEmpty from "./_components/FavariteEmpty";

export default function FavoritePage() {
    const { favorite, removeFavorite, clearAll } = useFavoritePokemon();
    const { pokemonList, loading } = usePokemonList(151);

    const favoriteData = useMemo(() => {
        if (!pokemonList || favorite.length === 0) return [];
        return pokemonList.filter(p =>
            favorite.some(favName => favName.toLowerCase() === p.name.toLowerCase())
        );
    }, [pokemonList, favorite]);

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">

                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div className="space-y-2">
                            <BackButton />
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Favorites</h1>
                        </div>
                        {favoriteData.length > 0 && (
                            <button
                                onClick={clearAll}
                                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium text-sm cursor-pointer">
                                <FaTrashAlt /> Clear All
                            </button>
                        )}
                    </header>

                    {loading ? (
                        <FavoriteSkeleton />
                    ) : favoriteData.length === 0 ? (
                        <FavariteEmpty />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {favoriteData.map(poke => (
                                <FavoriteCard
                                    key={poke.id}
                                    poke={poke}
                                    onRemove={removeFavorite}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}