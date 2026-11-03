'use client'
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";
import { useState } from "react";

export default function Katalog() {
    const [aktifKategori, setAktifKategori] = useState('Semua')

    const filterKategori = aktifKategori === 'Semua' ? dataBuku : dataBuku.filter((item) => item.kategori === aktifKategori)
    const kategori = ['Semua','Teknologi','Fiksi','Pengembangan Diri']

    return (
        <>
            <div className="text-2xl font-bold">Katalog Buku</div>
            <div className="flex gap-2">
                {kategori.map((item) => (
                    <button key={item} onClick={() => setAktifKategori(item)} className={`mb-4 px-2 py-1 shadow-md rounded-lg border border-gray-200 ${item === aktifKategori ? 'bg-gray-500 text-white' : ''}`}>{item}</button>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
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
        </>
    )
}