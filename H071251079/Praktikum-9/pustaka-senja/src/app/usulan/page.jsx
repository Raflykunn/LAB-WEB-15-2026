'use client'
import { useState } from "react"

export default function Usulan() {
    const [nama, setNama] = useState("")
    const [judul, setJudul] = useState("")
    const [kategori, setKategori] = useState("")
    const [alasan, setAlasan] = useState("")
    const [terkirim, setTerkirim] = useState(false)
    const [submitUsulan, setSubmitUsulan] = useState(null)

    const semuaKategori = ['Teknologi', 'Fiksi', 'Pengembangan Diri']

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nama.trim() === "") return
        if (judul.trim() === "") return
        if (kategori.trim() === "") return
        if (alasan.trim() === "") return

        setSubmitUsulan({
            nama: nama,
            judul: judul,
            kategori: kategori,
            alasan: alasan,
        })
        setNama("")
        setJudul("")
        setKategori("")
        setAlasan("")
        setTerkirim(false)
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="text-2xl font-bold mb-4 text-gray-800">Form Usulan Buku</div>
            <form className="grid grid-cols-2 gap-4 bg-white p-6 border border-gray-200 rounded-lg shadow-sm" onSubmit={handleSubmit}>
                <label htmlFor="nama" className="font-semibold text-gray-700">Nama Pengusul</label>
                <input
                    autoFocus
                    value={nama}
                    className="border border-gray-300 rounded-lg shadow-sm p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    type="text"
                    id="nama"
                    name="nama"
                    onChange={(e) => setNama(e.target.value)}
                />
                {terkirim && nama.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Nama harus diisi!</div>)}

                <label htmlFor="judul" className="font-semibold text-gray-700">Judul Buku yang Diusulkan</label>
                <input
                    value={judul}
                    className="border border-gray-300 rounded-lg shadow-sm p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    type="text"
                    name="judul"
                    id="judul"
                    onChange={(e) => setJudul(e.target.value)}
                />
                {terkirim && judul.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Judul Harus diisi!</div>)}

                <label htmlFor="kategori" className="font-semibold text-gray-700">Kategori</label>
                <select
                    value={kategori}
                    className="border border-gray-300 rounded-lg shadow-sm p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    name="kategori"
                    id="kategori"
                    onChange={(e) => setKategori(e.target.value)}
                >
                    <option value="">Pilih Kategori</option>
                    {semuaKategori.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                {terkirim && kategori.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Kategori Harus dipilih!</div>)}

                <label htmlFor="alasan" className="font-semibold text-gray-700">Alasan Usulan</label>
                <textarea
                    value={alasan}
                    className="border border-gray-300 rounded-lg shadow-sm p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    name="alasan"
                    id="alasan"
                    rows={3}
                    onChange={(e) => setAlasan(e.target.value)}
                ></textarea>
                {terkirim && alasan.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Alasan Harus diisi!</div>)}

                <div className="flex justify-end col-span-2">
                    <button
                        className="mt-2 border border-pink-400 shadow-sm py-2 px-5 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition"
                        type="submit"
                        onClick={() => setTerkirim(true)}
                    >
                        Kirim Usulan
                    </button>
                </div>
            </form>

            {submitUsulan && (
                <div className="mt-6 border border-gray-200 bg-white grid grid-cols-2 gap-2 p-5 rounded-lg shadow-sm">
                    <div className="col-span-2 text-xl font-bold text-gray-800 border-b pb-2 mb-2">Hasil Usulan Buku</div>
                    <div className="text-gray-600 font-semibold">Nama Pengusul</div>
                    <div className="text-gray-900">{submitUsulan.nama}</div>
                    <div className="text-gray-600 font-semibold">Judul Buku</div>
                    <div className="text-gray-900">{submitUsulan.judul}</div>
                    <div className="text-gray-600 font-semibold">Kategori</div>
                    <div className="text-gray-900">{submitUsulan.kategori}</div>
                    <div className="text-gray-600 font-semibold">Alasan Usulan</div>
                    <div className="text-gray-900">{submitUsulan.alasan}</div>
                </div>
            )}
        </div>
    )
}
