var ToDo = ToDo || {};

ToDo.main = function(){

    function start() {
        return new Morris.Line({
            element: 'myfirstchart',
            data: [
                { year: '2008', value1: 20, value2:10},
                { year: '2009', value1: 10 ,value2:11},
                { year: '2010', value1: 5 ,value2:12},
                { year: '2011', value1: 5 ,value2:13},
                { year: '2012', value1: 20 ,value2:14 }
            ],
            xkey: 'year',
            ykeys: ['value1','value2'],
            labels: ['Value1', 'time']
        });
    }

    return {
        start:start
    }
};