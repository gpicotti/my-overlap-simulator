document.getElementById('entityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;
    const campo3 = document.getElementById('campo3').value;
    const campo4 = document.getElementById('campo4').value;

    const newEntity = { campo1, campo2, campo3, campo4 };
    addEntityToTable(newEntity);
});

const entities = [];

function addEntityToTable(entity) {
    const status = checkOverlap(entity) ? 'Superposición' : 'Almacenable';
    entities.push(entity);

    const tableBody = document.querySelector('#entitiesTable tbody');
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = entity.campo1;
    row.insertCell(1).innerText = entity.campo2;
    row.insertCell(2).innerText = entity.campo3;
    row.insertCell(3).innerText = entity.campo4;
    row.insertCell(4).innerText = status;

    clearFormInputs();
}

function checkOverlap(newEntity) {
    return entities.some(entity =>
        entity.campo1 === newEntity.campo1 ||
        entity.campo2 === newEntity.campo2 ||
        entity.campo3 === newEntity.campo3 ||
        entity.campo4 === newEntity campo4
    );
}

function clearFormInputs() {
    document.getElementById('campo1').value = '';
    document.getElementById('campo2').value = '';
    document.getElementById('campo3').value = '';
    document.getElementById('campo4').value = '';
}