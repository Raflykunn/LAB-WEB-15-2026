import { useState } from 'react'

function FormPesan({ totalOrder, totalPrice, onResetOrder, onOpenClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid (contoh: raffu@mail.com).'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal harus 3 karakter.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    const pesanan = {
      email: formData.email.trim(),
      name: formData.name.trim(),
      notes: formData.notes.trim(),
      total_order: Number(totalOrder),
      total_price: Number(totalPrice)
    }

    console.log(pesanan)

    onResetOrder()
    onOpenClick(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-2'>
        <div>
          <label className='mb-0.5 block' htmlFor='email'>Email</label>
          <input
            autoFocus
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-yellow-600'
            }`}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email (contoh: raffu@mail.com)'
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className='mb-0.5 block' htmlFor='name'>Nama</label>
          <input
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-yellow-600'
            }`}
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Nama (contoh: Raffu)'
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className='mb-0.5 block' htmlFor='notes'>Catatan Pemesanan</label>
          <textarea
            name="notes"
            id="notes"
            value={formData.notes}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600'
            placeholder='Catatan Pemesanan (opsional)'
          ></textarea>
        </div>

        <input type="hidden" name="totalOrder" id="totalOrder" value={totalOrder} />
        <input type="hidden" name="totalPrice" id="totalPrice" value={totalPrice} />

        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={() => onOpenClick(false)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Batal
          </button>

          <button
            type="submit"
            className="rounded-lg bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
          >
            Selesai
          </button>
        </div>
      </form>
    </>
  )
}

export default FormPesan
