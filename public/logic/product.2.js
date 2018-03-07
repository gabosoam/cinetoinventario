

$(document).ready(function () {
    $( "#formsave" ).hide();
    $( "#busqueda" ).hide();
    $( "#actions" ).hide();
   
    

 

    $('#formSaveModel')[0].reset();

    function userNameAutoCompleteEditor(container, options) {
        $('<input required data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: dataSourceCombo,
                placeholder: "Busca un producto",
                dataTextField: "description",
                filter: "contains",
                minLength: 1
            });
    }

    function editNumberWithoutSpinners(container, options) {
        $('<input data-text-field="' + options.field + '" ' +
            'data-value-field="' + options.field + '" ' +
            'data-bind="value:' + options.field + '" ' +
            'data-format="' + options.format + '"/>')
            .appendTo(container)
            .kendoNumericTextBox({
                spinners: false
            });
    }

    dataSource = new kendo.data.DataSource({
        transport: {
            read: { url: "/bill/read/" + bill, dataType: "json" },
            update: { url: "/product/create", type: "POST", dataType: "json" },
            destroy: { url: "/product/delete", type: "POST", dataType: "json" },
            create: {
                url: "/product/create", type: "POST", dataType: "json", success: function (data) {
                    
                },
            },
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
                    Producto: { editable: false },
                    barcode: { validation: { required: true, decimals: 0, min: 1 }, type: 'string', editor: editNumberWithoutSpinners },
                    description: { validation: { required: true, }, type: 'string' },
                    bill: { type: 'string', defaultValue: bill, editable: false, visible: false },
                    code: { editable: false }
                }
            }
        },
        group: {
            field: "Producto", aggregates: [
                { field: "barcode", aggregate: "count" },
                { field: "Producto", aggregate: "count" },
            ]
        },
        aggregate: [{ field: "barcode", aggregate: "count" }],
        pageSize: 1000
    },
    );

    $("#grid2").kendoGrid({
        dataSource: dataSource,
        height: 400,
        scrollable: true,
        columnMenu: true,
        filterable: true,
        resizable: true,
        groupable: true,


        pageable: { refresh: true, pageSizes: true, },
        pdf: {
            allPages: true,
            avoidLinks: true,
            paperSize: "A4",
            margin: { top: "3.8cm", left: "1cm", right: "1cm", bottom: "2.54cm" },
            landscape: true,
            repeatHeaders: true,
            template: $("#page-template").html(),
            scale: 0.8,
            fileName: "RI "+reference+".pdf",
            exportOnlyData:"true"
        },
        pdfExport: function (e) {
            var grid = $("#grid2").data("kendoGrid");
               grid.hideColumn(7);

            e.promise
                .done(function () {
                       grid.showColumn(7);
                });
        },
        columns: [
            { field: "Producto", hidden: true, aggregates: ["min", "max", "count"], groupHeaderTemplate: "Cantidad: #= count#" },
            { field: "barcode", aggregates: ["count"], title: "No. de serie", filterable: { search: true }, width: '20%' },
            { field: "code", title: "Código", filterable: { search: true } },
            { field: "description", title: "Producto", filterable: { search: true } },
            { field: "location", title: "Almacén" },
            { field: "observation", title: "Observación" },
            { field: "bill", title: "Factura", width: '1px' }],
        editable: "inline"
    })



})
