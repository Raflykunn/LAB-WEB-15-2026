const url_users = "https://jsonplaceholder.typicode.com/users"
const url_todos = "https://jsonplaceholder.typicode.com/todos?userId="

const errorKoneksi = document.getElementById("errorKoneksi")
const muatHalamann = document.getElementById("muatHalamann")
const userList = document.getElementById("userList")
const todoList = document.getElementById("todoList")
const namaUser = document.getElementById("namaUser")
const progressBar = document.getElementById("progress-bar")
const jumlahCompletedTruee = document.getElementById("jumlahCompletedTruee")
const jumlahCompleteds = document.getElementById("jumlahCompleteds")
const mencari = document.getElementById("mencari")
const buatJudul = document.getElementById("buatJudul")
const formSubmit = document.getElementById("formSubmit")
const pesanErorr = document.getElementById("pesanErorr")
const btnSimpan = document.getElementById("btnSimpan")
const errorKoneksiTodo = document.getElementById("errorKoneksiTodo")
const muatHalamanTodo = document.getElementById("muatHalamanTodo")

const memuat = `<div class="text-gray-500">Memuat Anggota...</div>`


userList.addEventListener("click", (e) => {
    const targetClick = e.target.closest(".userr")
    if (!targetClick) return

    setActive(targetClick)
    getTodo(Number(targetClick.querySelector(".id").textContent.trim()),targetClick.querySelector(".nama").textContent)
})

const setActive = (selected) => {
    
    document.querySelectorAll(".userr").forEach(u => {
        u.classList.add("bg-white")
        u.querySelector(".id").classList.add("bg-gray-200","text-gray-500","border")
        u.querySelector(".nama").classList.add("text-gray-600")
        u.classList.remove("bg-blue-200")
        u.querySelector(".id").classList.remove("bg-blue-700","text-white")
        u.querySelector(".nama").classList.remove("text-blue-700")
    })
    selected.classList.remove("bg-white")
    selected.querySelector(".id").classList.remove("bg-gray-200","text-gray-500","border")
    selected.querySelector(".nama").classList.remove("text-gray-600")
    selected.classList.add("bg-blue-200")
    selected.querySelector(".id").classList.add("bg-blue-700","text-white")
    selected.querySelector(".nama").classList.add("text-blue-700")
}

const getUser = async (e) => {
    if (e && e.preventDefault) {
        e.preventDefault()
    }

    userList.innerHTML = memuat

    try {
        let respons = await fetch(url_users)

        if (!respons.ok) {
            errorKoneksi.classList.remove("hidden")
            userList.innerHTML = ""
            return
        }

        let users = await respons.json()
        console.log(users)
        userList.innerHTML = ""

        users.forEach((user) => {
            userList.innerHTML += `
                <div class="userr rounded-lg p-2 flex items-center font-semibold mb-2">
                    <div class="id px-2 py-1 rounded-lg mr-4 border-gray-300 whitespace-nowrap">
                        ${String(user.id).padStart(2, '0')}
                    </div>
                    <div class="nama whitespace-nowrap">${user.name}</div>
                </div>    
            `
        })
        const firstUser = userList.querySelector(".userr")
        if (firstUser) {
            setActive(firstUser)
            getTodo(users[0].id, users[0].name)
        } 
        
    } catch (err) {
        errorKoneksi.classList.remove("hidden")
        userList.innerHTML = ""
    }
}

const getTodo = async (id,nama,e) => {
    if (e && e.preventDefault) {
        e.preventDefault()
    }
    
    namaUser.textContent = nama

    todoList.classList.add("p-6")
    todoList.innerHTML = memuat

    try {
        let respons = await fetch(url_todos + id)
        if (!respons.ok) {
            errorKoneksi.classList.remove()
            todoList.innerHTML = ""
            return
        }
        
        let todos = await respons.json()
        console.log(todos)
        todoList.innerHTML = ""
        todoList.classList.remove("p-6")

        jumlahCompletedTrue = todos.filter(todo => todo.completed === true).length
        jumlahCompleted = todos.length

        jumlahCompletedTruee.textContent = jumlahCompletedTrue
        jumlahCompleteds.textContent = jumlahCompleted
        persenCompletedTrue = Math.round((jumlahCompletedTrue / jumlahCompleted) * 100)

        progressBar.style.width = `${persenCompletedTrue}%`

        todos.forEach((todo) => {
            todoList.innerHTML += `
                <div class="group todo border-t border-t-gray-400 hover:bg-gray-100 p-4 flex items-center justify-between gap-4 w-full transition-colors">
                    <div class="flex items-center gap-4">
                        <div class="relative w-6 h-6 rounded-full ${todo.completed ? "bg-emerald-500 flex items-center justify-center" : "border-2 border-gray-400"}">
                            <span class="${todo.completed ? "" : "hidden"} w-2 h-3 border-r-4 border-b-4 border-white rotate-45 -translate-y-0.5"></span>
                        </div>
                        <div id="nama" class="${todo.completed ? "line-through text-gray-400" : ""}">${todo.title}</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="btn-selesai ${todo.completed ? "hidden" : ""} p-2 border border-gray-200  text-gray-500 rounded-xl font-semibold group-hover:text-black transition-colors">Tandai Selesai</button>
                        <button class="btn-hapus p-2 border border-gray-200 bg-white text-gray-500 rounded-xl font-semibold group-hover:text-black transition-colors">Hapus</button>
                    </div>
                </div>
            `
        })
    } catch (err) {
        errorKoneksi.classList.remove("hidden")
        userList.innerHTML = ""
    }
}

