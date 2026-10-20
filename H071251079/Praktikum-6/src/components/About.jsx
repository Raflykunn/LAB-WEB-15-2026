const dataDiri = [
  { id: 1, label: "Nama", value: "Muh. Rafly Nurramadhan" },
  { id: 2, label: "NIM", value: "H071251079" },
  { id: 3, label: "Jurusan", value: "Sistem Informasi" },
  { id: 4, label: "Universitas", value: "Universitas Hasanuddin" },
  { id: 5, label: "Angkatan", value: "2025" },
  { id: 6, label: "Email", value: "muhrafly@student.unhas.ac.id" },
]

function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tentang Saya</h2>
        <div className="w-10 h-1 bg-blue-600 rounded mb-6"></div>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
          Saya adalah mahasiswa Teknik Informatika Universitas Hasanuddin yang memiliki
          ketertarikan di bidang pengembangan web dan teknologi digital. Saya aktif belajar
          berbagai teknologi modern dan terus berusaha meningkatkan kemampuan diri melalui
          proyek-proyek nyata dan kegiatan kemahasiswaan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3"
            >
              <span className="text-gray-400 text-sm font-medium w-24 flex-shrink-0">{item.label}</span>
              <span className="text-gray-700 text-sm">: {item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
