"use client";

import Image from "next/image";

import BackButton from "@/components/BackButton";
import { useFavoritePokemon } from "@/hooks/useFavoritePokemon";
import { Pokemon } from "@/types/pokemon";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface PokemonDetailHeaderProps {
    pokemon: Pokemon;
}

export default function PokemonDetailHeader({ pokemon }: PokemonDetailHeaderProps) {

    const { isFavorite, addFavorite, removeFavorite } = useFavoritePokemon();
    const favorited = isFavorite(pokemon.name);

    const handleFavorite = () => {
        if (favorited) {
            removeFavorite(pokemon.name);
        } else {
            addFavorite(pokemon.name);
        }
    };

    return (
        <div>
            <BackButton />
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-64 h-64 p-4 border border-gray-400 rounded-lg">
                    <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        fill
                        className="object-contain p-4"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
                        <button
                            onClick={() => handleFavorite()}
                            className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                            {favorited ? <FaHeart className="text-2xl text-red-500" /> : <FaRegHeart className="text-2xl" />}
                        </button>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <p className=" text-gray-500 font-semibold my-auto">Type:</p>
                        {pokemon.types.map(type => (
                            <span key={type} className="px-3 py-1 bg-gray-200 rounded-full text-lg font-medium">
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}