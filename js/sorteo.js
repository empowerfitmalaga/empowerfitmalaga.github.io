document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sorteo-form');
    const mensaje = document.getElementById('mensaje');
    const participarButton = document.querySelector('.formulario-participar button[type="submit"]');

    participarButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡Participación enviada correctamente!');
        // Aquí puedes agregar el resto del código para enviar el formulario
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulando el envío del formulario
        setTimeout(() => {
            mensaje.textContent = 'Participación enviada correctamente.';
            form.reset();
        }, 1000);
    });
});
