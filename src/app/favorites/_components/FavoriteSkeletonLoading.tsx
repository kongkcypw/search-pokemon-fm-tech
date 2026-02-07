export function FavoriteSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-44 bg-gray-100 rounded-2xl border border-gray-100" />
            ))}
        </div>
    );
}