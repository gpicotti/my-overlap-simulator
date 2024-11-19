// Controlar el evento de envío del formulario
document.getElementById('entityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener valores de los campos
    const item = document.getElementById('item').value;
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
    const promo = document.getElementById('promo').value;

    const newEntity = { item, tipo, subtipo, promo }; // Crear el nuevo objeto entidad

    if (!checkOverlap(newEntity)) { // Verificar si hay superposición
        addEntityToTable(newEntity); // Agregar entidad a la tabla
    } else {
        alert('Error: La entidad ya existe en la tabla.'); // Mensaje de error si hay superposición
    }
});

const entities = []; // Arreglo para almacenar entidades

// Función para agregar una entidad a la tabla
function addEntityToTable(entity) {
    const status = 'Almacenable'; // Estado de la entidad
    entities.push(entity); // Almacenar la entidad en el arreglo

    const tableBody = document.querySelector('#entitiesTable tbody'); // Seleccionar el tbody de la tabla
    const row = tableBody.insertRow(); // Crear una nueva fila en la tabla
    row.insertCell(0).innerText = entity.item;
    row.insertCell(1).innerText = entity.tipo;
    row.insertCell(2).innerText = entity.subtipo;
    row.insertCell(3).innerText = entity.promo;
    row.insertCell(4).innerText = status; // Asignar el estado

    clearFormInputs(); // Limpiar los campos del formulario
}

// Función para verificar overlap
function checkOverlap(newEntity) {
    return entities.some(entity =>
        entity.item === newEntity.item || // Comparar item
        entity.tipo === newEntity.tipo || // Comparar tipo
        entity.subtipo === newEntity.subtipo || // Comparar subtipo
        entity.promo === newEntity.promo // Comparar promo
    );
}

// Función para limpiar los campos del formulario
function clearFormInputs() {
    document.getElementById('item').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('subtipo').value = '';
    document.getElementById('promo').value = '';
}