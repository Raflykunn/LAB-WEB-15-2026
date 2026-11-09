'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const menu = [
        {nama: 'Beranda', path: '/'},
        {nama: 'Katalog', path: '/katalog'},
        {nama: 'Usulan Buku', path: '/usulan'},
    ]

    const pathname = usePathname()
    
    return (
        <nav className="w-full flex justify-between items-center px-4 py-2 shadow bg-white">
            <div className="text-xl font-bold">Pustaka <span className="text-pink-500">Senja</span></div>
            <div className="flex gap-4">
                {menu.map((item) => {
                    const aktif = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
                    return (
                        <Link key={item.path} href={item.path} className={aktif ? 'font-bold text-pink-500' : 'font-normal hover:text-pink-400'}>{item.nama}</Link>
                    )
                })}
            </div>
        </nav>
    )
}
