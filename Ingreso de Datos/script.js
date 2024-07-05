// Validación de la cédula (ejemplo: 1234567890)
const cedulaInput = document.getElementById('cedula');
const cedulaRegex = /^[0-9]{10}$/;

cedulaInput.addEventListener('input', () => {
    const cedulaValue = cedulaInput.value;
    if (!cedulaRegex.test(cedulaValue)) {
        cedulaInput.setCustomValidity('La cédula debe contener 10 dígitos numéricos.');
    } else {
        cedulaInput.setCustomValidity('');
    }
});

// Validación del teléfono (ejemplo: 0991234567)
const telefonoInput = document.getElementById('telefono');
const telefonoRegex = /^[0-9]{10}$/;

telefonoInput.addEventListener('input', () => {
    const telefonoValue = telefonoInput.value;
    if (!telefonoRegex.test(telefonoValue)) {
        telefonoInput.setCustomValidity('El teléfono debe contener 10 dígitos numéricos.');
    } else {
        telefonoInput.setCustomValidity('');
    }
});

// Validación del correo electrónico
const correoInput = document.getElementById('correo');
const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

correoInput.addEventListener('input', () => {
    const correoValue = correoInput.value;
    if (!correoRegex.test(correoValue)) {
        correoInput.setCustomValidity('Ingresa un correo electrónico válido.');
    } else {
        correoInput.setCustomValidity('');
    }
});

// Almacenamiento de datos locales (puedes usar localStorage o IndexedDB)
const form = document.getElementById('clienteForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos (ya validados)
    const cedula = cedulaInput.value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = telefonoInput.value;
    const correo = correoInput.value;

    // Implementa aquí el almacenamiento de datos locales
    const cliente = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        correo
    };
    localStorage.setItem('cliente', JSON.stringify(cliente));

    alert('Cliente guardado correctamente');
});