
$('#btnPrin').hide();
var validator = $("#formsave").kendoValidator().data("kendoValidator");
var validatorModel = $("#formSaveModel").kendoValidator().data("kendoValidator");
$("#save").on("click", function () {
    if (validator.validate()) {
        save();
    }
});

jQuery(document).bind("keyup keydown", function (e) {
    if (e.ctrlKey && e.keyCode == 80) {
      
        return false;
    }
});



function generateBarcode() {
    $.get("/generateBarcode", function (data) {

        $('#barcode').val(data[0].barcode);

    });
}

$("#saveModel").on("click", function () {
    if (validatorModel.validate()) {
        saveModel();
    }
});

$("#closeBill").on("click", function () {


    if (userBill == userSession) {
        const confirmation = confirm('Al cerrar el ingreso ya no se podrá agregar ni eliminar productos a esta orden \n ¿Desea continuar?');
        if (confirmation) {
            $.post("/bill/close", { code: bill }, function (data) {
                if (data.affectedRows > 0) {
                    location.href = "/bill/" + bill;

                } else {

                }
            });
        } else {

        }
    } else {
        alert('Sólo el usuario ' + user + ' puede cerrar el ingreso');
    }


});

$('#barcode').keypress(function (e) {
    if (e.which == 13) {
        if ($(this).val() != '') {
            save();

        } else {

        }

    }
});

$('#code2').keypress(function (e) {
    
    if (e.which == 13) {

        if ($('#code2').val() != '') {
            var valor = $(this).val().replace("#", "%26");
          
            $.ajax({
                type: 'GET',
                url: '/model/' +valor,
                success: sendData
            });
        }
    }
});

function sendData(data) {
    if (data.length > 0) {
        $('#modelProduct').val(data[0].id);
        $('#nameProduct').data('kendoComboBox').value(data[0].code);
    } else {
        var r = confirm("El producto con el código " + $('#code2').val() + " no existe \n ¿Desea agregarlo?");
        if (r == true) {
            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            })
            $('#codeModal').val($('#code2').val());
        } else {

        }
    }

}

function sendData2(data) {
    if (data.length > 0) {
        $('#modelProduct').val(data[0].id)

    } else {
        var r = confirm("El producto con el código " + $('#code2').val() + " no existe \n ¿Desea agregarlo?");
        if (r == true) {
            $('#myModal').modal('show');
            $('#codeModal').val($('#code2').val());
        } else {
            alert('not okay');
        }
    }

}

function save() {
    var validator = $("#formsave").kendoValidator().data("kendoValidator");
    if (validator.validate()) {
        var data = $('#formsave').serialize();
        var data2 = $('#formsave').serializeArray();

        if (data2[4].value == 'S/N') {
            var x = prompt("Ingresar la cantidad ", "1");
            var cant = parseInt(x);
            data2.push({ name: "cant", value: cant });

            $.post("/product/createserial", data2, function (info) {

                if (info != 'Ya existe el producto') {
                    $('#grid2').data('kendoGrid').dataSource.read();
                    $('#grid2').data('kendoGrid').refresh();

                    $('#barcode').focus();
                } else {
                    alert('Ya existe el número de serie');
                    $('#barcode').focus();
                }

            });


        } else if (data2[4].value.toUpperCase() == 'A/S') {
        
            var x = prompt("Ingresar la cantidad ", "1");
            var cant = parseInt(x);
            data2.push({ name: "cant", value: cant });

            $.post("/product/createserialauto", data2, function (info) {
                alert(info)
                if (info == 'Ingreso correcto') {
                    $('#grid2').data('kendoGrid').dataSource.read();
                    $('#grid2').data('kendoGrid').refresh();

                    $('#barcode').focus();
                } else {
                    alert('Existio un error');
                    $('#barcode').focus();
                }

            });



        } else {
            var confirmation = confirm('Está seguro de guardar el número de serie: ' + data2[4].value);

            if (confirmation) {
                $.post("/product/create", data, function (info) {

                    if (info != 'Ya existe el producto') {
                        $('#grid2').data('kendoGrid').dataSource.read();
                        $('#grid2').data('kendoGrid').refresh();

                        $('#barcode').focus();
                    } else {
                        alert('Ya existe el número de serie');
                        $('#barcode').focus();
                    }

                });

            }
        }

    }

}

