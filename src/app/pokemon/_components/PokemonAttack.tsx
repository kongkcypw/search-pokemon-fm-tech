import { Pokemon, type PokemonAttack } from "@/types/pokemon";

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

    const AttackSection = ({ title, attacks }: { title: string, attacks: PokemonAttack[] }) => (
        <div className="flex-1">
            <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">{title}</h4>
            <div className="space-y-3">
                {attacks.map(attack => (
                    <div key={attack.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <p className="font-bold text-gray-800">{attack.name}</p>
                            <p className="text-xs text-gray-400 font-semibold uppercase">Type: {attack.type}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-mono font-bold text-gray-500">{attack.damage} DMG</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

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