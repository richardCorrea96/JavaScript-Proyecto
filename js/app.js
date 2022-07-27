
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
let stock = []
fetch('./stock.json')
    .then((resp) => resp.json())
    .then((data)=> {
        stock = data
        productDom()
    })


const agregarAlCarrito = (idProducto) => {

    const itemInCart = carrito.find((producto) => producto.id === idProducto)
    if (itemInCart){
        itemInCart.cantidad ++
        toastAgregar(itemInCart.nombre)

    }else{
    const {id, nombre, precio} = stock.find((producto) => producto.id === idProducto)
    const itemToCart = {
        id, nombre, precio, cantidad: 1
    }
    carrito.push(itemToCart)
    toastAgregar(nombre)
    }
    
    //JSON STORAGE -- prestar atencion para no usar sessionStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    item.cantidad --
    if(item.cantidad === 0){
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
    
    }
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
                    <p class="carritoTexto">${item.nombre}</p>
                    <p class="carritoTexto">Cant: ${item.cantidad}</p>
                    <p class="carritoTexto">Precio: $${item.precio}</p>
                    <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}
const productDom = () => {
    stock.forEach((producto) => {
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
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad, 0)}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad
    })
    precioTotal.innerText = total
}

const carritoEnCero = ()=> {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))

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
        text:`Se eliminó 1 unidad de: ${producto}` ,
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
        carritoEnCero()
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