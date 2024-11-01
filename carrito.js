document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach((producto, index) => {
            const item = document.createElement('div');
            item.classList.add('producto-en-carrito');
            item.innerHTML = `
                <p><strong>${producto.nombre}</strong> - $${producto.precio}</p>
                <button class="boton-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
            `;
            listaCarrito.appendChild(item);
            total += parseFloat(producto.precio);
        });

        totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    }

    window.eliminarDelCarrito = function(index) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        alert('Gracias por tu compra!');
        localStorage.removeItem('carrito');
        window.location.href = 'index.html';
    });

    mostrarCarrito();
});
