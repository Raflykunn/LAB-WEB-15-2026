import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MenuList from './components/MenuList'
import { useState } from 'react'

function App() {
  const menuList = [
    {
      id: 1,
      nama: "Kopi Susu",
      kategori: "Kopi",
      harga: 18000,
      tersedia: true,
      deskripsi: "Espresso dengan susu segar dan gula aren."
    },
    {
      id: 2,
      nama: "Americano",
      kategori: "Kopi",
      harga: 15000,
      tersedia: true,
      deskripsi: "Espresso dengan air panas, rasa kuat dan bersih."
    },
    {
      id: 3,
      nama: "Cappucino",
      kategori: "Kopi",
      harga: 22000,
      tersedia: true,
      deskripsi: "Espresso, susu panas, dan busa susu tebal."
    },
    {
      id: 4,
      nama: "Matcha Latte",
      kategori: "Non-Kopi",
      harga: 24000,
      tersedia: true,
      deskripsi: "Teh hijau matcha dengan susu."
    },
    {
      id: 5,
      nama: "Teh Tarik",
      kategori: "Non-Kopi",
      harga: 14000,
      tersedia: false,
      deskripsi: "Teh susu yang ditarik hingga berbusa."
    },
    {
      id: 6,
      nama: "Cokelat Panas",
      kategori: "Non-Kopi",
      harga: 20000,
      tersedia: true,
      deskripsi: "Cokelat pekat dengan susu hangat"
    },
    {
      id: 7,
      nama: "Roti Bakar",
      kategori: "Makanan",
      harga: 16000,
      tersedia: true,
      deskripsi: "Roti tebal dengan selai cokelat dan keju."
    },
    {
      id: 8,
      nama: "Pisang Goreng",
      kategori: "Makanan",
      harga: 12000,
      tersedia: false,
      deskripsi: "Pisang goreng renyah dengan taburan keju."
    },
    {
      id: 9,
      nama: "Nasi Goreng",
      kategori: "Makanan",
      harga: 25000,
      tersedia: false,
      deskripsi: "Nasi goreng kampung dengan telur mata sapi"
    }
  ]

  const [order, setorder] = useState({})

  const addOrder = (id) => {
    setorder({
      ...order,
      [id]: (order[id] || 0) + 1
    })
  }

  const decrOrder = (id) => {
    setorder({
      ...order,
      [id]: Math.max(0, (order[id] || 0) - 1)
    })
  }

  const totalOrder = menuList.reduce((total, menu) => {
    return total + (order[menu.id] || 0)
  }, 0)

  const resetOrder = () => {
    setorder({})
  }

  return (
    <>
      <Navbar resetOrder={resetOrder} totalOrder={totalOrder} menuList={menuList} order={order}/>
      <MenuList menuList={menuList} order={order} addOrder={addOrder} decrOrder={decrOrder}/>
      <Footer />
    </>
  )
}

export default App