function saveModel() {

    var data = $('#formSaveModel').serialize();
    var data2 = $('#formSaveModel').serializeArray();


    $.post("/model/create", data, function (info) {

        if (info) {
            $('#nameProduct').data('kendoComboBox').dataSource.read();
            $('#nameProduct').data('kendoComboBox').refresh();

            $.ajax({
                type: 'GET',
                url: '/model/' + data2[0].value,
                success: sendData
            });
            $('#myModal').modal('toggle');
            $('#formSaveModel')[0].reset();

        } else {


        }



    });
}

$(document).ready(function () {

    dataSourceCombo = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/model/read",
                dataType: "json"
            }
        }
    });

    dataSourceLocation = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/location/read",
                dataType: "json"
            }
        }
    });

    dataSourceBrand = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/brand/read",
                dataType: "json"
            }
        }
    });

    dataSourceCategory = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/category/read",
                dataType: "json"
            }
        }
    });

    dataSourceUnit = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/unit/read",
                dataType: "json"
            }
        }
    });


    $("#nameProduct").kendoComboBox({
        dataSource: dataSourceCombo,
        filter: "contains",
        dataTextField: "description",
        dataValueField: "code",
        placeholder: "Buscar producto",
        minLength: 1,
        change: onChange
    });



    function onChange(e) {

        

        var code = this.value();
        
        $('#code2').val(code);

        var valor = code.replace("#", "%26");

      
        $.ajax({
            type: 'GET',
            url: '/model/' + valor,
            success: sendData
        });



    };

    $("#location").kendoDropDownList({
        dataSource: dataSourceLocation,
        editable: false,
        dataTextField: "name",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });

    $("#brand").kendoDropDownList({
        dataSource: dataSourceBrand,
        editable: false,
        dataTextField: "name",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });

    $("#category").kendoDropDownList({
        dataSource: dataSourceCategory,
        editable: false,
        dataTextField: "name",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });





    $("#unit").kendoDropDownList({
        dataSource: dataSourceUnit,
        editable: false,
        dataTextField: "smallDescription",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });
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
            update: { url: "/product/update", type: "POST", dataType: "json" },
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
                    barcode: { validation: { required: true }, type: 'string', editable: false },
                    description: { validation: { required: true, }, type: 'string', editable: false },
                    bill: { type: 'string', defaultValue: bill, editable: false, visible: false },
                    idlocation: { type: 'number' },
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

    $.get("/location/read2", function (data) {
        $("#grid2").kendoGrid({
            dataSource: dataSource,
            height: 400,
            resizable: true,
            scrollable: true,
            columnMenu: false,
            filterable: true,
            resizable: true,
            groupable: false,

            pageable: { refresh: true, pageSizes: true, },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "7.8cm", left: "1cm", right: "1cm", bottom: "2.54cm" },
                landscape: false,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
            pdfExport: function (e) {
                var grid = $("#grid2").data("kendoGrid");
                grid.hideColumn(5);
                grid.hideColumn(7);

                e.promise
                    .done(function () {
                        grid.showColumn(5);
                        grid.showColumn(7);
                    });
            },
            columns: [
                { field: 'id', hidden: true },
                { field: "Producto", hidden: true, aggregates: ["min", "max", "count"], groupHeaderTemplate: "Cantidad: #= count#" },
                { field: "barcode", aggregates: ["count"], title: "No. de serie", filterable: { search: true, multi: true }, width: '20%' },
                { field: "code", title: "Código", filterable: { search: true, multi: true }, width: '15%' },
                { field: "description", title: "Producto", filterable: { search: true, multi: true } },
                { field: "idlocation", title: "Almacén", values: data, filterable: { search: true, multi: true } },
                { field: "observation", title: "Observación", filterable: { search: true, multi: true } },
                { field: "bill", title: "Factura", width: '1px' },
                { command: ["edit", "destroy"], title: "Acciones" }],
            editable: "inline"
        })
    });





})
