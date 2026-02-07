import SearchBar from "@/components/SearchBar";
import FeaturedPokemon from "./_home/FeaturedPokemon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Search Pokémon
          </h1>
          <p className="text-gray-500">
            Find your favorite Pokémon, attacks, and evolutions.
          </p>
        </div>

        <div className="flex justify-center">
          <SearchBar />
        </div>

        <FeaturedPokemon />
      </div>

      <footer className="mt-8 text-gray-400 text-sm">
        search-pokemon-fm-tech
      </footer>
    </main>
  );
}