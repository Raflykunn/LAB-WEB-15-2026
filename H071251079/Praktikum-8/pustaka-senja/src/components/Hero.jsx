export default function Hero({ nama, deskripsi, lokasi, jamBuku }) {
    return (
        <>
            <div className="p-4 shadow-md border border-gray-200 rounded-lg mb-6">
                <div className="text-2xl font-bold">{nama}</div>
                <div className="text-xl font-semibold">{deskripsi}</div>
                <div className="">Lokasi {lokasi}</div>
                <div className="">Siap Melayani Anda pada pukul {jamBuku}</div>
            </div>
        </>
    )
}