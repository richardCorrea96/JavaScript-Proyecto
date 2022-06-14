

function verCarrito () {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === "Teclado mecanico") {
            alert("Su carrito contiene " + carrito[i].nombre + " x" + totalCantidad0)}
        else if (carrito[i].nombre === "Teclas(fullpack)") {
            alert("Su carrito contiene " + carrito[i].nombre + " x" + totalCantidad1)
        } else if (carrito[i].nombre === "Switches(pack75)") {
            alert("Su carrito contiene " + carrito[i].nombre + " x" + totalCantidad2)
    }

}
alert("El total es de: " + totalFinal)
}

function agregarProductos() {
    carrito.push(productos[opcion])
}

function tarjetaCredito () {
    numero = parseInt(prompt("Ingrese el numero de su tarjeta"))
    codigo = parseInt(prompt("Ingrese el codigo de seguridad"))
    alert("Gracias, vuelva pronto!")
}


const carrito = []

const productos = [
    {id: 1, nombre: 'Teclado mecanico', precio: 2500},
    {id: 2, nombre: 'Teclas(fullpack)', precio: 900},
    {id: 3, nombre: 'Switches(pack75)', precio: 1500},
]



i = true
let total = 0
let producto = 0
let opcion = 0
let cantidad = 0
let totalFinal = 0
let final = 0
let final2 = 0
let numero = 0
let codigo = 0
let totalCantidad0 = 0
let totalCantidad1 = 0

let totalCantidad2 = 0




while (i){
    opcion =  parseInt(prompt(`\nBienvenido, ingrese el numero del producto que desea comprar:\n
Teclado: 2500$, Opcion: 0\n
Teclas(fullpack): 900$, Opcion: 1\n
Switches(pack 75): 1500$, Opcion: 2\n
Salir: Opcion: 3\n`))

    switch (opcion){
        case 0:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
            total = productos[0].precio * cantidad
            totalCantidad0 += cantidad
            totalFinal += total
            agregarProductos(0)
            final = parseInt(prompt
            ("\nSeguir comprando: Opcion 0\nMostrar Carrito: Opcion 1\nFinalizar compra: Opcion 2"))
                if (final == 0) {break;}
                if (final == 1) {
                    verCarrito();
                    final2 = parseInt(prompt("\nSeguir comprando: Opcion 0\nFinalizar compra: Opcion 1"))
                    if (final2 == 0) {break;}
                    if (final2 == 1) {
                        alert("El Monto total de su compra es de " + totalFinal + "$")
                        tarjetaCredito()
                        totalFinal = 0
                        break;
                    }
                    break; }
                if (final == 2) {
                    alert("El Monto total de su compra es de " + totalFinal + "$")
                    tarjetaCredito()
                    totalFinal = 0
            break;
        }
        case 1:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
            total = productos[1].precio * cantidad
            totalFinal += total
            totalCantidad1 += cantidad
            agregarProductos(1)
            final = parseInt(prompt
                ("\nSeguir comprando: Opcion 0\nMostrar Carrito: Opcion 1\nFinalizar compra: Opcion 2"))
                    if (final == 0) {break;}
                    if (final == 1) {
                        verCarrito();
                        final2 = parseInt(prompt("\nSeguir comprando: Opcion 0\nFinalizar compra: Opcion 1"))
                        if (final2 == 0) {break;}
                        if (final2 == 1) {
                            alert("El Monto total de su compra es de " + totalFinal + "$")
                            tarjetaCredito()
                            totalFinal = 0
                            break;
                        }
                        break; }
                    if (final == 2) {
                        alert("El Monto total de su compra es de " + totalFinal + "$")
                        tarjetaCredito()
                        totalFinal = 0
                break;
            }
        case 2:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
            total = productos[2].precio * cantidad
            totalFinal += total
            totalCantidad2 += cantidad
            agregarProductos(2)
            final = parseInt(prompt
                ("\nSeguir comprando: Opcion 0\nMostrar Carrito: Opcion 1\nFinalizar compra: Opcion 2"))
                    if (final == 0) {break;}
                    if (final == 1) {
                        verCarrito();
                        final2 = parseInt(prompt("\nSeguir comprando: Opcion 0\nFinalizar compra: Opcion 1"))
                        if (final2 == 0) {break;}
                        if (final2 == 1) {
                            alert("El Monto total de su compra es de " + totalFinal + "$")
                            tarjetaCredito()
                            totalFinal = 0
                            break;
                        }
                        break; }
                    if (final == 2) {
                        alert("El Monto total de su compra es de " + totalFinal + "$")
                        tarjetaCredito()
                        totalFinal = 0
                break;
            }
        case 3:
            i = false
            break;
    }
}
alert("Gracias por su visita, vuelva pronto")


