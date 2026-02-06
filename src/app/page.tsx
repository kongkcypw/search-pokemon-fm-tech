// src/app/page.tsx
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Pokémon Search</h1>
      <SearchBar />
      <p className="mt-4 text-gray-500">
        Try searching for "Bulbasaur", "Charmander", or "Squirtle"
      </p>
    </main>
  );
}