var ToDo = ToDo || {};

ToDo.Main = function () {

    var linesColors = ['#00ff00', '#ff0000'];

    var dialogConfig = {
        autoOpen:false,
        title:"dialog title",
        width:800,
        minHeight:200
        //dialogClass:"noTitleStuff"
    };

    function start(data) {
        return new Morris.Line({
            element: 'myfirstchart',
            data: data,
            resize: true,
            //lineColors:linesColors,
            xkey: 'year',
            ykeys: ['value1', 'value2'],
            labels: ['time1', 'time2']
        });
    }

    function getData() {
        $.post("/comparison", {}, start)
    }

    function showDialog() {
        var $dialogElement = $("#projectDialog");
        $dialogElement.dialog(dialogConfig);
        $dialogElement.dialog('open');
    }

    function init() {
        var $showDialog = $("#showdialog");
        $showDialog.click(function(){
            showDialog();
            getData();
        })
    }

    return {
        start: start,
        draw: getData,
        showDialog: showDialog,
        init:init
    }
};