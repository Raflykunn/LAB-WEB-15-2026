const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

dataKelulusan = dataPraktikan.map((mahasiswa) => {

    total = mahasiswa.nilaiTugas.reduce((nilaiAwal,nilaiSaatIni) => nilaiAwal + nilaiSaatIni,0)

    ratarata = total / mahasiswa.nilaiTugas.length

    statusLulus = ratarata >= 75 ? "Lulus" : "Tidak Lulus"

    return {
        nama: mahasiswa.nama,
        ratarata: Number(ratarata.toFixed(2)),
        statusLulus: statusLulus
    }
})


namaAslab = prompt("Masukkan nama Anda (Asisten Lab):")

document.write(`
    <div class="min-h-screen  bg-gray-200 flex justify-center p-8">
        <div class="w-xl h-fit bg-white p-6 rounded-xl">
            <div class="text-2xl font-black mb-0.5">Sistem Laporan Praktikum</div>
            <div class="text-xs text-gray-500 font-semibold mb-8">Evaluasi kelulusan berbasis Javascript murni</div>
    `)

if (namaAslab !== "") {
    document.write(`
            <div class="border-l-4 border-l-blue-600 p-4 bg-blue-100 rounded-xl">
                <div class="text-blue-700 font-semibold">
                Selamat datang Asisten <span class="font-bold">${namaAslab}</span>!
                </div>
                <div class="text-blue-500">Berikut adalah laporan hasil praktikum</div>
            </div>
        `)

    dataKelulusan.forEach((data) => {
        luluss = data.statusLulus === "Lulus" ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700" 
        document.write(`
            <div class="border border-gray-200 hover:shadow-md mt-8 p-4 flex justify-between rounded-2xl">
                <div class="">
                    <div class="text-xl font-bold">${data.nama}</div>
                    <div class="">rata rata: ${data.ratarata}</div>
                </div>
                <div class="flex flex-row items-center">
                    <div class="${luluss} font-bold px-4 py-2 rounded-2xl">
                        ${data.statusLulus}
                    </div>
                </div>
            </div>
            `)
        console.log(data)
    })

    for (mahasiswa in dataKelulusan) {

    }

} else {
    document.write(`
            <div class="border-l-4 border-l-red-600 p-4 bg-red-100 rounded-xl">
                <div class="text-red-700 font-semibold">
                    Akses Ditolak
                </div>
                <div class="text-red-500">Anda tidak memasukkan identitas asisten</div>
            </div>
        `)
}

document.write(`
        </div>
    </div>
    `)

