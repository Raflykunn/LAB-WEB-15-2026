'use client'
import Link from "next/link"
import { useState } from "react"
import TombolHapus from "./TombolHapus"

export default function BukuCard({ id, judul, penulis, kategori, tahun, sinopsis, tersedia }) {
    const [favorit, setFavorit] = useState({})

    const tombolFavorit = (id) => {
        setFavorit({...favorit, [id]: !favorit[id]})
    }

    return (
        <div className="p-4 border border-pink-200 shadow-md rounded-lg space-y-2 bg-white flex flex-col justify-between">
            <div className="space-y-1">
                <div className="font-bold text-lg text-gray-800">{judul}</div>
                <div className="text-sm font-semibold text-pink-600">{kategori}</div>
                <div className="text-sm text-gray-700">Penulis: {penulis}</div>
                <div className="text-sm text-gray-700">Tahun: {tahun}</div>
                <div className="text-sm text-gray-500 line-clamp-3">{sinopsis}</div>
                <div className={`px-2 py-1 shadow-md ${tersedia ? 'bg-green-600' : 'bg-red-600'} w-fit rounded-lg text-white text-xs font-semibold mt-2`}>
                    {tersedia ? 'Tersedia' : 'Sedang Dipinjam'}
                </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 items-center">
                <button
                    className={`px-2 py-1 rounded-lg border border-gray-200 shadow-md text-xs font-medium ${favorit[id] ? 'bg-pink-300 text-pink-900 font-semibold' : 'bg-white hover:bg-pink-50'}`}
                    onClick={() => tombolFavorit(id)}
                >
                    Favorit
                </button>
                <Link className="px-2 py-1 rounded-lg border border-gray-200 shadow-md text-xs font-medium hover:bg-pink-50 transition" href={`/katalog/${id}`}>
                    Lihat Detail
                </Link>
                <Link className="px-2 py-1 rounded-lg border border-pink-400 bg-pink-500 text-white shadow-md text-xs font-medium hover:bg-pink-600 transition" href={`/katalog/${id}/edit`}>
                    Sunting
                </Link>
                <TombolHapus id={id} judul={judul} />
            </div>
        </div>
    )
}
