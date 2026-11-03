'use client'
import { useState } from "react"

export default function Usulan() {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nama.trim() === "") return
        if (judul.trim() === "") return
        if (kategori.trim() === "") return
        if (alasan.trim() === "") return
        
        setTerkirim(true)
        console.log(nama, judul, kategori, alasan)

        setSubmitUsulan({
            nama: nama,
            judul: judul,
            kategori: kategori,
            alasan: alasan
        })
        setNama("")
        setJudul("")
        setKategori("")
        setAlasan("")
        setTerkirim(false)
    }

    
    const [nama, setNama] = useState("")
    const [judul, setJudul] = useState("")
    const [kategori, setKategori] = useState("")
    const [alasan, setAlasan] = useState("")
    const [terkirim, setTerkirim] = useState(false)
    const [submitUsulan, setSubmitUsulan] = useState(null)

    const semuaKategori = ['Teknologi','Fiksi','Pengembangan Diri']

    return (
        <>
            <div className="text-2xl font-bold mb-4">Form Usulan Buku</div>
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <label htmlFor="nama">Nama Pengusul</label>
                <input autoFocus value={nama} className="border border-gray-200 rounded-lg shadow-md p-2" type="text" id="nama" name="nama" onChange={(e) => setNama(e.target.value)}/>
                {terkirim && nama.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Nama harus diisi!</div>)}
                
                <label htmlFor="judul">Judul Buku yang Diusulkan</label>
                <input value={judul} className="border border-gray-200 rounded-lg shadow-md p-2" type="text" name="judul" id="judul" onChange={(e) => setJudul(e.target.value)}/>
                {terkirim && judul.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Judul Harus diisi!</div>)}

                <label htmlFor="kategori">Kategori</label>
                <select value={kategori} className="border border-gray-200 rounded-lg shadow-md p-2" name="kategori" id="kategori" onChange={(e) => setKategori(e.target.value)}>
                    <option value="">Pilih Kategori</option>
                    {semuaKategori.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                {terkirim && kategori.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Kategori Harus dipilih!</div>)}

                <label htmlFor="alasan">Alasan Usulan</label>
                <textarea value={alasan} className="border border-gray-200 rounded-lg shadow-md p-2" name="alasan" id="alasan" onChange={(e) => setAlasan(e.target.value)}></textarea>
                {terkirim && alasan.trim() === "" && (<div className="col-span-2 text-sm text-red-500">Alasan Harus diisi!</div>)}

                <div className="flex justify-center col-span-2">
                    <button className="mt-2 border border-gray-200 shadow-md py-2 px-4 bg-pink-500 text-white font-bold w-fit rounded-lg" type="submit">Kirim</button>
                </div>
            </form>

            <div className="p-4 flex justify-center">
                {submitUsulan && (
                    <div className="border border-gray-200 grid grid-cols-2 gap-2 p-2 rounded-lg">
                        <div className="col-span-2 text-xl font-bold">Hasil Usulan Buku</div>
                        <div className="">Nama Pengusul</div>
                        <div className="">{submitUsulan.nama}</div>
                        <div className="">Judul Buku</div>
                        <div className="">{submitUsulan.judul}</div>
                        <div className="">Kategori</div>
                        <div className="">{submitUsulan.kategori}</div>
                        <div className="">Alasan Usulan</div>
                        <div className="">{submitUsulan.alasan}</div>
                    </div>
                )}
            </div>
        </>
    )
}