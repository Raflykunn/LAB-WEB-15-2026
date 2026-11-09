export default function Hero({ nama, deskripsi, lokasi, jamBuku }) {
    return (
        <div className="p-4 shadow-md border border-gray-200 rounded-lg mb-6 bg-white w-full">
            <div className="text-2xl font-bold text-gray-800">{nama}</div>
            <div className="text-xl font-semibold text-pink-600">{deskripsi}</div>
            <div className="text-gray-700">Lokasi: {lokasi}</div>
            <div className="text-gray-700">Siap Melayani Anda pada pukul {jamBuku}</div>
        </div>
    )
}
