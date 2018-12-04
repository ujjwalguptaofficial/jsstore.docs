var DbCon = new JsStore.Instance(),
    TableInsertCount = 0,
    CodeInitTime,
    editor;

function setRecordCount() {
    var TableList = ["Customers", "Categories", "Employees", "OrderDetails",
            "Orders", "Products", "Shippers", "Suppliers"
        ],
        Tbody = $('#divDbInfo table tbody');
    TableList.forEach(function (item) {
        DbCon.count({
            From: item,
            OnSuccess: function (count) {
                Tbody.append('<tr><td>' + item + '</td><td>' + count + '</td></tr>');
            }
        })
    });
    $('#divDbInfo table tbody').on('click', 'tr td', function () {
        var Element = $(this);
        if (Element.index() == 0) {
            var Code = "var Connection = new JsStore.Instance('Demo');\n" +
                "Connection.select({\n" +
                "\tFrom:'" + Element.text() + "'\n" +
                "},function (results) {\n" +
                "\tlog(results);\n" +
                "});\n";
            // $('#divCode pre').html(Code);
            editor.setValue(Code);
            // var Mode = require('ace/mode/javascript').Mode;
            // $('#divCode').html(Code);
            // editor.getSession().setMode('ace/mode/javascript');
            // var beautify = ace.require("ace/ext/beautify");
            // beautify.beautify(editor.session);
            $('#btnExecute').click();
        }
    });
    $('#btnExecute').removeAttr('disabled');
}

function setStatusMsg(msg) {
    $('#spanStatusMsg').text(msg);
}

function createModal(Msg) {
    Dialog.create({
        Content: {
            Label: '<span>' + Msg + '</span>' +
                '<div class="divider margin-top-20px"></div>' +
                '<div class="margin-top-20px"><b>Status : </b><span id="spanStatusMsg"></span></div>'
        }
    });
}

function initDb(isModalOpen) {
    JsStore.isDbExist('Demo', function (exist) {
            if (exist) {
                DbCon.openDb('Demo');
                setRecordCount();
            } else {
                createModal('Please wait - we are configuring editor for first use.');
                setStatusMsg('Creating Database');
                DbCon.createDb(DataBase, function () {
                    setStatusMsg('Database created');
                });
                insertIntoDb();
            }
        },
        function (err) {
            console.log(err);
            alert(err.Message);
        });
}

function onPageLoaded() {
    editor = ace.edit("divCode");
    editor.setTheme("ace/theme/eclipse");
    editor.session.setMode("ace/mode/javascript");
    JsStore.setConfig({
        EnableLog: true,
        OnDbDroppedByBrowser: function () {
            alert('database deleted by browser, please reload the browser');
        }
    });
    // JsStore.enableLog();
    Dialog.setModalConfig({
        Dismissible: false
    });
    initDb();
    $('#btnExecute').click(function () {
        var Code = editor.getValue(); //$('#divCode pre').text();
        eval(Code);
        CodeInitTime = performance.now();
    });
    $('#divDbInfo table tfoot').click(function () {
        createModal('Please wait - we are restoring database for you.');
        setStatusMsg('removing database');
        DbCon = new JsStore.Instance('Demo');
        DbCon.dropDb(function () {
            setTimeout(function () {
                window.location.reload();
            }, 200);
        })
    })
}

function log(results) {
    var CodeEndTime = performance.now(),
        TimeTaken = (CodeEndTime - CodeInitTime) / 1000;
    $('#timeTakenContainer').show();
    $('#timeCount').text(TimeTaken);
    var result_type = JsStore.getType(results);
    switch (result_type) {
        case JsStore.Data_Type.Array:
            var Table = document.createElement('Table'),
                RowsLength = results.length,
                HtmlString = "<tr>",
                Props = [];
            for (var prop in results[0]) {
                Props.push(prop)
                HtmlString += "<th>" + prop + "</th>"
            }
            HtmlString += "</tr>";
            var Width = 100 / Props.length;
            for (var i = 0; i < RowsLength; i++) {
                var Temp = "<tr>";
                for (var j = 0; j < Props.length; j++) {
                    if (typeof IsJoin == 'undefined' || !IsJoin) {
                        Temp += "<td>" + results[i][Props[j]] + "</td>";
                    } else {
                        Temp += "<td style=width:" + Width + "%>" + JSON.stringify(results[i][Props[j]]) + "</td>";
                    }
                }
                Temp += "</tr>"
                HtmlString += Temp;
            }
            Table.innerHTML = HtmlString;
            Table.className = "bordered responsive-table centered";
            var DivResult = document.getElementById('divResult');
            DivResult.innerHTML = "";
            DivResult.appendChild(Table);
            $('#recordCount').show().text("No of Record : " + results.length);
            break;
        case JsStore.Data_Type.Object:
            results = JSON.stringify(results);
        case JsStore.Data_Type.String:
        case JsStore.Data_Type.Number:
            $('#recordCount').hide();
            var DivResult = document.getElementById('divResult');
            DivResult.innerHTML = results //+ " rows affected";
            break;
        default:
            alert('invalid result');

    }
}