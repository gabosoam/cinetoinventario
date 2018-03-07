

var types = [{
    "value": 1,
    "text": "FACTURA"
}, {
    "value": 2,
    "text": "ACTA"
}, {
    "value": 3,
    "text": "GUÍA DE REMISIÓN"
}, {
    "value": 4,
    "text": "OTRO"
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
            read: { url: "/devolution/", type: 'GET', dataType: "json" },
            update: { url: "/devolution/updateAdmin", type: "POST", dataType: "json" },
            destroy: { url: "/bill/deleteAdmin", type: "POST", dataType: "json" },
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
                    id: { editable: false },
                    client: { validation: { required: true, size: 13 },editable: false, type: 'string' },
                    type: { validation: { required: true, size: 13 }, type: 'string',editable: false },
                    date: { validation: { required: true, }, type: 'date',editable: false },
                    reference: { validation: { required: true, }, type: 'string',editable: false },
                    user: { type: 'string', defaultValue: user, editable: false, visible: false },
                    state: { type: 'string', visible: false }
                }
            }
        }
    },
    );

    var wnd,
        detailsTemplate;

    var socket = io.connect();

    $.get("/client/read2", function (clients) {
       



        $.get("/user/read2", function (users) {


            $("#grid").kendoGrid({
                dataSource: dataSource,
                filterable: true,
                groupable: true,
                resizable: true,
                pageable: { refresh: true, pageSizes: true, },
                toolbar: ['excel'],
                pdf: {
                    allPages: true,
                    avoidLinks: false,
                    paperSize: "A4",
                    margin: { top: "3.5cm", left: "1cm", right: "1cm", bottom: "2cm" },
                    landscape: true,
                    repeatHeaders: true,
                    template: $("#page-template").html(),
                    scale: 0.8
                },
                pdfExport: function (e) {
                    var grid = $("#grid").data("kendoGrid");
                    grid.hideColumn(6);

                    e.promise
                        .done(function () {
                            grid.showColumn(6);
                        });
                },
                columns: [
                    { field: 'id', title: 'DEV', filterable: { multi: true, search: true } },
                    { field: "client", values: clients, title: "Cliente", filterable: { multi: true, search: true } },
                    { field: "date", title: "Fecha", filterable: { search: true, search: true }, format: "{0:dd/MM/yyyy}" },
                    { field: "reference", title: "Referencia", filterable: { multi: true, search: true } },
                    { field: "user", values: users, title: "Creado por", filterable: { multi: true, search: true } },
                    { field: "state", values: states, title: "Estado", filterable: { multi: true, search: true } },

                    { command: ["edit"], title: "Acciones" }],
                editable: "popup"
            });

        });



    })

    function showDetails(e) {
        e.preventDefault();
        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        location.href = "/bill/admin/" + dataItem.id;
    }



});
