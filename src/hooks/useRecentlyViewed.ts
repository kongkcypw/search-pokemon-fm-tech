"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "recent_pokemon";
const MAX_ITEMS = 5;

export function useRecentlyViewed() {
    const [recent, setRecent] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setRecent(JSON.parse(stored));
        }
    }, []);

    const addRecent = (name: string) => {
        setRecent((prev) => {
            const filtered = prev.filter((item) => item.toLowerCase() !== name.toLowerCase());
            const updated = [name, ...filtered].slice(0, MAX_ITEMS);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    return { recent, addRecent };
}