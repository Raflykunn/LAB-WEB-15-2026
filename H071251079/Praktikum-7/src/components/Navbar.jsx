import { useState } from "react"
import RingkasanPesanan from "./RingkasanPesanan"
import FormPesan from "./FormPesan"

function Navbar({ resetOrder,totalOrder, menuList, order }) {
  const [isOpen, setIsOpen] = useState(false)

  const pesanan = Object.keys(order)
  .map((id) => {
    const menu = menuList.find(
      (meniu) => meniu.id === Number(id)
    );

    if (!menu || order[id] === 0) return null;

    return {
      ...menu,
      kuantiti: order[id],
      totalPerOrder: menu.harga * order[id],
    };
  })
  .filter(Boolean);

  const totalPrice = pesanan.reduce((totalPerOrder, menu) => totalPerOrder + menu.totalPerOrder, 0)
  
  return (
    <>
      <nav className='flex justify-between px-10 py-4'>
          <div className='font-bold text-lg text-yellow-900'>Kopi <span className='text-yellow-600'>Senja</span></div>
          <button onClick={() => setIsOpen(true)} className="border border-yellow-500 p-2 rounded-xl bg-yellow-100 text-yellow-900 font-bold">
            Pesan<sup className={totalOrder !== 0 ? 'bg-red-500 text-white font-bold px-2 py-1  rounded-full' : ''}>{totalOrder === 0 ? '' : totalOrder}</sup>
          </button>
      </nav>

      {isOpen &&
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md max-h-5/6 overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <div className="flex justify-between items-center">
              <div className="text-yellow-900 text-2xl font-semibold">
                Pemesanan
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-4xl text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
            <RingkasanPesanan pesanan={pesanan} totalPrice={totalPrice} totalOrder={totalOrder} menuList={menuList} order={order}/>
            {totalOrder === 0 || <FormPesan totalOrder={totalOrder} totalPrice={totalPrice} onResetOrder={resetOrder} onOpenClick={setIsOpen}/>}
          </div>
        </div>
      }
    </>
  )
}

export default Navbar