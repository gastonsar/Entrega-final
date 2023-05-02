
let total = 0

let carrito = (sessionStorage.getItem == 'carrito') ? JSON.parse(sessionStorage.getItem('carrito')) : []


const mexicana = {
    nombre: 'hamburguesa Mexicana',
    precio: 1300
}

const argentina = {
    nombre: 'hamburguesa Argentina',
    precio: 1500
}

const roquefort = {
    nombre: 'Hamburguesa Roquefort',
    precio: 1800
}

const cuatroQuesos = {
    nombre: 'Hamburguesa Cuatro Quesos',
    precio: 2000
}

const vacio = {
    nombre: 'vacioDesmenuzado',
    precio: 2000
}

const fullBacon = {
    nombre: 'hamburguesa Full Bacon',
    precio: 1650
}


const botonMex = document.getElementById('botonMex')

const botonArg = document.getElementById('botonArg')

const botonRoquefort = document.getElementById('botonRoquefort')

const botonCuatroQuesos = document.getElementById('botonCuatroQuesos')

const botonFullBacon = document.getElementById('botonFullBacon')

const finalizar = document.getElementById('finalizar')

const botonVacio = document.getElementById('botonVacio')

const borrar = document.getElementById('Borrar')

botonMex.onclick = () => {
    carrito.push(mexicana)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

botonArg.onclick = () => {
    carrito.push(argentina)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

botonRoquefort.onclick = () => {
    carrito.push(roquefort)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

botonCuatroQuesos.onclick = () => {
    carrito.push(cuatroQuesos)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

botonVacio.onclick = () => {
    carrito.push(vacio)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

botonFullBacon.onclick = () => {
    carrito.push(fullBacon)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
}

function vaciarCarrito() {
    carrito.splice(0, carrito.length)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))

}


function verTotal() {
    total = 0
    for (producto of carrito) {
        total = total + producto.precio
    }
}

function finalizarCompra() {
    verTotal()
    alert('Tu total a pagar es ' + '$ ' + total)
vaciarCarrito()
}

finalizar.addEventListener('click', finalizarCompra)

borrar.addEventListener('click', vaciarCarrito)








