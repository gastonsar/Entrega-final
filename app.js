
let total = 0

let carrito = sessionStorage.getItem('carrito') ? JSON.parse(sessionStorage.getItem('carrito')) : []

let productos = ''

let hamburguesas;

fetch("./hamburguesas.json")
    .then((Response) => {
        if (Response.ok) {
            return Response.json()
        }
    })
    .then((hamburguesa) => {
        hamburguesas = hamburguesa
    })
    .catch((error) => {
        console.log(error)
    })





const botonMex = document.getElementById('botonMex')

const botonArg = document.getElementById('botonArg')

const botonRoquefort = document.getElementById('botonRoquefort')

const botonCuatroQuesos = document.getElementById('botonCuatroQuesos')

const botonFullBacon = document.getElementById('botonFullBacon')

const finalizar = document.getElementById('finalizar')

const botonVacio = document.getElementById('botonVacio')

const borrar = document.getElementById('Borrar')

botonMex.onclick = () => {
    const mexicana = hamburguesas.find(hamburguesa => hamburguesa.nombre === 'hamburguesa Mexicana')
    carrito.push(mexicana)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente a tu carrito ${mexicana.nombre} 
        precio: $ ${mexicana.precio}`
    })
}

botonArg.onclick = () => {
    const argentina = hamburguesas.find(hamburguesa => hamburguesa.nombre == 'hamburguesa Argentina')
    carrito.push(argentina)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente a tu carrito ${argentina.nombre} 
        precio: $ ${argentina.precio}`
    })
}


botonRoquefort.onclick = () => {
    const roquefort = hamburguesas.find(hamburguesa => hamburguesa.nombre == 'hamburguesa Roqueford')
    carrito.push(roquefort)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente a tu carrito ${roquefort.nombre} 
        precio: $ ${roquefort.precio}`
    })
}

botonCuatroQuesos.onclick = () => {
    const cuatroQuesos = hamburguesas.find(hamburguesa => hamburguesa.nombre == 'Hamburguesa Cuatro Quesos')
    carrito.push(cuatroQuesos)
    verTotal()

    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente a tu carrito ${cuatroQuesos.nombre} 
        precio: $ ${cuatroQuesos.precio}`
    })
}

botonVacio.onclick = () => {
    const vacio = hamburguesas.find(hamburguesa => hamburguesa.nombre == 'vacio Desmenuzado')
    carrito.push(vacio)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente a tu carrito ${vacio.nombre} 
        precio: $ ${vacio.precio}`
    })
}



botonFullBacon.onclick = () => {
    const fullBacon = hamburguesas.find(hamburguesa => hamburguesa.nombre == 'hamburguesa Full Bacon')
    carrito.push(fullBacon)
    verTotal()
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Realizado',
        icon: 'success',
        text: `se agrego correctamente ${fullBacon.nombre}
precio: ${fullBacon.precio} `
    })
}

function vaciarCarrito() {
    Swal.fire({
        icon: 'info',
        title: '¿Está seguro de que desea vaciar el carrito?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',

    })
        .then(resultado => {
            if (resultado.isDismissed == false) {
                carrito = []
            }
        })

}


function verTotal() {
    productos = ''
    total = 0
    for (const producto of carrito) {
        total = total + producto.precio
        productos += `${producto.nombre} 
    `
    }
}

function finalizarCompra() {
    if (carrito.length > 0) {
        Swal.fire({
            text: `tu resumen es 
    ${productos}
    y tu total a pagar es $ ${total}`,
            icon: 'success',
            title: 'Muchas gracias!'
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes agregar productos a tu carrito'
        })
    }
    carrito = []
}

finalizar.addEventListener('click', finalizarCompra)

borrar.addEventListener('click', vaciarCarrito)


let valorCuatroQuesos = document.getElementById('precioCuatroQuesos')

valorCuatroQuesos.innerText = `su valor: $2000 `
valorCuatroQuesos.className = 'texto'
valorCuatroQuesos.style.color = 'red'

let ValorVacio = document.getElementById('precioVacio')

ValorVacio.innerText = `su valor: $2000`
ValorVacio.className = 'texto'
ValorVacio.style.color = 'red'

let valorFullBacon = document.getElementById('precioFullBacon')

valorFullBacon.innerText = `su valor: $1650`
valorFullBacon.className = 'texto'
valorFullBacon.style.color = 'red'

let valorRoqueFord = document.getElementById('precioRoqueFord')

valorRoqueFord.innerText = `su valor: $1800`
valorRoqueFord.className = 'texto'
valorRoqueFord.style.color = 'red'

let ValorArgentina = document.getElementById('precioArgentina')

ValorArgentina.innerText = `su valor: $ 1300`
ValorArgentina.className = 'texto'
ValorArgentina.style.color = 'red'

let valorMexicana = document.getElementById('precioMexicana')

valorMexicana.innerText = `su valor: $ 1500`
valorMexicana.className = 'texto'
valorMexicana.style.color = 'red'


let carro = document.querySelectorAll('carro')


