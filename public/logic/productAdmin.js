
$('#btnPrin').hide();
var validator = $("#formsave").kendoValidator().data("kendoValidator");
var validatorModel = $("#formSaveModel").kendoValidator().data("kendoValidator");
$("#save").on("click", function () {
    if (validator.validate()) {
        save();
    }
});


function generateBarcode() {
    $.get("/generateBarcode", function (data) {

        $('#barcode').val(data[0].barcode);
        console.log(data);
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
            $.ajax({
                type: 'GET',
                url: '/model/' + $(this).val(),
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
    var data = $('#formsave').serialize();
    var data2 = $('#formsave').serializeArray();

    console.log(data2[5].value);

    if (data2[5].value == 'S/N') {
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


    } else {
        var confirmation = confirm('Está seguro de guardar el número de serie: ' + data2[5].value);

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

        $.ajax({
            type: 'GET',
            url: '/model/' + code,
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
            read: { url: "/bill/readprice/" + bill, dataType: "json" },
            update: { url: "/product/updateprice", type: "POST", dataType: "json" },
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
                    id:{editable:false},
                    code: { editable: false },
                    description: { validation: { required: true }, type: 'string', editable: false },
                    count:{type: 'number', editable: false},
                    total:{type: 'number', editable: false},
                    price: { type: 'number' },
                    bill: { type: 'number' }
                }
            }
        },
        aggregate: [
            { field: "total", aggregate: "sum",  format:"{0:c2}" }
        ],
      
        pageSize: 1000
    },
    );

    $("#grid2").kendoGrid({
        dataSource: dataSource,
        height: 400,
        resizable: true,
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
            {field: 'count', title: 'Cantidad'},
            { field: "code", title: "Código", filterable: { search: true } },
            { field: "description", title: "Producto", filterable: { search: true } },
            { field: "price", title: "Costo Unitario", format:"{0:c2}" },
            {field: "total", title:"Costo Total", footerTemplate: "Total: #: kendo.toString(sum, 'C')  #", format:"{0:c2}"},
            { field: "bill", title: "Factura", width: '1px' },
            { command: ["edit",], title: "Acciones" }],
        editable: "inline"
    })



})
