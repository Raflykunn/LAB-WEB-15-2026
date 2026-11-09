import Link from "next/link";
import pool from "@/lib/db";
import Hero from "@/components/Hero";

export const dynamic = "force-dynamic";

export default async function Beranda() {
  const { rows } = await pool.query(
    'select count(*) as total, (select count(*) from buku where tersedia = true) as tersedia, (select count(*) from buku where tersedia = false) as terpinjam from buku'
  );
  const totalBuku = Number(rows[0]?.total || 0);
  const bukuTersedia = Number(rows[0]?.tersedia || 0);
  const bukuDipinjam = Number(rows[0]?.terpinjam || 0);

  return (
    <>
      <Hero 
        nama="Pustaka Senja"
        deskripsi="Meminjam buku secepat sonic, Mengembalikannya secepat siput"
        lokasi="Makassar, Jalan Jalangkote"
        jamBuku="08:00 - 16:30"
      />
      <div className="flex flex-wrap justify-evenly gap-4 mb-8">
        <div className="p-4 bg-pink-200 rounded-lg shadow-md font-semibold text-gray-800 text-center min-w-56">
          Total Koleksi Buku: <span className="font-bold text-pink-700 text-lg">{totalBuku}</span>
        </div>
        <div className="p-4 bg-pink-200 rounded-lg shadow-md font-semibold text-gray-800 text-center min-w-56">
          Buku Tersedia: <span className="font-bold text-green-700 text-lg">{bukuTersedia}</span>
        </div>
        <div className="p-4 bg-pink-200 rounded-lg shadow-md font-semibold text-gray-800 text-center min-w-56">
          Buku Dipinjam: <span className="font-bold text-red-700 text-lg">{bukuDipinjam}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="px-6 py-2.5 rounded-lg border border-pink-400 bg-pink-500 text-white font-bold shadow-md hover:bg-pink-600 transition"
          href="/katalog"
        >
          Ke Katalog Buku
        </Link>
      </div>
    </>
  );
}
