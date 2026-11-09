'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import pool from "@/lib/db"

export async function tambahBuku(formData) {
    const judul = formData.get('judul')?.trim()
    const penulis = formData.get('penulis')?.trim()
    const kategori = formData.get('kategori')?.trim()
    const tahun = Number(formData.get('tahun'))
    const tersedia = formData.get('tersedia') === 'true'
    const sinopsis = formData.get('sinopsis')?.trim()

    if (!judul || !penulis || !kategori || isNaN(tahun) || tahun <= 0 || !sinopsis) {
        throw new Error("Semua field wajib diisi dengan benar!")
    }

    await pool.query(
        'INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)',
        [judul, penulis, kategori, tahun, tersedia, sinopsis]
    )

    revalidatePath('/katalog')
    revalidatePath('/')
}

export async function suntingBuku(formData) {  
    const id = Number(formData.get('id'))
    const judul = formData.get('judul')?.trim()
    const penulis = formData.get('penulis')?.trim()
    const kategori = formData.get('kategori')?.trim()
    const tahun = Number(formData.get('tahun'))
    const tersedia = formData.get('tersedia') === 'true'
    const sinopsis = formData.get('sinopsis')?.trim()

    if (!id || !Number.isInteger(id)) {
        throw new Error("ID buku tidak valid!")
    }

    if (!judul || !penulis || !kategori || isNaN(tahun) || tahun <= 0 || !sinopsis) {
        throw new Error("Semua data buku harus diisi dengan benar!")
    }

    await pool.query(
        'UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6 WHERE id = $7',
        [judul, penulis, kategori, tahun, tersedia, sinopsis, id]
    )

    revalidatePath('/katalog')
    revalidatePath('/')
    revalidatePath(`/katalog/${id}`)
    redirect('/katalog')
}

export async function hapusBuku(id) {
    const bukuId = Number(id)
    if (!bukuId || !Number.isInteger(bukuId)) {
        throw new Error("ID buku tidak valid!")
    }

    await pool.query('DELETE FROM buku WHERE id = $1', [bukuId])

    revalidatePath('/katalog')
    revalidatePath('/')
}
