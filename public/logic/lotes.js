var category = [];
var brand = [];
var codes = [];
var locationInv = [];
var barcode = [];

var myarray = [];

var codeaux = []




function handleFiles(files) {
    var codeaux = []
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
    for (var i = 1; i < lines.length - 1; i++) {
        category.push(lines[i][3]);
        brand.push(lines[i][4]);
        locationInv.push(lines[i][5]);
        codes.push(lines[i][0] + '+=+' + lines[i][1] + '+=+' + lines[i][3] + '+=+' + lines[i][4]);
        barcode.push(lines[i][1] + '+=+' + lines[i][2] + '+=+' + lines[i][5] + '+=+' + lines[i][6] + '+=+' + bill);
    }





    myarray = lines;
    drawOutput(lines);
    drawOutput2(lines);
}

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    return rv;
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function drawOutput(lines) {

    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");
    var header = table.createTHead();
    var row = header.insertRow(0);

    var item = document.createElement('th');
    row.appendChild(item);
    item.appendChild(document.createTextNode(lines[0][0]));

    var item2 = document.createElement('th');
    row.appendChild(item2);
    item2.appendChild(document.createTextNode(lines[0][1]));

    var item3 = document.createElement('th');
    row.appendChild(item3);
    item3.appendChild(document.createTextNode('Categoría'));

    var item4 = document.createElement('th');
    row.appendChild(item4);
    item4.appendChild(document.createTextNode('Marca'));

    var item6 = document.createElement('th');
    row.appendChild(item6);
    item6.appendChild(document.createTextNode('Stock min.'));

    var item7 = document.createElement('th');
    row.appendChild(item7);
    item7.appendChild(document.createTextNode('U. de medida'));

    var item5 = document.createElement('th');
    row.appendChild(item5);
    item5.appendChild(document.createTextNode('Acciones'));

    var tbody = table.createTBody();
    for (var i = 1; i < lines.length - 1; i++) {
        var code = lines[i][1];
        var product = lines[i][0];

        search(code, product, tbody, table, i, lines.length)


        if (i == lines.length - 2) {

        } else {

        }


    }


}

function drawOutput2(lines) {

    console.log(lines)
    //Clear previous data
    document.getElementById("output2").innerHTML = "";
    var table = document.createElement("table");
    var header = table.createTHead();
    var row = header.insertRow(0);

    for (var i = 0; i < lines[0].length; i++) {
        var item = document.createElement('th');
        row.appendChild(item);
        item.appendChild(document.createTextNode(lines[0][i]));

    }

    var item = document.createElement('th');
    row.appendChild(item);
    item.appendChild(document.createTextNode('Estado'));

    var tbody = table.createTBody();
    for (var i = 1; i < lines.length - 1; i++) {
        var row = tbody.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            var data = document.createTextNode(lines[i][j])
            firstNameCell.appendChild(data);
            firstNameCell.id = 'id' + i + '' + j
        }
        var firstNameCell = row.insertCell(-1);
        firstNameCell.appendChild(document.createTextNode('Pendiente'));
        firstNameCell.id="state"+i
    }




    table.className = 'table table-striped mitabla';




    document.getElementById("output2").appendChild(table);

    $('.mitabla').DataTable({
        scrollY: '50vh',
        scrollCollapse: true,
        paging: false,
        "searching": true,
        bSort: false,
        fixedHeader: {
            header: false
        }
    });
}

function iniciar() {
    codeaux = [];

    for (var i = 1; i < myarray.length-1; i++) {
        var aux = i;
        var code= $('#id' + aux + '' + 2).text();
        if (!compare(code)) {
            $('#state' + aux).text('No. DE SERIE REPETIDO');
            continue;
        }
        codeaux.push(code);
       senData(aux);

    }
    console.log(codeaux)
}

function compare(data) {
    var aux = true;
    for (var i = 0; i < codeaux.length; i++) {
        if (data== codeaux[i]) {
            aux = false;
        }
        
    }
    return aux;
}

function senData(i) {
    $.post( "/lotes/barcode",{
        bill: bill,
        barcode: $('#id' + i + '' + 2).text(),
        variant: $('#id' + i + '' + 1).text(),
        location: $('#id' + i + '' + 3).text(),
        observation: $('#id' + i + '' + 4).text()

    }, function( data ) {
        $("#state"+i).text(data);
       
  
    });
     

 
}


