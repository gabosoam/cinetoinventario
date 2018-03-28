var states = [{
  "value": 0,
  "text": "EN BODEGA"
}, {
  "value": 1,
  "text": "ENTREGADO"
},
{
  "value": 2,
  "text": "RESERVADO"
}];

jQuery(document).bind("keyup keydown", function (e) {
  if (e.ctrlKey && e.keyCode == 80) {
    etiqueta();
    return false;
  }
});

function etiqueta() {

  var gridDataArray = $('#grid').data('kendoGrid')._data;


  w3.displayObject("Etiquetas", { etiquetas: gridDataArray });

  print();
  //$("#myModal2").modal()
}



kendo.culture("es-ES");
$(document).ready(function () {
  dataSource = new kendo.data.DataSource({
    transport: {
      read: { url: "/product/read", dataType: "json" }
    },
    batch: true,
    pageSize: 10,
    serverFiltering: false,
    schema: {
      model: {
        id: "id",
        fields: {
          code: { type: "string" },
          date: { type: 'date', editable: false },
          voucherdate: { type: 'date', editable: false },
          state: { type: 'state', editable: false }
        }
      }
    },


    group: [{ field: "description", dir: "asc" }, {
      field: "state", aggregates: [{ field: "state", aggregate: "count" }
      ]
    }],
    aggregate: [
      { field: "code", aggregate: "count" },
      { field: "category", aggregate: "count" },
      { field: "state", aggregate: "count" }],
    pageSize: 10000
  }
  );


  dataSourceEvent = new kendo.data.DataSource({
    transport: {
      read: { url: "/event", dataType: "json" }
    },
    batch: true,
    pageSize: 10,
    serverFiltering: false,
    schema: {
      model: {
        id: "id",
        fields: {
          code: { type: "string" },
          date: { type: 'date', editable: false },
          voucherdate: { type: 'date', editable: false },
          state: { type: 'state', editable: false }
        }
      }
    },

    pageSize: 10000
  }
  );

  dataSourceError = new kendo.data.DataSource({
    transport: {
      read: { url: "/error", dataType: "json" }
    },
    batch: true,

    serverFiltering: false,
    schema: {
      model: {
        id: "id",
        fields: {
          date: { type: 'date', editable: false },
          voucherdate: { type: 'date', editable: false }
        }
      }
    },

    pageSize: 10
  }
  );





  $("#grid").kendoGrid({
    dataSource: dataSource,
    height: 600,
    toolbar: ['excel'],
    pdf: {
      allPages: true,
      avoidLinks: true,
      paperSize: "A4",
      margin: { top: "3.8cm", left: "1cm", right: "1cm", bottom: "2.54cm" },
      landscape: true,
      repeatHeaders: true,
      template: $("#page-template").html(),
      scale: 0.8,
      fileName: "reporte.pdf",
      exportOnlyData: "true"
    },
    scrollable: true,
    columnMenu: true,
    filterable: true,
    resizable: true,
    groupable: true,

    pageable: { refresh: true },
    columns: [
      { field: "barcode", title: "No de serie", filterable: { search: true, multi: true } },
      {
        field: "code", aggregates: ["count"], title: "Código",
        groupHeaderTemplate: "Código: #= value # (#= count#)", filterable: { multi: true, search: true, search: true }
      },
      { field: "description", title: "Producto", filterable: { multi: true, search: true, search: true }, hidden: true },
      {
        field: "category", aggregates: ["count"], title: "Categoría",
        groupHeaderTemplate: "Categoría: #= value # (Cantidad: #= count#)", filterable: { multi: true, search: true, search: true }
      },
      { field: "brand", title: "Marca", filterable: { multi: true, search: true } },


      { field: "date", title: "F. Ingreso", filterable: { search: true, search: true }, format: "{0:dd/MM/yyyy}" },


      { field: "reference", title: "Referencia", filterable: { multi: true, search: true } },
      {
        field: "state", hidden: true, aggregates: ["count"], title: "Estado", filterable: { multi: true, search: true, search: true },
        groupHeaderTemplate: " #= value # (Cantidad: #= count#)"
      },
      { field: 'client', title: 'Entregado a', filterable: { multi: true, search: true } },

      { field: 'voucherdate', title: 'F. Salida', filterable: { search: true, search: true }, format: "{0:dd/MM/yyyy}" },

      { field: 'voucherid', title: 'Ref. Salida', filterable: { multi: true, search: true } },
      { field: "location", title: "Ubicación", filterable: { multi: true, search: true } },
      { field: "observation", title: "Observación", filterable: false }],
    dataBound: function (e) {
      if (this.dataSource.group().length > 0) {
        console.log($(".k-grouping-row"));

        for (var i = 0; i < $(".k-grouping-row").length; i++) {
          this.collapseGroup($(".k-grouping-row")[i]);
        }

      }
    }
  });

  $("#grid3").kendoGrid({
    dataSource: dataSourceError,
    toolbar: ['excel'],
    height: 600,
    scrollable: true,
    columnMenu: true,
    filterable: true,
    resizable: true,
    groupable: true,

    pageable: { refresh: true },
    columns: [
      { field: "type", title: "Tipo", filterable: { search: true, multi: true } },
      { field: "user", title: "Usuario", filterable: { search: true, multi: true, } },
      { field: "date", title: "Fecha", filterable: { search: true }, format: "{0:dd/MM/yyyy HH:mm:ss}" },
      { field: "message", title: "Mensaje", filterable: { multi: true, search: true } },
    ],

  });



  $("#grid2").kendoGrid({
    dataSource: dataSourceEvent,
    toolbar: ['excel'],
    height: 600,
    scrollable: true,
    columnMenu: true,
    filterable: true,
    resizable: true,
    groupable: true,
    pageable: { refresh: true },
    columns: [
      { field: "table", title: "Tabla afectada", filterable: { search: true, multi: true } },
      { field: "values", title: "Valores", filterable: { search: true } },
      { field: "user", title: "Usuario", filterable: { search: true, multi: true, } },
      { field: "date", title: "Fecha", filterable: { search: true }, format: "{0:dd/MM/yyyy HH:mm:ss}" },
      { field: "ip", title: "IP Origen", filterable: { multi: true, search: true } },
      { field: "type", title: "Tipo", filterable: { search: true, multi: true } },
    ],

  });



  $('#panel').on('DOMSubtreeModified', function (event) {
    $("#grid3").data("kendoGrid").dataSource.read();
  });


});
