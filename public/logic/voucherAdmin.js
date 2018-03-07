var types = [{
    "value": 1,
    "text": "FACTURA"
}, {
    "value": 2,
    "text": "ACTA"
}];

var states = [{
    "value": 0,
    "text": "ABIERTA"
}, {
    "value": 1,
    "text": "CERRADA"
}];


kendo.culture("es-ES");
$(document).ready(function () {

    dataSource = new kendo.data.DataSource({
        transport: {
            read: { url: "/voucher/", type: "GET", dataType: "json" },
            update: { url: "/voucher/updateAdmin", type: "POST", dataType: "json" },
            destroy: { url: "/voucher/delete", type: "POST", dataType: "json" },
            create: { url: "/voucher/create", type: "POST", dataType: "json" },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    var datos = options.models[0]
                    return datos;
                }
            }
        },
        batch: true,
        pageSize: 100,
        serverFiltering: false,
        schema: {
            model: {
                id: "id",
                fields: {
                    id: {editable: false},
                    client: { validation: { required: true, }, type: 'number', editable:false },
                    date: { validation: { type: 'date' },type:'date', editable: false },
                    reference: { type: 'string', editable: false },
                    user: { type: 'string', defaultValue: user, editable: false, visible: false },
                    state: { type: 'string' }
                }
            }
        }
    },
    );

    $.get("/client/read2", function (clients) {

        $.get("/user/read2", function (users) {

            $("#grid").kendoGrid({
                dataSource: dataSource,
                height: 475,
                filterable: true,
                resizable: true,
                pageable: { refresh: true, pageSizes: true, },
                toolbar: ['excel'],
                columns: [
                    {field: 'id', title: 'FOPN',filterable: { multi: true,search: true }},
                    { field: "client", values: clients, title: "Cliente",filterable: { multi: true,search: true } },
                    { field: "date", title: "Fecha",  format: "{0:dd/MM/yyyy}" },
                    { field: "reference", title: "Referencia", filterable: { multi: true,search: true } },
                    { field: "user", values: users, title: "Creado por",filterable: { multi: true,search: true } },
                    { field: "state", values: states, title: "Estado" ,filterable: { multi: true,search: true }},
                    { command: ["edit"], title: "Acciones" }],
                editable: "popup"
            });

        });

    });

    function onchange(e) {
        alert('');
    }


    function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        location.href = "/voucher/" + dataItem.id;
    }


});
