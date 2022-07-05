
// == selectores ==

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

//JSON STORAGE -- prestar atencion para no usar sessionStorage
let carrito
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )



// generar el DOM de todos los productos
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img} alt="" class="imgProducto" >
                    <h3 class="nombre">${producto.nombre}</h3>
                    <p class="description">${producto.desc}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})


const agregarAlCarrito = (id) => {
    const item = stockProductos.find( (producto) => producto.id === id)
    carrito.push(item)
    toastAgregar(item.nombre)
    //JSON STORAGE -- prestar atencion para no usar sessionStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    toastRemover(item.nombre)

    //remueve el producto del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    

    swalVaciar()
    //vacia por completo el carrito de productos

}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p class="carritoNombrePrecio">${item.nombre}</p>
                    <p class="carritoNombrePrecio">Precio: $${item.precio}</p>
                    <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}


const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}
const toastAgregar = (producto) => {
    Toastify({
        text:`${producto} se ageregó correctamente` ,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #88C0D0, #88C0D0)",
        }
    }).showToast()
}
const toastRemover = (producto) => {
    Toastify({
        text:`${producto} se eliminó correctamente` ,
        className: "toastRemover",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #BF616A, #BF616A)",
        }
        
    }).showToast()
}
const swalVaciar = ()  => {
Swal.fire({
    title: 'Estás seguro/a ?',
    text: "No puedes deshacer esta opción",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar todo!'
    }).then((result) => {
    if (result.isConfirmed) {
        carrito.length = 0
        localStorage.setItem('carrito', JSON.stringify(carrito))
        renderCarrito()
        renderCantidad()
        renderTotal()
        Swal.fire(
            'El carrito está vacío',
        )
    }
})
}

if (carritoEnLS) {
    carrito = carritoEnLS
//esta parte es para que si encuentra algo al cargar la pagina, lo rederice
//este if esta colocado al final, para no tener problemas con las referencias
    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}