export default function Loading() {
    return (
        <main className="max-w-4xl mx-auto p-8 animate-pulse">
            {/* Header Section Skeleton */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image Box Skeleton */}
                <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>

                <div className="flex-1 space-y-4 w-full">
                    {/* Title Skeleton */}
                    <div className="h-10 bg-gray-200 rounded w-3/4"></div>

                    {/* Types Chips Skeleton */}
                    <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Attacks Section Skeleton */}
            <div className="mt-12 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                </div>
            </div>

            {/* Evolutions Section Skeleton */}
            <div className="mt-12">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                <div className="flex gap-6">
                    <div className="h-32 w-24 bg-gray-200 rounded-lg"></div>
                    <div className="h-32 w-24 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </main>
    );
}