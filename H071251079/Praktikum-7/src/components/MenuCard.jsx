function MenuCard({ nama, kategori, harga, tersedia, deskripsi, count, onAddOrderClick, onDecrOrderClick }) {
  return (
    <div className='px-6 py-4 rounded-xl bg-white border border-gray-200 flex flex-col gap-2'>
      <div className="text-xl font-bold">{nama}</div>
      <div className="flex justify-between">
        <div className="font-bold bg-yellow-200 w-fit p-1 text-yellow-900 rounded-xl">{kategori}</div>
        <div className={`${tersedia ? '' : 'bg-red-200'} w-fit p-2 text-sm rounded-xl font-semibold text-yellow-900`}>{tersedia ? '' : 'Tidak Tersedia'}</div>
      </div>
      <div className="">Rp. {harga.toLocaleString('id-ID')}</div>
      <div className="">{deskripsi}</div>
      <div className="flex gap-2 justify-center">
          <button onClick={onDecrOrderClick} className="w-8 aspect-square font-bold text-xl text-center border border-yellow-500 rounded-xl  disabled:bg-gray-200 disabled:border-gray-500" disabled={count === 0}>-</button>
          <button className="w-8 aspect-square font-bold text-xl text-center border border-yellow-500 rounded-xl">{count}</button>
          <button onClick={onAddOrderClick} className="w-8 aspect-square font-bold text-xl text-center border border-yellow-500 rounded-xl disabled:bg-gray-200 disabled:border-gray-500" disabled={!tersedia}>+</button>
      </div>
    </div>
  )
}

export default MenuCard