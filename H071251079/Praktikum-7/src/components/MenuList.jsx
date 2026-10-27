import MenuCard from './MenuCard'

function MenuList({ menuList, order,addOrder, decrOrder }) {
  return (
      <div className="min-h-screen p-10">
        <div className="text-xl text-yellow-900 font-bold mb-4">Nikmati Kopi Kekinian</div>
        <div className="grid grid-cols-4 gap-4">
          {menuList.map((menu) => (
            <MenuCard 
              key={menu.id}
              nama={menu.nama}
              kategori={menu.kategori}
              harga={menu.harga}
              tersedia={menu.tersedia}
              deskripsi={menu.deskripsi}
              count={order[menu.id] || 0}  
              onAddOrderClick={() => addOrder(menu.id)}
              onDecrOrderClick={() => decrOrder(menu.id)}
            />
          ))}
        </div>
      </div>
  )
}

export default MenuList