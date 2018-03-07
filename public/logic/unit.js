

kendo.culture("es-ES");
$(document).ready(function () {

    dataSource = new kendo.data.DataSource({
        transport: {
            read: { url: "/unit/read", dataType: "json" },
            update: { url: "/unit/update", type: "POST", dataType: "json" },
            destroy: { url: "/unit/delete", type: "POST", dataType: "json" },
            create: { url: "/unit/create", type: "POST", dataType: "json" },
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
                    description: { validation: { required: true, }, type: 'string' },
                    smallDescription: { validation: { required: true, }, type: 'string' }
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
        { field: "description", title: "Descripción", filterable: { multi: true, search: true, search: true } },
        { field: "smallDescription", title: "Descripción corta", filterable: { multi: true, search: true, search: true } },
        { command: ["edit", "destroy"], title: "Acciones"}],
        editable: "inline"
    });
});
function redirect(unit) {
    window.location.href = unit;
}
