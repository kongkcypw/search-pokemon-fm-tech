"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("name") || "");

    useEffect(() => {
        setQuery(searchParams.get("name") || "");
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            // Redirect to the dynamic route
            router.push(`/pokemon/${query.trim()}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Pokémon by name..."
                className="flex-1 p-2 border rounded-md text-black"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
                Search
            </button>
        </form>
    );
}