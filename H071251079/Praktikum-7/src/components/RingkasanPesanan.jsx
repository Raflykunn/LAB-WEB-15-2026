
function RingkasanPesanan({ pesanan,totalPrice,totalOrder,menuList, order }) {


  return (
    <>
      {pesanan.length === 0 ? (
        <div className="font-bold">
          Silakan memesan terlebih dahulu!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-2">
          <div className="contents">
            <span className="font-semibold">Nama Pesanan</span>
            <span className="font-semibold">Harga Satuan</span>
            <span className="font-semibold">Kuantitas</span>
            <span className="font-semibold">Total Per Pesanan</span>
          </div>
          {pesanan.map((menu) => (
            <div key={menu.id} className="contents">
              <span>{menu.nama}</span>
              <span>
                Rp {menu.harga.toLocaleString("id-ID")}
              </span>
              <span>{menu.kuantiti}</span>
              <span>
                Rp {menu.totalPerOrder.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
          <div className="contents">
            <div className="col-span-2 font-bold">Total Pesanan</div>
            <div className="font-bold">{totalOrder}</div>
            <div className="font-bold">Rp {totalPrice.toLocaleString("id-ID")}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default RingkasanPesanan;
