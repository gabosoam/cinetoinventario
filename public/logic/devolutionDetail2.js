$( "#closeVoucher" ).hide();
$( "#formSave" ).hide();
$( "#tabTable" ).hide();



var validator = $("#formsave").kendoValidator().data("kendoValidator");
var validatorModel = $("#formSaveModel").kendoValidator().data("kendoValidator");
$("#save").on("click", function () {
    if (validator.validate()) {
        save();
    }
});

$("#saveModel").on("click", function () {
    if (validatorModel.validate()) {
        saveModel();
    }
});

$("#closeVoucher").on("click", function () {
    if (userBill == userSession) {
        const confirmation = confirm('Al cerrar la salida ya no se podrá agregar ni eliminar productos a esta orden \n ¿Desea continuar?');
        if (confirmation) {
            $.post("/voucher/close",{code:bill}, function (data) {
                if (data.affectedRows>0) {
                    location.href = "/voucher/" + bill;
                } else {
                }
            });
        } else {
        }
    } else {
        alert('Sólo el usuario ' + user + ' puede cerrar la salida');
    }
});

$('#code2').keypress(function (e) {
    if (e.which == 13) {
        var data = {
            serie: $(this).val(),
            voucher: $('#voucher').val()
        }
        var r = confirm("Está seguro de registrar la salida del producto con número de serie " + $('#code2').val() + "?");
        if (r) {
            $.post("/detail/create", data, function (info) {

                if (info == 'Se registro la salida satisfactoriamente') {
                    $('#grid2').data('kendoGrid').dataSource.read();
                    $('#grid2').data('kendoGrid').refresh();
                    $(this).val(null);
                } else {
                    alert(info);
                }

            });


        } else {

        }

    }
});



function sendData(data) {
    if (data.length > 0) {

    } else {

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



    var confirmation = confirm('Está seguro de guardar el número de serie: ' + data2[4].value);

    if (confirmation) {
        $.post("/product/create", data, function (info) {

            if (info != 'Ya existe el producto') {
                $('#grid2').data('kendoGrid').dataSource.read();
                $('#grid2').data('kendoGrid').refresh();
                $('#barcode').val(null);
                $('#barcode').focus();
            } else {
                alert('Ya existe el número de serie');
                $('#barcode').focus();
            }

        });

    } else {

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
            read: { url: "/devolution/readdetail/" + bill, dataType: "json" },
            update: { url: "/devolution/create", type: "POST", dataType: "json" },
            destroy: { url: "/detail/delete", type: "POST", dataType: "json" },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    var datos = options.models[0]
                    console.log(datos);
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
                    name: { editable: false },
                    barcode: { validation: { required: true, decimals: 0, min: 1 }, type: 'string', editor: editNumberWithoutSpinners },
                    description: { validation: { required: true, }, type: 'string' },
                    code: { type: 'string', defaultValue: bill},
                    voucher: { editable: false }
                }
            }
        },
        group: {
            field: "code", aggregates: [
                { field: "code", aggregate: "count" }
            ]
        },
        aggregate: [{ field: "barcode", aggregate: "count" }],
        pageSize: 1000
        

    },
    );

    $("#grid4").kendoGrid({
        dataSource: dataSource,
        height: 400,
        pageable: { refresh: true, pageSizes: true, },
        pdf: {
            allPages: true,
            avoidLinks: true,
            paperSize: "A4",
            margin: { top: "7.0cm", left: "1cm", right: "1cm", bottom: "2.54cm" },
            landscape: false,
            repeatHeaders: true,
            template: $("#page-template").html(),
            scale: 0.8,
            fileName: "RE "+reference+".pdf",
            
        },
        pdfExport: function (e) {
            var grid = $("#grid2").data("kendoGrid");
            grid.hideColumn(4);

            e.promise
                .done(function () {
                    grid.showColumn(4);
                });
        },
        columns: [
            { field: "barcode", title: "No. de serie", filterable: { search: true }, width: '20%' },
            { field: "code", title: "Código", filterable: { search: true },  aggregates: ["min", "max", "count"], groupHeaderTemplate: "Cantidad: #= count#" },
            { field: "description", title: "Producto", filterable: { search: true } },
            { field: "voucher", title: "Almacén", width: '100px', hidden: true, },
            { field: "observation", title: "Observación" },],
        editable: "inline"
    })



})
