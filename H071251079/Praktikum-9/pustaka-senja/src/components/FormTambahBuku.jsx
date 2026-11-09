'use client'
import { useRef, useState } from "react"
import { tambahBuku } from "@/app/katalog/actions"

const input = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-slate-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm shadow-sm"

const kategoriList = ['Teknologi', 'Fiksi', 'Pengembangan Diri']

export default function FormTambahBuku() {
    const formRef = useRef(null)
    const [buka, setBuka] = useState(false)
    const [pesan, setPesan] = useState("")

    const handleSubmit = async (formData) => {
        try {
            await tambahBuku(formData)
            formRef.current?.reset()
            setPesan("Buku baru berhasil ditambahkan ke database!")
            setTimeout(() => setPesan(""), 3500)
        } catch (err) {
            setPesan("Gagal menambahkan buku: " + err.message)
        }
    }

    return (
        <div className="mb-6 p-4 bg-pink-50 border border-pink-300 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">
                    Tambah <span className="text-pink-600">Buku Baru</span>
                </div>
                <button
                    type="button"
                    onClick={() => setBuka(!buka)}
                    className="px-3 py-1.5 border border-pink-400 bg-pink-500 text-white font-semibold text-xs rounded-lg hover:bg-pink-600 shadow-md transition"
                >
                    {buka ? 'Tutup Formulir' : '+ Tambah Buku'}
                </button>
            </div>

            {pesan && (
                <div className={`mt-3 p-2.5 rounded text-sm font-medium ${pesan.startsWith('Gagal') ? 'bg-red-100 border border-red-400 text-red-800' : 'bg-emerald-100 border border-emerald-400 text-emerald-800'}`}>
                    {pesan}
                </div>
            )}

            {buka && (
                <form ref={formRef} action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start mt-4 pt-4 border-t border-pink-200">
                    <div>
                        <label htmlFor="tambah-judul" className="block text-sm font-semibold text-gray-700 mb-1">Judul Buku</label>
                        <input type="text" name="judul" id="tambah-judul" className={input} placeholder="Masukkan judul buku" required />
                    </div>

                    <div>
                        <label htmlFor="tambah-penulis" className="block text-sm font-semibold text-gray-700 mb-1">Penulis Buku</label>
                        <input type="text" name="penulis" id="tambah-penulis" className={input} placeholder="Masukkan nama penulis" required />
                    </div>

                    <div>
                        <label htmlFor="tambah-kategori" className="block text-sm font-semibold text-gray-700 mb-1">Kategori Buku</label>
                        <select name="kategori" id="tambah-kategori" className={input} defaultValue="" required>
                            <option value="" disabled>Pilih Kategori</option>
                            {kategoriList.map((k) => (
                                <option key={k} value={k}>{k}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tambah-tahun" className="block text-sm font-semibold text-gray-700 mb-1">Tahun Terbit</label>
                        <input type="number" name="tahun" id="tambah-tahun" className={input} placeholder="Contoh: 2024" required />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Status Ketersediaan</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tersedia"
                                    value="true"
                                    defaultChecked
                                    className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 focus:ring-pink-400 focus:ring-2"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-900">Tersedia</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tersedia"
                                    value="false"
                                    className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 focus:ring-pink-400 focus:ring-2"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-900">Terpinjam</span>
                            </label>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="tambah-sinopsis" className="block text-sm font-semibold text-gray-700 mb-1">Sinopsis</label>
                        <textarea
                            name="sinopsis"
                            id="tambah-sinopsis"
                            className={`${input} h-24`}
                            placeholder="Ringkasan atau sinopsis singkat buku..."
                            required
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                        <button
                            type="button"
                            onClick={() => setBuka(false)}
                            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-semibold bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-1.5 border border-pink-400 rounded-lg text-sm font-bold bg-pink-500 text-white hover:bg-pink-600 transition shadow-md"
                        >
                            Simpan Buku
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
