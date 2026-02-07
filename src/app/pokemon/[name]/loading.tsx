export default function Loading() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 animate-pulse">
            <div className="max-w-4xl mx-auto">
                {/* Back Button Skeleton */}
                <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>

                {/* Central White Frame Skeleton */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-12">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-64 h-64 bg-gray-100 rounded-2xl"></div>
                        <div className="flex-1 space-y-4 w-full">
                            <div className="h-10 bg-gray-200 rounded-lg w-1/2"></div>
                            <div className="flex gap-2">
                                <div className="h-7 w-20 bg-gray-100 rounded-full"></div>
                                <div className="h-7 w-20 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Attacks Section */}
                    <div className="space-y-6">
                        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                                <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                                <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                            </div>
                        </div>
                    </div>

                    {/* Evolutions Section */}
                    <div className="pt-8 border-t border-gray-100">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                        <div className="flex gap-6">
                            <div className="h-36 w-32 bg-gray-50 rounded-2xl border border-gray-100"></div>
                            <div className="h-36 w-32 bg-gray-50 rounded-2xl border border-gray-100"></div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}