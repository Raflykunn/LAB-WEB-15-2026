const menus = ["Home", "About", "Skills", "Gallery", "Contact"]

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-gray-900 text-lg tracking-tight">H071251079</span>
        <ul className="hidden md:flex gap-8">
          {menus.map((menu) => (
            <li key={menu}>
              <a
                href={`#${menu.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => console.log(`Menu diklik: ${menu}`)}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
