var roles = [{
    "value": 1,
    "text": "Usuario"
}, {
    "value": 2,
    "text": "Administrador"
}];



kendo.culture("es-ES");
$(document).ready(function () {

    dataSource = new kendo.data.DataSource({
        transport: {
            read: { url: "/provider/read", dataType: "json" },
            update: { url: "/provider/updateAdmin", type: "POST", dataType: "json" },
            destroy: { url: "/provider/deleteAdmin", type: "POST", dataType: "json" },
            create: { url: "/provider/createAdmin", type: "POST", dataType: "json" },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    var datos = options.models[0]
                    return datos;
                }
            }
        },
        batch: true,
        pageSize: 10,
        serverFiltering: false,
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { editable: false, nullable: false},
                    dni: { validation: { required: true, size:13 }, type: 'string' },
                    name: { validation: { required: true, }, type: 'string' },
                    address: { validation: { required: false, }, type: 'string' },
                    phone: { validation: { required: false, }, type: 'string' },
                    email: { validation: { required: false,email: true }, type: 'string' }
                }
            }
        }
    },
    );

    $("#grid").kendoGrid({
        dataSource: dataSource,
        height: 475,
        filterable: true,
        resizable: true,
        pageable: { refresh: true, pageSizes: true, },
        toolbar: ['create','excel'],
        columns: [
            { field: "dni", title: "Cedula/RUC", filterable: { multi: true, search: true, search: true } },
            { field: "name", title: "Nombre o razón social", filterable: { multi: true, search: true, search: true } },
            { field: "address", title: "Direccion", filterable: { multi: true, search: true, search: true } },
            { field: "phone", title: "Telefono", filterable: {  multi: true, search: true } },
            { field: "email", title: "Email", filterable: {  multi: true, search: true } },
            { command: ["edit", "destroy"], title: "Acciones"}],
        editable: "popup"
    });
});
function redirect(location) {
    window.location.href = location;
}
