"use client";

import { useState, useEffect, useCallback } from "react";
import { POKEMON_FAVORITE_STORAGE_KEY } from "@/constants/pokemon";

export function useFavoritePokemon() {
    const [favorite, setFavorite] = useState<string[]>([]);

    const loadFavorites = useCallback(() => {
        const stored = localStorage.getItem(POKEMON_FAVORITE_STORAGE_KEY);
        if (stored) {
            setFavorite(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        loadFavorites();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === POKEMON_FAVORITE_STORAGE_KEY) {
                loadFavorites();
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [loadFavorites]);

    const isFavorite = (name: string) =>
        favorite.some((fav) => fav.toLowerCase() === name.toLowerCase());

    const addFavorite = (name: string) => {
        setFavorite((prev) => {
            const exists = prev.some(item => item.toLowerCase() === name.toLowerCase());
            if (exists) return prev;

            const updated = [name, ...prev];
            localStorage.setItem(POKEMON_FAVORITE_STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const removeFavorite = (name: string) => {
        setFavorite((prev) => {
            const updated = prev.filter((item) => item.toLowerCase() !== name.toLowerCase());
            localStorage.setItem(POKEMON_FAVORITE_STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const clearAll = () => {
        setFavorite([]);
        localStorage.removeItem(POKEMON_FAVORITE_STORAGE_KEY);
    };

    return { favorite, addFavorite, removeFavorite, isFavorite, clearAll };
}