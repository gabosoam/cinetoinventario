var types = [{
    "value": 1,
    "text": "FACTURA"
}, {
    "value": 2,
    "text": "ACTA"
}];



kendo.culture("es-ES");
$(document).ready(function () {


    dataSourceCombo = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/client/read",
                dataType: "json"
            }
        }
    });

    function userNameComboBoxEditor(container, options) {
        $('<input required data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoComboBox({
                dataSource: dataSourceCombo,
                dataTextField: "name",
                dataValueField: "id",
                filter: "contains",
                minLength: 1
            });
    }


    dataSource = new kendo.data.DataSource({
        transport: {
            read: { url: "/devolution/", type: "GET", dataType: "json" },
            update: { url: "/devolution/update", type: "POST", dataType: "json" },
            destroy: { url: "/devolution/delete", type: "POST", dataType: "json" },
            create: { url: "/devolution/create", type: "POST", dataType: "json" },
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
                    id: {editable: false},
                    client: { validation: { required: true, }, type: 'number' },
                    date: { validation: { type: 'date' },type:'date', },
                    reference: { type: 'string' },
                    user: { type: 'string', defaultValue: user, editable: false, visible: false }
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
                toolbar: ['create', 'excel'],
                columns: [
                    {field: 'id', title: 'Dev.', filterable: { search: true, multi:true } },
                    { field: "client", values: clients,editor: userNameComboBoxEditor, title: "Cliente", filterable: { search: true, multi:true }  },
                    { field: "date", title: "Fecha",  format: "{0:dd/MM/yyyy}" },
                    { field: "reference", title: "Referencia", filterable: { search: true,multi:true } },
                    { field: "user", values: users, title: "Creado por" },
                    { command: ["edit", "destroy", { text: "Ver detalles", click: showDetails, iconClass: 'icon icon-chart-column' }], title: "Acciones" }],
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
        location.href = "/devolution/" + dataItem.id;
    }


});
