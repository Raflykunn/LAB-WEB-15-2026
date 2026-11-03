import { dataBuku } from "@/data/dataBuku"
import Link from "next/link"

export default async function DetailBuku({ params }) {
    const { id } = await params
    const buku = dataBuku.find((item) => item.id === id)

    return (
        <>
            <div className="text-2xl font-bold">Detail Buku {buku.judul}</div>
            {buku ? (
                <div>
                    <div className="">{buku.judul}</div>
                    <div className="">{buku.kategori}</div>
                    <div className="">{buku.penulis}</div>
                    <div className="">{buku.tahun}</div>
                    <div className="">{buku.sinopsis}</div>
                    <div className={`px-2 py-1 shadow-md ${buku.tersedia ? 'bg-green-600' : 'bg-red-600'} w-fit rounded-lg text-white`}>{buku.tersedia ? 'Tersedia' : 'Sedang Dipinjam'}</div>
                </div>
            ) : (
                <div className="">
                    <div className="text-3xl font-bold">Buku tidak ditemukan!</div>
                </div>
            )}
            <Link className="inline-block mt-2 px-2 py-1 rounded-lg border border-gray-200 shadow-md" href={"/katalog"}>Kembali ke halaman sebelumnya</Link>
        </>
    )
}