let teclado = 30
let teclas = 20
let switches = 15
let opcion = 0
let producto = 0
let total = 0
let tarjeta = 0
let carrito = 0
let cantidad = 0
let  i = true
let numero = 0

function tarjetaCredito () {
    numero = parseInt(prompt("Ingrese el numero de su tarjeta"))
    alert("Gracias, vuelva pronto!")
}

    while (i) {
        opcion =  parseInt(prompt
            ("\nBienvenido, ingrese el numero del producto que desea comprar:\nTeclado: 30$, Opcion: 1\nTeclas(pack): 20$, Opcion: 2\nSwitches(pack): 15$, Opcion: 3\nSalir: Opcion: 4"))
        switch (opcion) {
            case 1:
                producto = teclado 
                cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
                total = producto * cantidad
                carrito += total
                final = parseInt(prompt("\nSeguir comprando: Opcion 1\nFinalizar su compra: Opcion 2"))
                if (final == 1) {
                    break;
                }else if (final == 2) {
                    alert("El Monto total de su compra es de " + carrito + "$, Gracias por su compra.")
                    tarjetaCredito()
                    carrito = 0
                    break;
                }
                case 2:
                    producto = teclas 
                    cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
                    total = producto * cantidad
                    carrito += total
                    final = parseInt(prompt("\nSeguir comprando: Opcion 1\nFinalizar su compra: Opcion 2"))
                    if (final == 1) {
                        break;
                    }else if (final == 2) {
                        alert("El Monto total de su compra es de " + carrito + "$, Gracias por su compra.")
                        tarjetaCredito()
                        carrito = 0
                        break;
                    }
                    case 3:
                        producto = switches
                        cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "))
                        total = producto * cantidad
                        carrito += total
                        final = parseInt(prompt("\nSeguir comprando: Opcion 1\nFinalizar su compra: Opcion 2"))
                        if (final == 1) {
                            break;
                        }else if (final == 2) {
                            alert("El Monto total de su compra es de " + carrito + "$, Gracias por su compra.")
                            tarjetaCredito()
                            carrito = 0
                            break;
                        }
                        case 4:
                            i = false
                                break;
        }
}
alert("Gracias, esperamos que vuelva pronto!")