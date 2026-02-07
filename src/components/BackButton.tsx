import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function BackButton() {

    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        router.back();
    };

    return (
        <button onClick={handleBack} className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8 mt-0 transition-colors cursor-pointer">
            <FaChevronLeft className="text-xl" />
            <span className="ml-2 text-xl">Back</span>
        </button>
    );
}