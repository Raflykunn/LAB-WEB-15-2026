import pool from "@/lib/db"
import Link from "next/link"
import { notFound } from "next/navigation"
import { suntingBuku } from "@/app/katalog/actions"

const input = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-slate-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm shadow-sm"

const kategoriList = ['Teknologi', 'Fiksi', 'Pengembangan Diri']

export const dynamic = "force-dynamic"

export default async function SuntingBuku({ params }) {
    const { id } = await params
    if (!Number.isInteger(Number(id))) notFound()

    const res = await pool.query('SELECT * FROM buku WHERE id = $1', [id])
    if (res.rowCount === 0) notFound()

    const item = res.rows[0]

    return (
        <div className="max-w-xl mx-auto p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md my-4">
            <div className="text-2xl font-bold text-gray-800 mb-4 border-b border-pink-200 pb-2">
                Sunting <span className="text-pink-600">Buku</span>
            </div>
            <form action={suntingBuku} className="grid grid-cols-2 gap-3 items-center">
                <input type="hidden" name="id" value={item.id} />

                <label htmlFor="judul" className="font-semibold text-sm text-gray-700">Judul Buku</label>
                <input defaultValue={item.judul} type="text" name="judul" className={input} id="judul" required />

                <label htmlFor="penulis" className="font-semibold text-sm text-gray-700">Penulis Buku</label>
                <input defaultValue={item.penulis} type="text" name="penulis" className={input} id="penulis" required />

                <label htmlFor="kategori" className="font-semibold text-sm text-gray-700">Kategori Buku</label>
                <select name="kategori" id="kategori" defaultValue={item.kategori} className={input} required>
                    {kategoriList.map((k) => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>

                <label htmlFor="tahun" className="font-semibold text-sm text-gray-700">Tahun Terbit</label>
                <input defaultValue={item.tahun} type="number" name="tahun" className={input} id="tahun" required />

                <label htmlFor="tersedia" className="font-semibold text-sm text-gray-700">Status Buku</label>
                <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="tersedia"
                            defaultChecked={item.tersedia === true}
                            value="true"
                            className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 focus:ring-pink-400 focus:ring-2"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900">Tersedia</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="tersedia"
                            defaultChecked={item.tersedia === false}
                            value="false"
                            className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 focus:ring-pink-400 focus:ring-2"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900">Terpinjam</span>
                    </label>
                </div>

                <label htmlFor="sinopsis" className="font-semibold text-sm text-gray-700 self-start mt-2">Sinopsis</label>
                <textarea
                    name="sinopsis"
                    id="sinopsis"
                    className={`${input} h-28`}
                    defaultValue={item.sinopsis}
                    required
                ></textarea>

                <div className="flex justify-end col-span-2 mt-4 pt-3 border-t border-pink-200 gap-2">
                    <Link
                        href="/katalog"
                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-semibold bg-white text-gray-700 hover:bg-gray-100 shadow-sm transition"
                    >
                        Batal
                    </Link>
                    <button
                        type="submit"
                        className="px-4 py-1.5 border border-pink-400 rounded-lg text-sm font-bold bg-pink-500 text-white hover:bg-pink-600 shadow-md transition"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    )
}
