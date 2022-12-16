const tableAfiliados = $('#tablaAfiliados').DataTable({
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json',
    },
    ajax: {
        type: 'GET',
        url: 'https://api-borvo.fly.dev/api/v1/afiliados/?limit=1000',
        dataSrc: 'results',
        mode: 'cors',
        async: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    },
    columns: [
        {
            data: 'tipo_dni', render: function (data) {
                const tipo = data;

                switch (tipo) {
                    case 'cedula':
                        return 'Cédula';
                    case 'pasaporte':
                        return 'Pasaporte';
                    case 'tarjeta de identidad':
                        return 'Tarjeta de Identidad';
                    default:
                        return '';
                }
            }
        },
        { data: 'dni' },
        { data: 'nombre' },
        { data: 'apellido' },
        {
            data: 'estado_actual', render: function (data) {
                const estado = data;
                switch (estado) {
                    case 'activo':
                        return '<span class="badge text-bg-success" style="width: 70px">Activo</span>';
                    case 'inactivo':
                        return '<span class="badge text-bg-danger" style="width: 70px">Inactivo</span>';
                    case 'retirado':
                        return '<span class="badge text-bg-secondary" style="width: 70px">Retirado</span>';
                    default:
                        return '';
                }
            }
        },
        { defaultContent: '<div class="btn-group btn-group-sm" role="group" aria-label="Small button group"><button type="button" class= "btn btn-primary d-flex justify-align-center"><i class="bx bx-show" style="font-size: 1.5rem; color:white"></i></button><button type="button" class="btn btn-warning d-flex justify-align-center"><i class="bx bx-edit" style="font-size: 1.5rem; color:white"></i></button><button type="button" class="btn btn-danger d-flex justify-align-center"><i class="bx bx-trash" style="font-size: 1.5rem; color:white"></i></button></div>' }
    ],
    responsive: true,
    processing: true,
});


const miForm = document.getElementById('formAddAfiliado');
miForm.onsubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
        dni: formData.get('dni'),
        ips: formData.get('ips'),
        tipo_dni: formData.get('tipo_dni'),
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        fecha_nacimiento: formData.get('fecha_nacimiento'),
        genero: formData.get('genero'),
        direccion: formData.get('direccion'),
        ciudad: formData.get('ciudad'),
        telefono: formData.get('telefono'),
        estado_civil: formData.get('estado_civil'),
        email: formData.get('email'),
        estado_actual: formData.get('estado_actual')
    };

    if (create(data, 'https://api-borvo.fly.dev/api/v1/afiliados/')) {
        const modal = new bootstrap.Modal(document.getElementById('formulario1'), options);
        modal.hide();
        miForm.reset();
        tableAfiliados.ajax.reload(null, false);
    }
}