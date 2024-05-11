document.addEventListener('DOMContentLoaded', function() {
    const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const carrito = document.getElementById('carrito');
    const carritoContenido = document.getElementById('carrito-contenido');

    agregarCarritoBtns.forEach(btn => {
        btn.addEventListener('click', agregarProducto);
    });

    carrito.addEventListener('mouseenter', mostrarCarrito);
    carrito.addEventListener('mouseleave', ocultarCarrito);

    // Delegar evento al contenedor listaCarrito para manejar los clicks en los botones de eliminar
    listaCarrito.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('eliminar')) {
            const item = e.target.parentElement;
            listaCarrito.removeChild(item);
        }
    });

    function agregarProducto(e) {
        const producto = e.target.parentElement.parentElement;
        const imagen = producto.querySelector('img').src;
        const nombre = producto.querySelector('td:nth-child(2)').textContent;
        const precio = parseFloat(producto.querySelector('td:nth-child(4)').textContent.replace('$', ''));
        const cantidad = parseInt(producto.querySelector('input').value);
        const talla = producto.querySelector('select').value;
    
        const item = document.createElement('li');
        item.innerHTML = `
            <img src="${imagen}" alt="${nombre}" style="max-width: 50px; max-height: 50px;">
            <p>${nombre} - ${precio.toFixed(2)} - ${cantidad} - ${talla}</p>
            <button class="eliminar">Eliminar</button>
        `;
        listaCarrito.appendChild(item);
    
        // Calcular y mostrar el total de precio en el carrito
        mostrarTotal();
    
        // Mostrar alerta de que se ha añadido correctamente
        alert('Producto añadido al carrito correctamente.');
    }
    
    function mostrarTotal() {
        const items = listaCarrito.querySelectorAll('li');
        let total = 0;
        items.forEach(item => {
            const precioString = item.querySelector('p').textContent.split(' - ')[1].replace('$', '');
            const precio = parseFloat(precioString);
            total += precio;
        });
    
        const totalElement = document.getElementById('total-carrito');
        totalElement.textContent = `Total: ${total.toFixed(2)}€`;
    }
    

    function mostrarCarrito() {
        carritoContenido.classList.add('show');
    }

    function ocultarCarrito() {
        carritoContenido.classList.remove('show');
    }
});
