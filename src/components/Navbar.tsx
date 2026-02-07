"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Pokéball icon */}
                    <div className="w-8 h-8 rounded-full border-4 border-gray-900 relative overflow-hidden group-hover:rotate-180 transition-transform duration-500">
                        <div className="absolute top-0 w-full h-1/2 bg-red-500 border-b-2 border-gray-900" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-900 rounded-full z-10" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-900">
                        Poké<span className="text-blue-600">Search</span>
                    </span>
                </Link>

                <div className="flex gap-6">
                    <Link
                        href="/favorites"
                        className={`text-sm font-medium transition-colors ${pathname === "/favorites" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
}