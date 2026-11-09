import pool from "@/lib/db"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function DetailBuku({ params }) {
    const { id } = await params
    if (!Number.isInteger(Number(id))) notFound()

    const res = await pool.query('SELECT * FROM buku WHERE id = $1', [id])
    if (res.rowCount === 0) notFound()

    const buku = res.rows[0]

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border border-pink-200 shadow-md rounded-lg space-y-4">
            <div className="text-2xl font-bold text-gray-800 border-b border-pink-100 pb-3">
                Detail Buku <span className="text-pink-600">{buku.judul}</span>
            </div>

            <div className="space-y-2 text-gray-700">
                <div className="text-lg font-bold text-gray-900">{buku.judul}</div>
                <div className="text-pink-600 font-semibold">{buku.kategori}</div>
                <div><span className="font-medium text-gray-800">Penulis:</span> {buku.penulis}</div>
                <div><span className="font-medium text-gray-800">Tahun:</span> {buku.tahun}</div>
                <div className="text-gray-600 leading-relaxed pt-1">{buku.sinopsis}</div>
                <div className={`px-2.5 py-1 shadow-md ${buku.tersedia ? 'bg-green-600' : 'bg-red-600'} w-fit rounded-lg text-white text-xs font-semibold`}>
                    {buku.tersedia ? 'Tersedia' : 'Sedang Dipinjam'}
                </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
                <Link
                    className="px-3 py-1.5 rounded-lg border border-gray-200 shadow-md text-sm font-medium hover:bg-pink-50 transition"
                    href="/katalog"
                >
                    Kembali ke halaman sebelumnya
                </Link>
                <Link
                    className="px-3 py-1.5 rounded-lg border border-pink-400 bg-pink-500 text-white shadow-md text-sm font-semibold hover:bg-pink-600 transition"
                    href={`/katalog/${buku.id}/edit`}
                >
                    Sunting Buku
                </Link>
            </div>
        </div>
    )
}
