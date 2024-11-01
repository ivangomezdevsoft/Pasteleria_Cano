document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');
    const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');

    function actualizarContadorCarrito() {
        contadorCarrito.textContent = carrito.length;
    }

    function agregarAlCarrito(nombre, precio) {
        const producto = { nombre, precio };
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
        alert(`${nombre} ha sido añadido al carrito.`);
    }

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-nombre');
            const precio = boton.getAttribute('data-precio');
            agregarAlCarrito(nombre, precio);
        });
    });

    actualizarContadorCarrito();
});
