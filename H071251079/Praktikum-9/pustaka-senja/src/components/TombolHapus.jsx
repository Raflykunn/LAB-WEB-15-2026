'use client'
import { useTransition } from "react"
import { hapusBuku } from "@/app/katalog/actions"

export default function TombolHapus({ id, judul }) {
    const [isPending, startTransition] = useTransition()

    const handleHapus = () => {
        const yakin = window.confirm(`Apakah Anda yakin ingin menghapus buku "${judul || 'ini'}"?`)
        if (yakin) {
            startTransition(async () => {
                await hapusBuku(id)
            })
        }
    }

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={handleHapus}
            className="px-2 py-1 rounded-lg border border-red-300 bg-red-500 text-white shadow-md text-xs font-medium hover:bg-red-600 disabled:opacity-50 transition"
        >
            {isPending ? 'Menghapus...' : 'Hapus'}
        </button>
    )
}
