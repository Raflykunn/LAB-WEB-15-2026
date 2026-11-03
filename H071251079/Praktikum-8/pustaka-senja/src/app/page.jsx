'use client'
import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

const totalBuku = dataBuku.length
const bukuTersedia = dataBuku.filter(buku => buku.tersedia === true).length
const bukuDipinjam = dataBuku.filter(buku => buku.tersedia === false).length

export default function Beranda() {
  return (
    <>
      <Hero 
        nama="Pustaka Senja"
        deskripsi="Meminjam buku secepat sonic, Mengembalikannya secepat siput"
        lokasi="Makassar, Jalan Jalangkote"
        jamBuku="08:00 - 16:30"
      />
      <div className="flex justify-evenly gap-2">
        <div className="p-4 bg-pink-200 rounded-lg">Totak Koleksi Buku: {totalBuku}</div>
        <div className="p-4 bg-pink-200 rounded-lg">Buku Tersedia: {bukuTersedia}</div>
        <div className="p-4 bg-pink-200 rounded-lg">Buku Dipinjam: {bukuDipinjam}</div>
      </div>
    </>
  );
}
