import { Pokemon, type PokemonAttack } from "@/types/pokemon";
import { AttackSection } from "./AttackSection";

interface PokemonAttackProps {
    pokemon: Pokemon;
}

export default function PokemonAttack({ pokemon }: PokemonAttackProps) {
    if (!pokemon.attacks) return (
        <section className="pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Attacks</h3>
            <p className="">{pokemon.name} has no attacks.</p>
        </section>
    )

    return (
        <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Attacks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AttackSection title="Fast Attacks" attacks={pokemon.attacks.fast} />
                <AttackSection title="Special Attacks" attacks={pokemon.attacks.special} />
            </div>
        </section>
    );
}
