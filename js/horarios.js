// Script para la página de horarios

document.addEventListener('DOMContentLoaded', function() {
    const horarioSelect = document.getElementById('horario-select');
    const horarioImg = document.getElementById('horario-img');

    // Listener para el cambio de selección en la lista desplegable
    horarioSelect.addEventListener('change', function() {
        // Obtener el valor seleccionado
        const selectedHorario = horarioSelect.value;
        
        // Cambiar la imagen según el horario seleccionado
        if (selectedHorario === 'manana') {
            horarioImg.src = 'images/horario_manana.png';
        } else if (selectedHorario === 'tarde') {
            horarioImg.src = 'images/horario_tarde.png';
        }
    });
});
