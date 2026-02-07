"use client";

import Image from "next/image";

import { PokemonPreview } from "@/types/pokemon";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

interface Props {
    poke: PokemonPreview;
    onRemove: (name: string) => void;
}

export function FavoriteCard({ poke, onRemove }: Props) {
    const router = useRouter();

    return (
        <div
            className="group relative bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center transition-all hover:bg-blue-50 hover:shadow-md cursor-pointer"
            onClick={() => router.push(`/pokemon/${poke.name}`)}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    onRemove(poke.name);
                }}
                className="absolute top-3 right-3 p-2 bg-white rounded-lg text-gray-300 hover:text-red-500 hover:shadow-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <FaTrash size={14} className="cursor-pointer" />
            </button>

            <div className="relative w-24 h-24 mb-3 transition-transform group-hover:scale-110">
                <Image
                    src={poke.image}
                    alt={poke.name}
                    fill
                    className="object-contain"
                />
            </div>
            <p className="font-bold text-gray-700 capitalize text-lg">{poke.name}</p>
        </div>
    );
}