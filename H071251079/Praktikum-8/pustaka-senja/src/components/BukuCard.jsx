'use client'
import Link from "next/link"
import { useState } from "react"

export default function BukuCard({ id,judul, penulis, kategori, tahun,  sinopsis, tersedia }) {
    const [favorit, setFavorit] = useState({})

    const tombolFavorit = (id) => {
        setFavorit({...favorit, [id]: !favorit[id]})
    }

    return (
        <div className="p-2 border border-gray-200 shadow-md rounded-lg space-y-2">
            <div className="">{judul}</div>
            <div className="">{kategori}</div>
            <div className="">{penulis}</div>
            <div className="">{sinopsis}</div>
            <div className="">{tahun}</div>
            <div className={`px-2 py-1 shadow-md ${tersedia ? 'bg-green-600' : 'bg-red-600'} w-fit rounded-lg text-white`}>{tersedia ? 'Tersedia' : 'Sedang Dipinjam'}</div>
            <button className={`mr-4 px-2 py-1 rounded-lg border border-gray-200 shadow-md ${favorit[id] ? 'bg-red-300 text-red-900 font-semibold' : 'bg-white'}`} onClick={() => tombolFavorit(id)}>Favorit</button>
            <Link className="px-2 py-1 rounded-lg border border-gray-200 shadow-md" href={`/katalog/${id}`}>Lihat Detail</Link>
        </div>
    )
}