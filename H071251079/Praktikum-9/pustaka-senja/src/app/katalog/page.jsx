import pool from "@/lib/db";
import FormTambahBuku from "@/components/FormTambahBuku";
import KatalogList from "./KatalogList";

export const dynamic = "force-dynamic";

export default async function Katalog() {
    const { rows } = await pool.query('SELECT * FROM buku ORDER BY id ASC');

    return (
        <div className="max-w-6xl mx-auto py-2">
            <div className="text-2xl font-bold mb-4 text-gray-800">
                Katalog <span className="text-pink-500">Buku</span>
            </div>

            <FormTambahBuku />

            <KatalogList bukuList={rows} />
        </div>
    );
}
