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
            read: { url: "/product/readprice", dataType: "json" },
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
                    name: { validation: { required: true, }, type: 'string' },
                    date: {type:'date'}
                }
            }
        },

        group: [ { field: "bill", dir: "desc" }],

        aggregate: [
            { field: "total", aggregate: "sum",  format:"{0:c2}" }
        ],
        pageSize: 1000
    }
    );

    $("#grid").kendoGrid({
        dataSource: dataSource,
        height: 475,
        filterable: true,
        resizable: true,
        groupable: true,
        pageable: { refresh: true, pageSizes: true, },
        toolbar: ['excel'],
        columns: [
            { field: "count", title: "Cantidad", filterable: false },
            { field: "code", title: "Código", filterable: { search: true,multi: true,  } },
            { field: "description", title: "Producto", filterable: {multi: true, search: true } },
            { field: "bill", title: "Código de ingreso", filterable: { search: true, multi:true }, groupHeaderTemplate: "ACTA DE INGRESO-#= value #" },
            { field: "name", title: "Proveedor", filterable: { search: true, multi:true} },
            { field: "date", title: "Fecha de ingreso", filterable: { search: true },  format: "{0:dd/MM/yyyy}" },
            {field: "reference", title: "Referencía", filterable: { search: true, multi:true} },
            { field: "price", title: "Costo Unitario", filterable: { search: true }, format:"{0:c2}" },
            { field: "total", title: "Costo Total", filterable: { search: true },footerTemplate: "Total: #: kendo.toString(sum, 'C')  #" }],
            dataBound: function(e){
                if (this.dataSource.group().length > 0) {
                  console.log($(".k-grouping-row"));
        
                  for (var i = 0; i < $(".k-grouping-row").length; i++) {
                   this.collapseGroup($(".k-grouping-row")[i]);
                  }
               
            }
              },
        editable: "inline"
    });
});
function redirect(category) {
    window.location.href = category;
}
