import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="text-6xl font-extrabold text-pink-500 mb-2">404</div>
            <div className="text-2xl font-bold text-gray-800 mb-2">Buku Tidak Ditemukan!</div>
            <p className="text-gray-600 mb-6 max-w-md">
                Buku yang Anda cari tidak ada dalam database atau ID buku tidak valid.
            </p>
            <Link
                href="/katalog"
                className="px-5 py-2.5 rounded-lg border border-pink-400 bg-pink-500 text-white font-bold shadow-md hover:bg-pink-600 transition"
            >
                Kembali ke Katalog
            </Link>
        </div>
    );
}
