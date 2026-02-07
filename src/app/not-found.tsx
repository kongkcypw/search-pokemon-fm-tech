import Link from "next/link";

export default function GlobalNotFound() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-10 border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">404</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
                <p className="text-gray-500 mb-8">
                    {"This page doesn't exist."}
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}