var codesnull = [];
var contadorNuevos = 0;
function search(code, product, tbody, table, i, length) {

    var aux = 0;



    $.post("/lotes/codes", { data: code }, function (data) {

        if (data == true) {


            codesnull.push(code);

            for (var index = 0; index < codesnull.length; index++) {
                if (code == codesnull[index]) {
                    aux++;
                }
            }


            if (aux <= 1) {
                contadorNuevos++;
                var row = tbody.insertRow(-1);
                var firstNameCell = row.insertCell(-1);
                firstNameCell.appendChild(document.createTextNode(product));
                var firstNameCell2 = row.insertCell(-1);
                firstNameCell2.appendChild(document.createTextNode(code));

                var select = document.createElement('input');
                select.id = 'cat' + i;
                select.className = 'form-control selectCategory';
                select.style = "width:100%"
                var firstNameCell3 = row.insertCell(-1);
                firstNameCell3.appendChild((select));

                var select2 = document.createElement('input');
                select2.id = 'bra' + i;
                select2.className = 'form-control selectBrand';
                select2.style = "width:100%"
                var firstNameCell4 = row.insertCell(-1);
                firstNameCell4.appendChild((select2));

                var select3 = document.createElement('input');
                select3.id = 'stock' + i;
                select3.className = 'form-control stock';
                select3.style = "width:60px"
                select3.value = 0
                select3.type = 'number'
                var firstNameCell6 = row.insertCell(-1);
                firstNameCell6.appendChild((select3));

                var select4 = document.createElement('input');
                select4.id = 'unit' + i;
                select4.className = 'form-control unit';
                select4.style = "width:100%"
                select4.value = 0
                select4.type = 'number'
                var firstNameCell7 = row.insertCell(-1);
                firstNameCell7.appendChild((select4));




                var button = document.createElement('button');
                button.onclick = function () {
                    var dataModel = {
                        category: $("#cat" + i).data("kendoDropDownList").value(),
                        brand: $("#bra" + i).data("kendoDropDownList").value(),
                        code: firstNameCell2.textContent,
                        description: firstNameCell.textContent,
                        stockmin: $("#stock" + i).val(),
                        unit: $("#unit" + i).data("kendoDropDownList").value(),
                    }

                    $.post("/model/create", dataModel, function (data) {
                        if (data == true) {
                            alert('Producto Guardado');
                            tbody.removeChild(row)
                        } else {

                        }
                    });


                }
                button.className = 'btn btn-primary'
                button.textContent = 'Guardar';
                var firstNameCell5 = row.insertCell(-1);
                firstNameCell5.appendChild((button));
                table.className = 'table table-striped mitabla';
                document.getElementById("output").appendChild(table);
            }

            if (i == length - 2) {
                change();
            }
            aux = 0;
        }





    });


}

function search2(code, product, barcode, tbody, table, i, length) {

    var aux = 0;


    table.className = 'table table-striped mitabla';
    document.getElementById("output2").appendChild(table);

    aux = 0;






}
function change() {
    alert('Se encontraron ' + contadorNuevos + ' código(s) nuevo(s)')
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



    dataSourceBrand = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/brand/read",
                dataType: "json"
            }
        }
    });

    $(".selectCategory").kendoDropDownList({
        dataSource: dataSourceCategory,
        editable: false,
        dataTextField: "name",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });
    $(".selectBrand").kendoDropDownList({
        dataSource: dataSourceBrand,
        editable: false,
        dataTextField: "name",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });

    $(".unit").kendoDropDownList({
        dataSource: dataSourceUnit,
        editable: false,
        dataTextField: "description",
        dataValueField: "id",
        title: "Seleccionar almacén",
        minLength: 1

    });






}

function chargeData() {


    $.post("/lotes/category/", { aux: category.unique() }, function (data) {
    });

    setTimeout(function () {
        $.post("/lotes/brand/", { aux: brand.unique() }, function (data) {
        });
    }, 5000);

    setTimeout(function () {
        $.post("/lotes/model/", { aux: codes.unique() }, function (data) {
        });
    }, 10000);

    setTimeout(function () {
        $.post("/lotes/location/", { aux: locationInv.unique() }, function (data) {
        });

    }, 15000);

    setTimeout(function () {
        $.post("/lotes/barcode/", { aux: barcode.unique() }, function (data) {

        });

    }, 20000);

    setTimeout(function () {

        $("#spinner").hide();
    }, 30000);
}

function createunique(miarray) {
    console.log(miarray)
    return miarray.unique;
    Array.prototype.unique = function (a) {
        return function () { return this.filter(a) }
    }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });
    
}

