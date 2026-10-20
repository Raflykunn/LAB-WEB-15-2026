import foto1 from "../assets/gallery/foto1.svg"
import foto2 from "../assets/gallery/foto2.svg"
import foto3 from "../assets/gallery/foto3.svg"
import foto4 from "../assets/gallery/foto4.svg"

const galeri = [
  { id: 1, src: foto1, caption: "Coding Session" },
  { id: 2, src: foto2, caption: "Hackathon 2025" },
  { id: 3, src: foto3, caption: "Campus Life" },
  { id: 4, src: foto4, caption: "Side Project" },
]

function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Gallery</h2>
        <div className="w-10 h-1 bg-blue-600 rounded mb-6"></div>
        <p className="text-gray-600 mb-8">Beberapa momen dan kegiatan saya:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galeri.map((foto) => (
            <div
              key={foto.id}
              className="rounded-xl overflow-hidden border border-gray-200 bg-white"
            >
              <img
                src={foto.src}
                alt={foto.caption}
                className="w-full h-44 object-cover"
              />
              <p className="text-sm text-center text-gray-600 py-2 px-3">{foto.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