const updateProgreess = () => {
    const total = todoList.querySelectorAll(".todo").length
    const completed = todoList.querySelectorAll(".line-through").length

    jumlahCompletedTruee.textContent = completed
    jumlahCompleteds.textContent = total

    const persen = Math.round((completed / total) * 100)
    progressBar.style.width = `${persen}%`
}

todoList.addEventListener("click", (e) => {
    const todo = e.target.closest(".todo")
    if (!todo) return

    if (e.target.classList.contains("btn-selesai")) {
        todo.querySelector(".relative").classList.add("bg-emerald-500", "flex","items-center","justify-center")
        todo.querySelector(".relative").classList.add("border-2", "border-gray-400")
        todo.querySelector(".relative").querySelector("span").classList.remove("hidden")
        todo.querySelector("#nama").classList.add("line-through", "text-gray-400")
        e.target.remove()
    } 
    
    if (e.target.classList.contains("btn-hapus")) {
        todo.remove()
    }

    updateProgreess()
})

mencari.addEventListener("input", (e) => {
    const inputan = e.target.value
    
    const semuaTodo = todoList.querySelectorAll(".todo")
    
    semuaTodo.forEach((todo) => {
        const title = todo.querySelector("#nama").textContent.toLowerCase()
        
        if (title.includes(inputan)) {
            todo.classList.remove("hidden")
            document.getElementById("todoTakAda").classList.add("hidden")
        } else {
            todo.classList.add("hidden")
            document.getElementById("todoTakAda").classList.remove("hidden")
        }
    })
})

formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault()
    pesanErorr.textContent = ""
    if (buatJudul.value.trim() === "") {
        pesanErorr.textContent = "Judul tugas belum diisi."
        return
    } else if (buatJudul.value.trim().length < 5 ) {
        pesanErorr.textContent = "Judul terlalu pendek, minimal 5 karakter."
        return
    }

    try {
        btnSimpan.textContent = "Menyimpan..."

        btnSimpan.disabled = true
        
        const todoBaru = await simpanTugas(buatJudul.value.trim())

        const htmll = `
            <div class="group todo border-t border-t-gray-400 hover:bg-gray-100 p-4 flex items-center justify-between gap-4 w-full transition-colors">
                <div class="flex items-center gap-4">
                <div class="relative w-6 h-6 rounded-full border-2 border-gray-400">
                    <span class="hidden w-2 h-3 border-r-4 border-b-4 border-white rotate-45 -translate-y-0.5"></span>
                </div>
                <div id="nama">${todoBaru.title}</div>
            </div>
            <div class="flex items-center gap-2">
                <button class="btn-selesai p-2 border border-gray-200 bg-white text-gray-500 rounded-xl font-semibold group=hover:text-black transition-colors">Tandai Selesai</button>
                <button class="btn-hapus p-2 border border-gray-200 bg-white text-gray-500 rounded-xl font-semibold group-hover:text-black transition-colors">Hapus</button>
            </div>
        </div>
        `

        todoList.insertAdjacentHTML("beforeend", htmll)
        
        buatJudul.value = ""
        
        tampilkanToast("Tugas berhasil ditambahkan.")
    } catch (err) {
        pesanErorr.textContent = err.message
    } finally {
        updateProgreess()
        btnSimpan.textContent = "Simpan"
        btnSimpan.disabled = false
    }
    
    
})

const simpanTugas = (judul) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const title = Array.from(todoList.querySelectorAll(".nama"))

            const adaduplikat = title.some((til) => til.textContent.trim().toLowerCase() === judul.trim().toLowerCase())

            if (adaduplikat) {
                reject(new Error("Tugas dengan judul tersebut sudah ada dalam daftar!"))
            } else {
                resolve({
                    title: judul,
                    completed: false
                })
            }
        },1000)
    })
}

const tampilkanToast = (pesan) => {
    const pesanSukses = document.getElementById("pesanSukses")
    if (!pesanSukses) return

    pesanSukses.textContent = pesan
    pesanSukses.classList.remove("opacity-0", "translate-y-8", "pointer-events-none")
    pesanSukses.classList.add("opacity-100", "translate-y-0")

    setTimeout(() => {
        pesanSukses.classList.remove("opacity-100", "translate-y-0")
        pesanSukses.classList.add("opacity-0", "translate-y-8", "pointer-events-none")
    }, 3000)
}

const muatHalaman = (e) => {
    e.preventDefault()
    location.reload()
}

muatHalamann.addEventListener("click",{
    muatHalaman
})

muatHalamanTodo.addEventListener("click", {
    muatHalaman
})

getUser()

