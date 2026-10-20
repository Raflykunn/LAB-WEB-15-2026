import profilePic from "../assets/hero.png"

function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-500 text-sm mb-2">Halo, perkenalkan saya</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Muh. Rafly Nurramadhan<br />
            <span className="text-blue-600">Mahasiswa Sistem Informasi</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Mahasiswa aktif Universitas Hasanuddin angkatan 2025, jurusan Sistem Informasi.
            Tertarik di bidang web development dan pemrograman.
          </p>
          <button
            className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            onClick={() => console.log("Tombol Hero diklik!")}
          >
            Lihat Portfolio
          </button>
        </div>
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Foto Profil"
            className="w-52 h-52 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
