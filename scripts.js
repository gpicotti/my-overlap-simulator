document.getElementById('entityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campo1 = document.getElementById('item').value;
    const campo2 = document.getElementById('tipo').value;
    const campo3 = document.getElementById('subtipo').value;
    const campo4 = document.getElementById('promo').value;

    const newEntity = { item, tipo, subtipo, promo };
    addEntityToTable(newEntity);
});

const entities = [];

function addEntityToTable(entity) {
    const status = checkOverlap(entity) ? 'Superposición' : 'Almacenable';
    entities.push(entity);

    const tableBody = document.querySelector('#entitiesTable tbody');
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = entity.item;
    row.insertCell(1).innerText = entity.tipo;
    row.insertCell(2).innerText = entity.subtipo;
    row.insertCell(3).innerText = entity.promo;
    row.insertCell(4).innerText = status;

    clearFormInputs();
}

function checkOverlap(newEntity) {
    return entities.some(entity =>
        entity.item === newEntity.item ||
        entity.tipo === newEntity.tipo ||
        entity.subtipo === newEntity.subtipo ||
        entity.promo === newEntity.promo
    );
}

function clearFormInputs() {
    document.getElementById('item').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('subtipo').value = '';
    document.getElementById('promo').value = '';
}