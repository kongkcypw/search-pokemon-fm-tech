import { PokemonAttack } from "@/types/pokemon";

export const AttackSection = ({ title, attacks }: { title: string, attacks: PokemonAttack[] }) => (
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