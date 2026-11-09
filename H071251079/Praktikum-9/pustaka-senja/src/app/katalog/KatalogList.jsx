'use client'
import { useState } from "react"
import BukuCard from "@/components/BukuCard"

export default function KatalogList({ bukuList }) {
    const [aktifKategori, setAktifKategori] = useState('Semua')

    const kategori = ['Semua', 'Teknologi', 'Fiksi', 'Pengembangan Diri']
    const filterKategori = aktifKategori === 'Semua' 
        ? bukuList 
        : bukuList.filter((item) => item.kategori === aktifKategori)

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-6">
                {kategori.map((item) => (
                    <button
                        key={item}
                        onClick={() => setAktifKategori(item)}
                        className={`px-3 py-1 shadow-md rounded-lg border border-pink-200 text-sm transition ${
                            item === aktifKategori
                                ? 'bg-pink-500 text-white font-bold'
                                : 'bg-white text-gray-700 hover:bg-pink-50'
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterKategori.map((item) => (
                    <BukuCard
                        key={item.id}
                        id={item.id}
                        judul={item.judul}
                        kategori={item.kategori}
                        penulis={item.penulis}
                        sinopsis={item.sinopsis}
                        tahun={item.tahun}
                        tersedia={item.tersedia}
                    />
                ))}
            </div>

            {filterKategori.length === 0 && (
                <div className="text-center py-10 text-gray-500 bg-white rounded-lg border border-pink-100 p-6 shadow-sm">
                    Tidak ada buku dalam kategori ini.
                </div>
            )}
        </div>
    )
}
