var unid;
$(document).ready(function () {
  dataSource = new kendo.data.DataSource({
    transport: {
      read: { url: "/model/read2", dataType: "json" }
    },
    batch: true,
    pageSize: 10,
    serverFiltering: false
  },
);

var socket = io.connect();
socket.emit('getUnit',function (unit) {
  unid = unit
})


var element = $("#grid").kendoGrid({
  dataSource: dataSource,
  filterable: true,
  pdf: {
    title: 'reporte',
    allPages: true,
    avoidLinks: false,
    paperSize: "A4",
    margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
    landscape: true,
    repeatHeaders: true,
    template: $("#page-template").html(),
    scale: 0.8
  },
  pdfExport: function (e) {
    var grid = $("#grid").data("kendoGrid");
    grid.hideColumn(3);
    e.promise
    .done(function () {
      grid.showColumn(3);
    });
  },
  pageable: { refresh: true, pageSizes: true },
  detailTemplate: kendo.template($("#template").html()),
  detailInit: detailInit,
  dataBound: function () {
    // this.expandRow(this.tbody.find("tr.k-master-row").first());
  },
  columns: [
    { field: "code", title: "Código", filterable: { search: true } },
    { field: "description", title: "Producto", filterable: {  search: true } },
    { field: "unit", title: "Unidad de medida", filterable: { search: true } },
    { field: "category", title: "Categoría", filterable: {  search: true } },
    { field: "brand", title: "Marca", filterable: { search: true } }],
    editable: "popup"
  });

});
function detailInit(e) {

    var detailRow = e.detailRow;

    detailRow.find(".tabstrip").kendoTabStrip({
      animation: {
      }
    });
    detailRow.find(".orders").kendoGrid({
      dataSource: {
        transport: {
          read: { url: "/price/read", dataType: "json" },
          update: { url: "/price/update", type: "POST", dataType: "json" },
          destroy: { url: "/price/delete", type: "POST", dataType: "json" },
          create: { url: "/price/create", type: "POST", dataType: "json" },
          parameterMap: function (options, operation) {
            if (operation !== "read" && options.models) {
              var datos = options.models[0]
              return datos;
            }
          }
        },
        batch: true,
        serverFiltering: false,
        schema: {
          model: {
            id: "id",
            fields: {
              variant: { editable: false, type: 'string', defaultValue: e.data.id },
              price: { validation: { required: true, }, type: 'string' },
              description: { validation: { required: true, }, type: 'string' }
            }
          }
        },
        filter: { field: "variant", operator: "eq", value: e.data.id }

      },
      scrollable: true,
      sortable: true,
      filterable: true,
      pageable: false,
      toolbar: ['create', 'excel','pdf'],
      columns: [
        { field: "description",values: unid, title: "Unidad de salida", filterable: { multi: true, search: true, search: true } },
        { field: "size", title: "Divisible", filterable: { multi: true, search: true, search: true } },
        { field: "variant", width: '1px' },
        { field: "price", title: "Precio", filterable: { multi: true, search: true, search: true } },
        { command: ["edit", "destroy"], title: "Acciones" }
      ],editable: "inline"
    });




}
