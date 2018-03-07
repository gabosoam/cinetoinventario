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
            read: { url: "/bill/read/"+bill, dataType: "json" },
            update: { url: "/brand/update", type: "POST", dataType: "json" },
            destroy: { url: "/brand/delete", type: "POST", dataType: "json" },
            create: { url: "/brand/create", type: "POST", dataType: "json" },
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
                    barcode: { validation: { required: true, }, type: 'string' },
                    variant: { validation: { required: true, }, type: 'string' },
                    
                    location: { validation: { required: true, }, type: 'string' },
                    bill: { validation: { required: true, }, type: 'string' },
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
        selectable:true,
        resizable: true,        
        toolbar: ['create','excel','destroy'],
        columns: [           
            { field: "barcode", title: "Serie", filterable: { search: true } },
            { field: "variant", title: "Código", filterable: { search: true } },
            { field: "location", title: "Almancen", filterable: { search: true } },
            { command: ["save"], title: "Acciones", width: '200px' }],
        editable: "inline"
    });
});
function redirect(brand) {
    window.location.href = brand;
}
