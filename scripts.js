// Controlar el evento de envío del formulario
document.getElementById('entityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    const item = document.getElementById('item').value;
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
    const promo = document.getElementById('promo').value;

    const newEntity = { item, tipo, subtipo, promo }; // Crear el nuevo objeto entidad

    if (!checkOverlap(newEntity)) { // Verificar si hay superposición
        addEntityToTable(newEntity); // Agregar a la tabla solo si no hay superposición
    } else {
        alert('Error: La entidad ya existe en la tabla.'); // Mensaje de error si hay superposición
    }
});

const entities = []; // Arreglo para almacenar las entidades

// Función para agregar una entidad a la tabla
function addEntityToTable(entity) {
    const status = 'Almacenable'; // Como no hay superposición, el estado es 'Almacenable'
    entities.push(entity); // Almacenar la nueva entidad

    const tableBody = document.querySelector('#entitiesTable tbody');
    const row = tableBody.insertRow(); // Crear una nueva fila en la tabla
    row.insertCell(0).innerText = entity.item;
    row.insertCell(1).innerText = entity.tipo;
    row.insertCell(2).innerText = entity.subtipo;
    row.insertCell(3).innerText = entity.promo;
    row.insertCell(4).innerText = status; // Asignar el estado 'Almacenable'

    clearFormInputs(); // Limpiar los campos de entrada del formulario
}

// Función para verificar superposición
function checkOverlap(newEntity) {
    return entities.some(entity =>
        entity.item === newEntity.item || // Comprueba si el item ya existe
        entity.tipo === newEntity.tipo || // Comprueba si el tipo ya existe
        entity.subtipo === newEntity.subtipo || // Comprueba si el subtipo ya existe
        entity.promo === newEntity.promo // Comprueba si el promo ya existe
    );
}

// Función para limpiar los campos del formulario
function clearFormInputs() {
    document.getElementById('item').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('subtipo').value = '';
    document.getElementById('promo').value = '';
}