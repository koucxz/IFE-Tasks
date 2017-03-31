//自定义数据接口
var data = {
    thead:["姓名","语文","数学","英语","总分"],
    wsort:[false,true,true,true,true],
    tbody:[
        ["小明",80,90,70,240],
        ["小红",90,60,90,240],
        ["小亮",60,100,70,230]
    ]
};
var newUiTable = function () {
    //创建表格
    var table = document.getElementById("ui-table");
    var thead = document.createElement("thead");
    table.appendChild(thead);
    var tr = document.createElement("tr");
    thead.appendChild(tr);
    for (var i = 0; i < data.thead.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = data.thead[i];
        tr.appendChild(th);
        var upArrow = document.createElement("i");
        upArrow.className = "arrow-up";
        th.appendChild(upArrow);
        var downArrow = document.createElement("i");
        downArrow.className = "arrow-down";
        th.appendChild(downArrow);
        if (data.wsort[i] == false) {
            upArrow.style.display = "none";
            downArrow.style.display = "none";
        }
    }
    //创建表格主体
    function createTbody(){
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        for (var i = 0; i < data.tbody.length; i++) {
            var tbodytr = document.createElement("tr");
            for (var j = 0; j < data.tbody[i].length; j++) {
                var td = document.createElement("td");
                td.innerHTML = data.tbody[i][j];
                tbodytr.appendChild(td);
            }
            tbody.appendChild(tbodytr);
        }
    }
    createTbody();
    //升序
    function sortAsc(index){
        var arr = [];
        arr = data.tbody;
        arr.sort(function(row1,row2){
            return row1[index] - row2[index];
        });
        table.removeChild(document.getElementsByTagName("tbody")[0]);
        createTbody();
    }
    //降序
    function sortDesc(index){
        var arr = [];
        arr = data.tbody;
        arr.sort(function(row1,row2){
            return row2[index] - row1[index];
        });
        table.removeChild(document.getElementsByTagName("tbody")[0]);
        createTbody();
    }
    //绑定升序onclick事件
    var upArrow = document.getElementsByClassName("arrow-up");
    for (var i = 0; i < upArrow.length; i++) {
        upArrow[i].onclick = function(i){
            return function(){
                sortAsc(i);
            };
        }(i);
    }
    //绑定降序onclick事件
    var downArrow = document.getElementsByClassName("arrow-down");
    for (var i = 0; i < downArrow.length; i++) {
        downArrow[i].onclick = function(i){
            return function(){
                sortDesc(i);
            };
        }(i);
    }
}();