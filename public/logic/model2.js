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
            read: { url: "/model/read", dataType: "json" },
            update: { url: "/model/update", type: "POST", dataType: "json" },
            destroy: { url: "/model/delete", type: "POST", dataType: "json" },
            create: { url: "/model/create", type: "POST", dataType: "json" },
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
                    id: { nullable:false,  validation: { required: true, size:13 }},
                    description: { validation: { required: true, size:13 }, type: 'string' },
                    stockmin: { validation: { required: true, }, type: 'string' },
                    unit: { validation: { required: true, }, type: 'string' },
                    brand: { validation: { required: true, }, type: 'string' },
                    category: { validation: { required: true, }, type: 'string' }
                }
            }
        }
    },
    );

    $("#grid").kendoGrid({
        dataSource: dataSource,
        height: 475,
        filterable: true,
        pageable: { refresh: true, pageSizes: true, },
        toolbar: ['create','excel'],
        columns: [
            { field: "id", title: "Código", filterable: {search: true } },
            { field: "description", title: "Producto",width: '270px', filterable: { search: true } },
            { field: "brand", title: "Marca", filterable: {search: true, search: true } },
            { field: "category", title: "Categoría", filterable: {search: true, search: true } },
            { field: "stockmin", title: "Stock mínimo", filterable: { search: true } },
            { field: "unit", title: "Unidad de medida", filterable: { search: true } },

            { command: ["edit", "destroy"], title: "Acciones" }],
        editable: "popup"
    });
});
function redirect(location) {
    window.location.href = location;
}
