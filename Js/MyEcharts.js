/**
 * 封装echarts 工具
 */
/**
 * 数组是否存在
 */

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
/**
 * 数组中最大值 最小值
 * @param array
 * @returns
 */
Array.prototype.max = function () {
    return Math.max.apply({}, this);
};
Array.prototype.min = function () {
    return Math.min.apply({}, this);
};

/**
 * 判断是否为整数
 * @param obj
 * @returns {Boolean}
 */
function isInteger(obj) {
    return obj % 1 === 0
}

var MyEcharts = {
    EchartsDataFormate: {

        /**
         * @param data : json数据<br>
         * @param type : 图表类型<br>
         */
        GroupFormate: function (data, type) {
            //用于存储类型名称
            var groups = new Array();
            //用于存储data.name数据
            var names = new Array();
            //存储返回series数据 （一个或者多个）
            var series = new Array();

            for (var i = 0; i < data.length; i++) {
                //判断data[i].group是否存在数租groups中
                if (!groups.contains(data[i].group)) {
                    //不存在则跳进 存放
                    groups.push(data[i].group);
                }

                //判断name数据是否存在 数组names中
                if (!names.contains(data[i].name)) {
                    //不存在则跳进 存放
                    names.push(data[i].name);
                }
            }

            //遍历分类
            for (var i = 0; i < groups.length; i++) {
                //定义一个series中间变量
                var temp_series = {};
                //定义data.value数据存储
                var temp_data = new Array();
                //遍历所有数据
                for (var j = 0; j < data.length; j++) {
                    //遍历data.name数据
                    for (var k = 0; k < names.length; k++) {
                        //判断所有分类中的所有数据含name数据分开
                        if (groups[i] == data[j].group && names[k] == data[j].name) {
                            temp_data.push(data[j].value);
                        }
                    }
                }
                temp_series = {name: groups[i], type: type, data: temp_data};
                series.push(temp_series);

            }
            return {groups: groups, category: names, series: series};
        },


    },
    //生成图形option
    EchartsOption: {
        /**
         * 柱形图
         * @param title ： 标题<br>
         * @param subtext ：副标题<br>
         * @param data : json 数据
         */
        bar: function (title, subtext, data) {
            console.log(data)
            // var datas = MyEcharts.EchartsDataFormate.GroupFormate(data, 'bar');
       var     xData = ["信访工作机构", "行政机关受理", "行政机关答复",'行政机关办结'];
        var    yData = [2342, 1230, 425,900];
         var   option = {
                backgroundColor: '#061326',
                "grid": {
                    "top": "25%",
                    "left": "-5%",
                    "bottom": "5%",
                    "right": "5%",
                    "containLabel": true
                },
                tooltip:{
                    show:true
                },
                animation: false,
                "xAxis": [{
                    "type": "category",
                    "data": xData,
                    "axisTick": {
                        "alignWithLabel": true
                    },
                    "nameTextStyle": {
                        "color": "#82b0ec"
                    },
                    "axisLine": {
                        show: false,
                        "lineStyle": {
                            "color": "#82b0ec"
                        }
                    },
                    "axisLabel": {
                        "textStyle": {
                            "color": "#fff"
                        },
                        margin: 30
                    }
                }],
                "yAxis": [{
                    show: false,
                    "type": "value",
                    "axisLabel": {
                        "textStyle": {
                            "color": "#fff"
                        },
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#0c2c5a"
                        }
                    },
                    "axisLine": {
                        "show": false
                    }
                }],
                "series": [{
                    "name": "",
                    type: 'pictorialBar',
                    symbolSize: [40, 10],
                    symbolOffset: [0, -6],
                    symbolPosition: 'end',
                    z: 12,
                    // "barWidth": "0",
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "top",
                            // "formatter": "{c}%"
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#34DCFF'
                        }
                    },
                    color: "#2DB1EF",
                    data: yData
                },
                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [40, 10],
                        symbolOffset: [0, 7],
                        // "barWidth": "20",
                        z: 12,
                        "color": "#2DB1EF",
                        "data": yData
                    },
                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [50, 15],
                        symbolOffset: [0, 12],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#2EA9E5',
                                borderType: 'solid',
                                borderWidth: 1
                            }
                        },
                        data: yData
                    },        {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [50, 15],
                        symbolOffset: [0, 12],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#2EA9E5',
                                borderType: 'solid',
                                borderWidth: 1
                            }
                        },
                        data: yData
                    },

                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [70, 20],
                        symbolOffset: [0, 18],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#19465D',
                                borderType: 'solid',
                                borderWidth: 2
                            }
                        },
                        data: yData
                    },
                    {
                        type: 'bar',
                        //silent: true,
                        "barWidth": "40",
                        barGap: '10%', // Make series be overlap
                        barCateGoryGap: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                                    offset: 0,
                                    color: "#38B2E6"
                                },
                                    {
                                        offset: 1,
                                        color: "#0B3147"
                                    }
                                ]),
                                opacity: .8
                            },
                        },
                        data: yData
                    },{
                        name: '信访事项受理或答复率',
                        type: 'line',
                        // smooth: true, //是否平滑
                        showAllSymbol: true,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: 'circle',
                        symbolSize: 25,
                        lineStyle: {
                            normal: {
                                color: "#6c50f3",
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#6c50f3',
                            }
                        },
                        itemStyle: {
                            color: "#6c50f3",
                            borderColor: "#fff",
                            borderWidth: 3,
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 2,
                            shadowOffsetX: 2,
                        },
                        tooltip: {
                            show: true
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(108,80,243,0.3)'
                                },
                                    {
                                        offset: 1,
                                        color: 'rgba(108,80,243,0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(108,80,243, 0.9)',
                                shadowBlur: 20
                            }
                        },
                        data: [2330, 205.97,2340,900 ]
                    },
                ]
            };
            return option;
        },
        pie:function(title,color,data) {
            let setLabel = (data)=>{
                let opts = [];
                for(let i=0;i<data.length;i++){
                    let item = {};
                    item.name = data[i].name;
                    item.value = data[i].value;
                    item.label = {
                        normal:{
                            //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                            show:true,
                            //a和b来识别不同的文字区域
                            formatter:[
                                '{a|{d}%  {b}}',//引导线上面文字
                                '{b|}' //引导线下面文字
                            ].join('\n'), //用\n来换行
                            rich:{
                                a:{
                                    left:20,
                                    padding:[0,-80,-15,-80]
                                },
                                b:{
                                    height:5,
                                    width:5,
                                    lineHeight: 5,
                                    marginBottom: 10,
                                    padding:[0,-5],
                                    borderRadius:5,
                                    backgroundColor:color[i], // 圆点颜色和饼图块状颜色一致
                                }
                            },

                        }
                    }

                    opts.push(item)
                }
                return opts;
            }
            console.log(title,color,data,'000')
            var option = {

                legend: {
                    type:"scroll",
                    orient: 'vertical',
                    right:'5%',
                    align:'left',
                    top:'middle',
                    textStyle: {
                        color:'#8C8C8C'
                    },
                    height:150
                },
                animation: true,
                series: [
                    {
                        color:color,
                        name: '饼图圆点',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            normal: {
                                show: true,
                                length: 15, // 第一段线 长度
                                length2: 100, // 第二段线 长度
                                align: 'right'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:setLabel(data)
                    }
                ]
            }
          return option
        },
        /*
        * 信访案件总量分析*/
        totalpie:function(title,data) {
            console.log('我是右1数据',Math.round(data.townshiplevel/100))
            var myColor = ['#81E7ED'];
            var dataLine = [Math.round(data.townshiplevel/100), Math.round(data.countrylevel/100), Math.round(data.prefecturelevel/100), Math.round(data.provincelevel/100),  Math.round(data.nationallevel/100)];//[40, 56, 23, 15, 15];//[40, 46, 53, 55, 65];
            var positionLeft = 20,
                max = 100 + positionLeft;

            var g_cellBar0_y = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAoCAYAAAAhf6DEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA6SURBVEhLY2x8/vY/A4mg3zwcTDOBSTLBqGYSwahmEsGoZhLBqGYSwahmEsGoZhLBqGYSwZDUzMAAAJldBMF2UASmAAAAAElFTkSuQmCC';
            var g_cellBarImg0_y = new Image();
            g_cellBarImg0_y.src = g_cellBar0_y;
            var option = {
                backgroundColor: '#101E44',
                grid: [{
                    left: '25%',
                    top: '12%',
                    right: '0%',
                    bottom: '8%',
                    containLabel: true
                },
                    {
                        left: '10%',
                        top: '12%',
                        right: '5%',
                        bottom: '8%',
                        containLabel: true
                    }
                ],
                xAxis: [{
                    //   max:max,
                    show: false
                }],
                yAxis: [{
                    axisTick: 'none',
                    axisLine: 'none',
                    axisLabel: {
                        inside: true,
                        align: 'left',
                        textStyle: {
                            color: '#81E7ED',
                            fontSize: '14'
                        }
                    },
                    z: 10,
                    data: ['乡信访案件', '县信访案件', '市信访案件', '省信访案件', '全国信访案件']
                    // data: ['全国信访案件', '省信访案件', '市信访案件', '县信访案件', '乡信访案件']
                }, {
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                    axisLabel: {
                        inside: true,
                        align: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '14'
                        }
                    },
                    z: 12,
                    data: [data.townshiplevel, data.countrylevel, data.prefecturelevel, data.provincelevel, data.nationallevel]
                    //[Math.round(data.townshiplevel/100), Math.round(data.countrylevel/100), Math.round(data.prefecturelevel/100), Math.round(data.provincelevel/100),  Math.round(data.nationallevel/100)];//[4
                }, {

                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: []
                }],
                series: [

                    { //间距
                        type: 'bar',
                        barWidth: 20,
                        stack: 'b',
                        legendHoverLink: false,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        z: 3,
                        data: [positionLeft, positionLeft, positionLeft, positionLeft, positionLeft]
                    }, {
                        name: '条',
                        type: 'bar',
                        stack: 'b',
                        yAxisIndex: 0,
                        data: dataLine,
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                distance: 10,
                                formatter: function(param) {
                                    return param.value + '%'
                                },
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '16'
                                }
                            }
                        },
                        barWidth: 30,
                        itemStyle: {
                            color: {
                                image: g_cellBarImg0_y,
                                repeat: 'repeat'
                            }
                            /*normal: {
                                color: function(params) {
                                    var num = myColor.length
                                    return myColor[params.dataIndex % num]
                                }
                            }*/
                        },
                        z: 2
                    }, {
                        name: '白框',
                        type: 'bar',
                        yAxisIndex: 1,
                        barGap: '-100%',
                        data: [99.8, 99.9, 99.9, 99.9, 99.9],
                        barWidth: 57,
                        itemStyle: {
                            normal: {
                                color: '#0e2147',
                                barBorderRadius: 2
                            }
                        },
                        z: 1
                    },
                    {
                        name: '外框',
                        type: 'bar',
                        yAxisIndex: 2,
                        barGap: '-100%',
                        data: [100, 100, 100, 100, 100],
                        barWidth: 59,
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                distance: 10,
                                formatter: function(data) {
                                    return dataLine[data.dataIndex] + "%";
                                },
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '16'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var num = myColor.length
                                    return myColor[params.dataIndex % num]
                                },
                                barBorderRadius: [0, 7, 0, 7]
                            }
                        },
                        z: 0
                    },
                ]
            }
            return option
        },
        /*
        * 变形柱状图*/
        pictorialBar: function (title, subtext, data) {
            var datas = MyEcharts.EchartsDataFormate.GroupFormate(data, 'pictorialBar');
            var os_title = "";
            var os_subtext = "" //团号
            var os_bgc = "#050E11";

            var os_age = [data[0].area,data[1].area, data[2].area, data[3].area, data[4].area, data[5].area, data[6].area, data[7].area, data[8].area,data[9].area];
            var os_agevalue = [data[0].number,data[1].number, data[2].number, data[3].number, data[4].number, data[5].number, data[6].number, data[7].number, data[8].number,data[9].number];
            var option = {
                backgroundColor: os_bgc,
                "title": {
                    "text": os_title,
                    "subtext": os_subtext,
                    x: "2%",
                    y: "2%",
                    textStyle: {
                        color: '#fff',
                        fontSize: '20'
                    },
                    subtextStyle: {
                        color: '#ddd',
                        fontSize: '12'
                    },
                },
                grid: {
                    left: '9%',
                    top: '5%',
                    bottom: '7%',
                    right: '5%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    formatter: "{a} :<br/>{b}，共 {c}"
                    /*formatter: function(params) {
                        return params[0].name + ': ' + params[0].value;
                    }*/
                },
                xAxis: {
                    data: os_age,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(45, 140, 240, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999',
                            fontSize: 12
                        }
                    }
                },
                yAxis: [{
                    splitNumber: 2,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(45, 140, 240, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999',
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: 'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 0.5,
                            type: 'dashed'
                        }
                    }
                }],
                series: [{
                    name: '信访数量',
                    type: 'pictorialBar',
                    barCategoryGap: '0%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    label: {
                        show: true,
                        position: 'top',
                        distance: 15,
                        // color: [
                        //     "#FF6A6A",//255 106 106
                        //     "#CD5555",//	205 85 85
                        //     "#FF8247",//	255 130 71
                        //     "#E9967A",//	233 150 122
                        //     "#FFA07A",// 	255 160 122
                        //     "#EEDD82",//238 221 130
                        //     "#EEE8AA",//	238 232 170
                        //     "#32CD32",//50 205 50
                        //     "#98FB98",//152 251 152
                        //     "#7CCD7C"//124 205 124
                        // ],
                        color: '#2D8CF0',
                        fontWeight: 'bolder',
                        fontSize: 10,
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                //45, 140, 240  #2D8CF0   OTAS蓝
                                //232, 94, 106  #DB5E6A   暗红
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(45, 140, 240, .8)' //  0%  处的颜色
                                },
                                    {
                                        offset: 1,
                                        color: 'rgba(45, 140, 240, .1)' //  100%  处的颜色
                                    }
                                ],
                                global: false //  缺省为  false
                            }
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    data: os_agevalue,
                    z: 10
                }]
            }
            return option;
        },
        /*
        * 前10街道*/
        newcolorBar: function (title, subtext, data) {
            var option = {

                title: {
                    x: 'center',
                    text: '2019许昌市总案件数'+data[0].number,
                    textStyle: {
                        color: '#fff',
                        fontSize: '20'
                    },
                    //subtext: '20170811:14pm-20170813:15pm',//'Rainbow bar example',
                    //link: 'http://echarts.baidu.com/doc/example.html'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },


                grid: {
                    left: '1%',
                    top:'10%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    position:'bottom',
                    splitLine: {show: false},
                    boundaryGap: [0, 0.01],
                    axisLabel: {
                        textStyle: {
                            color: '#ffa800',
                            fontSize: 16,
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#2386D3'

                        }
                    },
                    axisTick:{
                        show:false
                    },
                },

                yAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: '#ffa800',
                            fontSize: 16,
                        }
                    },
                    axisLine:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    data: [data[9].area,data[8].area, data[7].area, data[6].area, data[5].area, data[4].area, data[3].area, data[2].area, data[1].area]
                },
                series: [
                    {
                        name: '办理事项数',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [];
                                    for(var i=0;i<10;i++){
                                        if(i==6){
                                            colorList.push( new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                                offset: 0,
                                                color: '#173B6C'}, {offset: 1,color: '#4ABBE8'
                                            }]))
                                        }else if(i==7){
                                            colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                                offset: 0,
                                                color: '#173B6C'}, {offset: 1,color: '#F7BC2D'
                                            }]))

                                        }else if(i==8){
                                            colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                                offset: 0,
                                                color: '#173B6C'}, {offset: 1,color: '#F06648'
                                            }]))

                                        }else {
                                            colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                                offset: 0,
                                                color: '#173B6C'}, {offset: 1,color: '#235890'
                                            }]))
                                        }

                                    }

                                    return colorList[params.dataIndex]
                                },
                                // color:'#ffa800',
                                barBorderRadius:[0,10,10,15],

                                shadowBlur: 2,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },

                        },
                        barWidth: '50%',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                color:'#ffa800'
                            }
                        },
                        data: [data[9].number,data[8].number, data[7].number, data[6].number, data[5].number, data[4].number, data[3].number, data[2].number, data[1].number]
                    }
                ]
            };
            return option;
        },
        /*
        * 词云*/
        graph: function (name) {
            let min = 8,
                max = 40;
            let data = (() => {
                let count = 50;
                let set = new Set();
                while (count--) {
                    set.add(Math.floor(Math.random() * (max - min)) + min);
                }
                return [...set].map((v) => ({
                    value: v,
                    name: `${v}`
                }))
            })();

// 获取比例尺,domain: 输入域，range 输出域
            function getScale([d1, d2], [r1, r2]) {
                return function(val) {
                    return (val - d1) / (d2 - d1) * (r2 - r1) + r1;
                };
            }

// value 对应的比例尺
// 泡泡大小
            let scale = getScale([min, max], [32, 50]);
// label字体大小
            let scaleFontSize = getScale([min, max], [20, 28]);
// 对应类别categories根据value 值对应5种
            let scaleCategory = getScale([min, max], [0, 4.99]);

            data = data.map((item, index) => {
                let {
                    value
                } = item;
                return Object.assign(item, {
                    symbolSize: scale(value),
                    category: Math.floor(scaleCategory(value)),
                    label: {
                        fontSize: parseInt(scaleFontSize(value))
                    }
                });
            });
            var option = {
                // backgroundColor: '#101736',
                series: [{
                    type: 'graph',
                    layout: 'force',
                    legendHoverLink: false,
                    force: {
                        repulsion: 30,
                        edgeLength: 35
                    },
                    categories: [{
                        itemStyle: {
                            color: '#409EFF'
                        }
                    },
                        {
                            itemStyle: {
                                color: '#67C23A'
                            }
                        },
                        {
                            itemStyle: {
                                color: '#E6A23C'
                            }
                        },
                        {
                            itemStyle: {
                                color: '#F56C6C'
                            }
                        },
                        {
                            itemStyle: {
                                color: '#ff7edb'
                            }
                        }
                    ],
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data
                }]
            };
            return option;
        },
        /*
        * 重点人员*/
        scatter: function (name) {
            var plantCap = [{
                name: '樊要中',
                value: '',

            }, {
                name: '刘桂花',
                value: '',

            }, {
                name: '刘爱英',
                value: '',

            }, {
                name: '朱红霞',
                value: '',

            }, {
                name: '张晓明',
                value: '',

            }, {
                name: '黄小可',
                value: '',

            }, {
                name: '谢冰莹',
                value: '',

            }, {
                name: '张红香',
                value: '',

            }]

            var datalist = [{
                offset: [55, 50],
                symbolSize: 64,
                opacity: .95,
                fontSize: '15'
            }, {
                offset: [30, 30],
                symbolSize: 60,
                opacity: .6,
                fontSize: '15.1'
            }, {
                offset: [28, 50],
                symbolSize: 71,
                opacity: .6,
                fontSize: '13.2'
            }, {
                offset: [50, 70],
                symbolSize: 60,
                opacity: .8,
                fontSize: '12.85'
            }, {
                offset: [70, 30],
                symbolSize: 58,
                opacity: .75,
                fontSize: '12.43'
            }, {
                offset: [80, 60],
                symbolSize: 55,
                opacity: .7,
                fontSize: '11.8'
            }, {
                offset: [50, 20.5],
                symbolSize: 50,
                opacity: .6,
                fontSize: '15.7'
            }, {
                offset: [88, 45],
                symbolSize: 45,
                opacity: .6,
                fontSize: '14.57'
            }]
            var datas = [];
            for (var i = 0; i < plantCap.length; i++) {
                var item = plantCap[i];
                var itemToStyle = datalist[i];
                datas.push({
                    name: item.name ,
                    value: itemToStyle.offset,
                    symbolSize: itemToStyle.symbolSize,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: itemToStyle.fontSize
                            }
                        },

                    },
                    itemStyle: {
                        normal: {
                            opacity: itemToStyle.opacity
                        }
                    },
                })
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: '#fff',
                    textStyle: {
                        color: '#999'
                    },
                    formatter: (item) => {
                        if (item.data[2]) {
                            return `${item.data[2]}<br/>  坐标: x ${item.data[0]}  y ${item.data[1]}`;
                        }
                    }
                },
                xAxis: [{
                    gridIndex: 0,
                    type: 'value',
                    show: false,
                    min: 0,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 30


                }],
                yAxis: [{
                    gridIndex: 0,
                    min: 0,
                    show: false,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 30,
                }],
                series: [{
                    type: 'scatter',
                    symbol: 'circle',
                    symbolSize: 120,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}',
                            color: '#fff',
                            textStyle: {
                                fontSize: '20'
                            }
                        },

                    },

                    itemStyle: {
                        normal: {
                            color: '#00acea'
                        },
                        emphasis: {
                            color: '#eea631',
                            opacity: 1
                        }
                    },
                    data: datas
                }

                ]
            };
            return option;
        },
        /*
        * 国家、省、市*/
        piepie: function (name,data) {
            console.log('我是左1数据',data)
            let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
            let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#0034ff'];
            let chartData = [
                {
                    name: "总信访量",
                    value: data.total,
                    unit: '列',
                    // probability: data.total,
                },
                {
                    name: "国家局信访量",
                    value: data.nationallevel,
                    unit: '列',
                    probability: data.natitionalrate,
                },
                {
                    name: "省局信访量",
                    value: data.provincelevel,
                    unit: '列',
                    probability: data.provincerate,
                },
                {
                    name: "市级信访量",
                    value: data.prefecturelevel,
                    unit: '列',
                    probability: data.prefecturerate,
                },
                {
                    name: "县局信访量",
                    value: data.townshiplevel,
                    unit: '列',
                    probability: data.townshiprate,
                }
            ];
            let arrName = [];
            let arrValue = [];
            let sum = 0;
            let pieSeries = [],
                lineYAxis = [];

// 数据处理
            chartData.forEach((v, i) => {
                arrName.push(v.name);
                arrValue.push(v.value);
                sum = sum + v.value;
            })

// 图表option整理
            chartData.forEach((v, i) => {
                pieSeries.push({
                    name: '沪昆线到达晚点情况',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    radius: [75 - i * 15 + '%', 67 - i * 15 + '%'],
                    center: ["40%", "50%"],
                    label: {
                        show: false
                    },
                    data: [{
                        value: v.value,
                        name: v.name
                    }, {
                        value: sum - v.value,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)"
                        }
                    }]
                });
                pieSeries.push({
                    name: '',
                    type: 'pie',
                    silent: true,
                    z: 1,
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [75 - i * 15 + '%',67 - i * 15 + '%'],
                    center: ["40%", "50%"],
                    label: {
                        show: false
                    },
                    data: [{
                        value: 7.5,
                        itemStyle: {
                            color: "#101736"
                        }
                    }, {
                        value: 2.5,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)"
                        }
                    }]
                });
                v.percent = (v.value / sum * 100).toFixed(1) + "%";
                lineYAxis.push({
                    value: i,
                    textStyle: {
                        rich: {
                            circle: {
                                color: color[i],
                                padding: [0, 5]
                            }
                        }
                    }
                });
            })
            var option = {
                // backgroundColor: '#101736',101736//050E11
                color: color,
                grid: {
                    top: '12%',
                    bottom: '54%',
                    left: "40%",
                    containLabel: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: function(params) {
                            let item = chartData[params];
                            console.log(item)
                            if(item.name === '总信访量'){
                                return '{line|}{circle|●}{name|'+ item.name +'}{bd|}{value|'+ item.value+'}{unit|个}'
                            }else{
                                return '{line|}{circle|●}{name|'+ item.name +'}{bd||}{percent|'+item.probability+'%}{value|'+ item.value+'}{unit|个}'
                            }

                        },
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#333",
                            fontSize: 14,
                            rich: {
                                line: {
                                    width: 170,
                                    height: 1,
                                    backgroundColor: {image: dashedPic}
                                },
                                name: {
                                    color: '#ccc',
                                    fontSize: 14,
                                },
                                bd: {
                                    color: '#666',
                                    padding: [0, 5],
                                    fontSize: 14,
                                },
                                percent:{
                                    color: '#ccc',
                                    fontSize: 14,
                                },
                                value: {
                                    color: '#ccc',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    padding: [0, 0, 0, 20]
                                },
                                unit: {
                                    color: '#666',
                                    fontSize: 14,
                                }
                            }
                        },
                        show: true
                    },
                    data: lineYAxis
                }],
                xAxis: [{
                    show: false
                }],
                series: pieSeries
            };
            return option;
        },
        /*
        * 大数据分析*/
        datapie: function (data1,data2,data3,data4) {
            var circleRadius = ['30%','20%'];
            var centers = [['15%','30%'],['60%','30%'],['15%','75%'],['60%','75%'],]
            titleTextObject = {
                color: '#fff',
                rich: { //富文本
                    white: {
                        color: '#fff',
                        fontSize: 12,
                        padding:[12,0,0,4]
                    },
                    newyellow: {
                        color: '#f9f48e',
                        fontSize: 12,
                        padding:[8,0,0,4]
                    },
                    newgreen:{
                        color: '#51ebb3',
                        fontSize: 12,
                        padding:[8,0,0,4]
                    }
                },
            };
            labelTextObject = {
                normal: {
                    formatter: function(params, i) {
                        // console.log('88888888888888',i)
                        return params.percent.toFixed(1)+"%";
                        // return 10+"%";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                }
            }
            var option = {
                grid:{
                    left:'13%',
                    right:"13%",
                    bottom:"10%",
                    top:"20%",
                },
                // backgroundColor:"#015c8a",
                title: [{
                    text: '{newgreen| 责任单位\n}{newgreen|及时受理数 | 总办结数}{white|\n'+ data1.acceptnumbertimely+' | '+ data1.total+'}',
                    left: '22%',
                    top: '18%',
                    textAlign: 'left',
                    textStyle: titleTextObject
                }, {
                    text: '{newgreen| 责任单位\n}{newgreen|满意量 | 总案件数}{white|\n'+ data2.satisfied+' | '+ data2.total+'}',
                    left: '67%',
                    top: '18%',
                    textAlign: 'left',
                    textStyle: titleTextObject
                },
                    {
                        text: '{newyellow| 信访部门\n}{newyellow|及时受理数 | 总案件数}{white|\n'+ data3.acceptnumbertimely+' | '+ data3.total+'}',
                        left: '23%',
                        top: '65%',
                        textAlign: 'left',
                        textStyle: titleTextObject
                    }, {
                        text: '{newyellow| 信访部门\n}{newyellow|满意量 | 评价总数}{white|\n'+ data4.satisfied+'  |  '+ data4.total+'}',
                        left: '68%',
                        top: '65%',
                        textAlign: 'left',
                        textStyle: titleTextObject
                    }, ],
                series: [{
                    name: '正常',
                    center: centers[0],
                    radius: circleRadius,
                    type: 'pie',
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        itemStyle: {
                            normal: {
                                color: '#51ebb3'
                            }
                        },
                        value: data1.acceptnumbertimely,
                        label: labelTextObject
                    }, {
                        value: data1.total - data1.acceptnumbertimely,
                        itemStyle: {
                            normal: {
                                color: '#01547e'
                            }
                        }
                    }]
                }, {
                    center: centers[1],
                    radius: circleRadius,
                    type: 'pie',
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        itemStyle: {
                            normal: {
                                color: '#51ebb3'
                            }
                        },
                        value: data2.evaluatenumber,
                        label: labelTextObject
                    }, {
                        value: data2.total - data2.evaluatenumber,
                        itemStyle: {
                            normal: {
                                color: '#01547e'
                            }
                        }
                    }]
                },{
                    center: centers[2],
                    radius: circleRadius,
                    type: 'pie',
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        value: data3.acceptnumbertimely,
                        itemStyle: {
                            normal: {
                                color: '#f9f48e'
                            }
                        },
                        label: labelTextObject
                    }, {
                        value: data3.total - data3.acceptnumbertimely,
                        itemStyle: {
                            normal: {
                                color: '#01547e'
                            }
                        },
                    }]
                },{
                    center: centers[3],
                    radius: circleRadius,
                    type: 'pie',
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        value: data4.evaluatenumber,
                        itemStyle: {
                            normal: {
                                color: '#f9f48e'
                            }
                        },
                        label: labelTextObject
                    }, {
                        value: data4.total - data4.evaluatenumber,
                        itemStyle: {
                            normal: {
                                color: '#01547e'
                            }
                        }
                    }]
                },]

            };
            return option;
        },
        /*
        * 大数据分析结果*/
        dataspie: function (data1,data2,data3) {
            var arr1=data1.completeratetimely.split("%");
            var pie1 = arr1[0].split(".");
            var arr2=data2.replayratetimely.split("%");
            var pie2 = arr2[0].split(".");
            var arr3=data3.participationrate.split("%");
            var pie3 = arr3[0].split(".");
            var option = {
                title: [{
                    text: ['{a|按期办结 | 总案件数}', '{b|     '+ data1.completenumbertimely +'  |  '+ data1.total +'}'].join('\n\n'),
                    subtext: ['{a|  占比}', '{b|'+data1.completeratetimely +'}', '{c|}'].join('\t\t'),
                    x: '53',
                    y: '50',
                    textStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 11,
                                align: 'center',
                                textAlign: 'left'
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "rgba(229, 244, 255, 1)",
                                fontSize: 11,

                            }
                        }
                    },
                    subtextStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 15,
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 15,
                            },
                            c: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 20,
                                // backgroundColor: {
                                //     // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                                // },
                                width: 15
                            }
                        }
                    }
                },{
                    text: ['{a|按期答复 | 总案件数}', '{b|     '+ data2.replaynumbertimely +'  |  '+ data2.shouldtotal +'}'].join('\n\n'),
                    subtext: ['{a|   占比}', '{b|'+ data2.replayratetimely +'}', '{c|}'].join('\t\t'),
                    x: '240',
                    y: '50',
                    textStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 11,
                                align: 'center',
                                textAlign: 'left'
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "rgba(229, 244, 255, 1)",
                                fontSize: 11,

                            }
                        }
                    },
                    subtextStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 15,
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 15,
                            },
                            c: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 20,
                                // backgroundColor: {
                                //     // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                                // },
                                width: 15
                            }
                        }
                    }
                },{
                    text: ['{a|   评价数 | 参评数}', '{b|    '+ data3.evaluatenumber +'  |  '+ data3.total +'}'].join('\n\n'),
                    subtext: ['{a|  占比}', '{b|'+ data3.participationrate +'}', '{c|}'].join('\t\t'),
                    x: '425',
                    y: '50',
                    textStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 11,
                                align: 'center',
                                textAlign: 'left'
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "rgba(229, 244, 255, 1)",
                                fontSize: 11,

                            }
                        }
                    },
                    subtextStyle: {
                        rich: {
                            a: {
                                fontFamily: 'SourceHanSansCN-Regular',
                                fontWeight: '400',
                                color: "rgba(76, 177, 255, 1)",
                                fontSize: 15,
                            },
                            b: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 15,
                            },
                            c: {
                                fontFamily: 'SourceHanSansCN-Medium',
                                fontWeight: '500',
                                color: "RGBA(197, 69, 130, 1)",
                                fontSize: 20,
                                // backgroundColor: {
                                //     // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                                // },
                                width: 15
                            }
                        }
                    }
                }],
                // backgroundColor: '#011128',
                series: [{
                    name: '按期办结',
                    type: 'pie',
                    center: ["18%", "54%"],
                    clockWise: true,
                    radius: [65, 61],
                    startAngle: 90,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(14, 252, 255, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(54, 107, 231, 1)'
                            }])
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        value: pie1[0],
                        name: '01'
                    }, {
                        value: 100 - pie1[0],
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: 'none', //未完成的圆环的颜色
                            }
                        }
                    }

                    ]
                }, {
                    name: '外框',
                    type: 'pie',
                    center: ["18%", "54%"],
                    animation: false,
                    clockWise: false,
                    radius:  [70, 68],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'RGBA(30, 68, 96, 1)'
                        }
                    },
                    hoverAnimation: false,
                    tooltip: {
                        show: false
                    },
                    data: [{
                        value: 100,
                        name: '02',
                    }, {
                        value: 0,
                        name: 'invisible',
                    }

                    ]
                },{
                    name: '及时受理',
                    type: 'pie',
                    center: ["49.5%", "54%"],
                    clockWise: true,
                    radius: [65, 61],
                    startAngle: 90,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(14, 252, 255, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(54, 107, 231, 1)'
                            }])
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        value: pie2[0],
                        name: '01'
                    }, {
                        value: 100 - pie2[0],
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: 'none', //未完成的圆环的颜色
                            }
                        }
                    }

                    ]
                },{
                    name: '外框',
                    type: 'pie',
                    center: ["49.5%", "54%"],
                    animation: false,
                    clockWise: false,
                    radius:  [70, 68],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'RGBA(30, 68, 96, 1)'
                        }
                    },
                    hoverAnimation: false,
                    tooltip: {
                        show: false
                    },
                    data: [{
                        value: 100,
                        name: '02',
                    }, {
                        value: 0,
                        name: 'invisible',
                    }

                    ]
                },{
                    name: '及时受理',
                    type: 'pie',
                    center: ["80%", "54%"],
                    clockWise: true,
                    radius: [65, 61],
                    startAngle: 90,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(14, 252, 255, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(54, 107, 231, 1)'
                            }])
                        }
                    },
                    hoverAnimation: false,
                    data: [{
                        value: pie3[0],
                        name: '01'
                    }, {
                        value: 100 - pie3[0],
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: 'none', //未完成的圆环的颜色
                            }
                        }
                    }

                    ]
                },{
                    name: '外框',
                    type: 'pie',
                    center: ["80%", "54%"],
                    animation: false,
                    clockWise: false,
                    radius:  [70, 68],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'RGBA(30, 68, 96, 1)'
                        }
                    },
                    hoverAnimation: false,
                    tooltip: {
                        show: false
                    },
                    data: [{
                        value: 100,
                        name: '02',
                    }, {
                        value: 0,
                        name: 'invisible',
                    }

                    ]
                },


                ]
            };
            return option;
        },
        /*
        * 信访事件受理分析*/
        piegraph: function (name) {
            var option = {
                // backgroundColor:'#040f23',
                tooltip: {},
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 100;
                },
                animationEasingUpdate: 'bounceIn',
                color: ['#fff', '#fff', '#fff'],
                series: [{
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 10,
                        edgeLength: 10
                    },
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}' + '\n\n' + '{b}',
                            fontSize: 10,
                            fontStyle: '400',
                        }
                    },
                    data: [{
                        "name": "人防办",
                        "value": "2",
                        x: 80,
                        y: 6,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#ff8400",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#ff8400",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "城管局",
                        "value": "1",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#03fc62",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#03fc62",
                                "color": "#11213b"
                            }
                        },

                    }, {
                        "name": "市监局",
                        "value": "1",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#aa61b2",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#aa61b2",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "许昌",
                        "value": '',
                        "symbolSize": 80,
                        x: 0,
                        y: 0,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#0a95e6",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#0a95e6",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "畜牧局",
                        "value": "1",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#00fff7",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#00fff7",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "民政局",
                        "value": "2",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#f06467",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#f06467",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "教育局",
                        "value": "1",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#f06467",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#f06467",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "司法局",
                        "value": "1",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#03fc62",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#03fc62",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "纪检委",
                        "value": "2",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#00fff7",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#00fff7",
                                "color": "#11213b"
                            }
                        }
                    }, {
                        "name": "检察院",
                        "value": "2",
                        x: 0,
                        y: 0,
                        "symbolSize": 60,
                        "draggable": true,
                        "itemStyle": {
                            "normal": {
                                "borderColor": "#f06467",
                                "borderWidth": 4,
                                "shadowBlur": 20,
                                "shadowColor": "#f06467",
                                "color": "#11213b"
                            }
                        }
                    }],
                    links: [{
                            "source": "检察院",
                            "target": "许昌"
                        },
                        {
                            "source": "纪检委",
                            "target": "许昌"
                        },
                        {
                            "source": "司法局",
                            "target": "许昌"
                        },
                        {
                            "source": "教育局",
                            "target": "许昌"
                        },
                        {
                            "source": "畜牧局",
                            "target": "许昌"
                        },
                        {
                            "source": "市监局",
                            "target": "许昌"
                        }, {
                            "source": "城管局",
                            "target": "许昌"
                        }, {
                            "source": "人防办",
                            "target": "许昌"
                        }, {
                            "source": "民政局",
                            "target": "许昌"
                        }
                    ]
                }]
            }
            return option;
        },
        /*
        * 许昌市各市直单位信访量分析*/
        newPiegraph: function (data) {
// console.log('市直单位',data)
            var getY = function(x) {
                let y = Math.sqrt((1 - Math.pow(x / 38, 2)) * Math.pow(30, 2));
                return y;
            };
            var getOutY = function(x) {
                let y = Math.sqrt((1 - Math.pow(x / 50, 2)) * Math.pow(42, 2));
                return y;
            };
            var items = [
                {

                    symbol: "",
                    name: "民政局1",
                    value: [0, getY(0)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "民政局2",
                    value: [8, getY(10)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "教育局  76",
                    value: [16, getY(15)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "公安局1",
                    value: [23, getY(20)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "公安局2",
                    value: [28, getY(25)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "公安局4",
                    value: [30, getY(30)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "农业农村局  41",
                    value: [33, getY(33)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "城市管理局  31",
                    value: [36, getY(35)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "市电子政务中心  1",
                    value: [37, getY(37)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "市电子政务中心2  1",
                    value: [36, getY(38)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "商务局1  27",
                    value: [37, -getY(37)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "商务局2  27",
                    value: [38, -getY(36)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "公路局  25",
                    value: [34, -getY(34)],
                    pointType: "point"
                },
                // {
                //
                //     symbol: "",
                //     name: "水利局  18",
                //     value: [30, -getY(36)],
                //     pointType: "point"
                // },
                {

                    symbol: "",
                    name: "体育局  17",
                    value: [33, -getY(31)],
                    pointType: "point"
                },
                {
                    level: 4,
                    symbol: "",
                    name: "烟草专卖局  14",
                    value: [32, -getY(28)],
                    pointType: "point"
                },
                {
                    level: 4,
                    symbol: "",
                    name: "烟草专卖局2  14",
                    value: [30, -getY(22)],
                    pointType: "point"
                },
                {
                    level: 4,
                    symbol: "",
                    name: "烟草专卖局3  14",
                    value: [28, -getY(15)],
                    pointType: "point"
                },
                {
                    level: 4,
                    symbol: "",
                    name: "烟草专卖局4  14",
                    value: [18, -getY(0)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "粮食局11  2",
                    value: [12, -getY(35)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "粮食局22  2",
                    value: [10, -getY(32)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "粮食局33  2",
                    value: [8.5, -getY(20)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "粮食局  2",
                    value: [7, -getY(0)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "审计局  2",
                    value: [3, -getY(23)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "工商联11  2",
                    value: [-3, -getY(32)],
                    pointType: "point"
                },
                /*{

                    symbol: "",
                    name: "司法局8 1",
                    value: [0, -getY(0)],
                    pointType: "point"
                },*/
                {

                    symbol: "",
                    name: "财政局  2",
                    value: [-5, -getY(36)],
                    pointType: "point"
                },

                {

                    symbol: "",
                    name: "工商联  2",
                    value: [-7, -getY(-10)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "老干部局  1",
                    value: [-10, -getY(-26)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "应急管理局  1",
                    value: [-20, -getY(2)],
                    pointType: "point"
                },

                {

                    symbol: "",
                    name: "司法局  1",
                    value: [-25, -getY(18)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "司法局1  1",
                    value: [-35, -getY(22)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "司法局2  1",
                    value: [-38, -getY(27)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "司法局3  1",
                    value: [-40, -getY(31)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "司法局4 1",
                    value: [-43, -getY(34)],
                    pointType: "point"
                },
                {
//30
                    symbol: "",
                    name: "司法局5 1",
                    value: [-45, -getY(36)],
                    pointType: "point"
                },
                {
//31
                    symbol: "",
                    name: "司法局6 1",
                    value: [-48, -getY(37.5)],
                    pointType: "point"
                },
//                 {
// //32
//                     symbol: "",
//                     name: "司法局6 1",
//                     value: [-49, -getY(39.5)],
//                     pointType: "point"
//                 },
               /* {

                    symbol: "",
                    name: "市政府  1",
                    value: [-25, getY(22)],
                    pointType: "point"
                },*/
                {

                    symbol: "",
                    name: "税务局4  1",
                    value: [-38, getY(-38)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "税务局3  1",
                    value: [-37.5, getY(-37.5)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "税务局2  1",
                    value: [-36, getY(-36)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "税务局1  1",
                    value: [-34, getY(-33)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "税务局  1",
                    value: [-30, getY(-30)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "公积金管理中心  1",
                    value: [-28, getY(0)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "残疾人联合会  1",
                    value: [-18, getY(-18)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "畜牧局  1",
                    value: [-8, getY(-30)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "交管局1  1",
                    value: [-5, getY(-8)],//[-6, getY(-6)],
                    pointType: "point"
                },
                {

                    symbol: "",
                    name: "交管局  1",
                    value: [-2, getY(-20)],//[-6, getY(-6)],
                    pointType: "point"
                }
            ];

            items.forEach((el, index) => {
                 if (el.pointType == "point") {
                    el.itemStyle = {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "#0ceffd"
                        },
                            {
                                offset: 1,
                                color: "#0fffff"
                            }
                        ])
                    };
                    if (!el.label) {
                        el.label = {
                            show: true
                        }
                    }
                    el.label.width = 200
                    el.label.color = {
                        lineColor: {
                            color: "rgb(24,163,239)"
                        }
                    }
                     if (index < 40) {

                         if (!el.label.offset) {
                             el.label.offset = [1, 5]
                         }
                         if (index < 11) {
                             el.label.rotate = 77 - 3 * index
                             el.label.align = "left"
                             el.label.position = 'top'
                         } else if(index<21){
                             el.label.rotate = (-117 + 3 * index)
                             el.label.align = "left"
                             el.label.position = 'bottom'
                             el.label.offset = [1, -5]
                             // if (!el.label.offset) {
                             //     el.label.offset = [1, 0]
                             // }
                         } else if(index<35){
                             el.label.rotate = 17 - 3 * index
                             el.label.align = "right"
                             el.label.position = 'bottom'
                             el.label.offset = [1, 1]
                         }else{
                             el.label.rotate = (-207 + 3 * (75 - index))
                             el.label.align = "right"
                             el.label.position = 'top'
                             el.label.offset = [1, 3]
                         }
                     }

                }
            });
            const dataArr = []
            const targetCoord = [0, 0];
            items.forEach(el => {
                if (el.belong) {
                    items.forEach(element => {
                        if (el.belong == element.name) {
                            dataArr.push([{
                                coord: element.value
                            },
                                {
                                    coord: el.value
                                }
                            ]);
                        }
                    });
                } else if (el.pointType != 'none') {
                    dataArr.push([{
                        coord: targetCoord
                    },
                        {
                            coord: el.value
                        }
                    ]);
                }
            });
            var option = {
                // backgroundColor:'#111',
                legend: [],
                xAxis: {
                    show: false,
                    type: "value",
                    max: 50,
                    min: -51
                },
                yAxis: {
                    show: false,
                    type: "value",
                    max: 50,
                    min: -50
                },
                series: [{
                    type: "graph",
                    layout: "none",
                    coordinateSystem: "cartesian2d",
                    symbolSize: [8, 8],
                    z: 3,
                    circular: {
                        rotateLabel: true
                    },

                    itemStyle: {
                        normal: {
                            shadowColor: "none"
                        }
                    },
                    data: items
                },
                    {
                        name: "",
                        type: "lines",
                        coordinateSystem: "cartesian2d",
                        z: 1,
                        effect: {
                            show: true,
                            smooth: false,
                            trailLength: 0,
                            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
                            symbolSize: [5, 15],
                            period: 4,
                            delay: 2
                        },

                        lineStyle: {
                            width: 2,
                            color: 'rgb(255,255,255)',
                            curveness: 0
                        },
                        data: dataArr
                    }
                ]
            };
            return option;
        },
        /*
        * 前10责任单位*/
        bargraph: function (name,data) {//['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
            var myColor = ['#33FFCC', '#33CCFF', '#0096f3', '#00c0e9', '#00e9db', '#34da62', '#d0a00e', '#d0570e', '#eb3600', '#eb2100'];
            var option = {
                // backgroundColor: '#0e2147',
                grid: {
                    left: '8%',
                    top: '8%',
                    right: '0%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: [{
                    show: false,
                }],
                yAxis: [{
                    axisTick: 'none',
                    axisLine: 'none',
                    offset: '27',
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12',
                        }
                    },
                    data: [data[9].responsiblecompany, data[8].responsiblecompany, data[7].responsiblecompany, data[6].responsiblecompany, data[5].responsiblecompany, data[4].responsiblecompany, data[3].responsiblecompany, data[2].responsiblecompany, data[1].responsiblecompany, data[0].responsiblecompany]
                }, {
                    axisTick: 'none',
                    axisLine: 'none',
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16',
                        }
                    },
                    data: []
                }, {
                    name: '分拨延误TOP 10',
                    nameGap: '50',
                    nameTextStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [],
                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: [data[9].count, data[8].count, data[7].count, data[6].count, data[5].count, data[4].count, data[3].count, data[2].count, data[1].count, data[0].count],//[4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '15',
                            }
                        }
                    },
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                        }
                    },
                    z: 2
                }, {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            color: '#0e2147',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                }, /*{
                    name: '外框',
                    type: 'bar',
                    yAxisIndex: 2,
                    barGap: '-100%',
                    data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                    barWidth: 22,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            barBorderRadius: 5,
                        }
                    },
                    z: 0
                },*/
                    {
                        name: '外圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        yAxisIndex: 2,
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var num = myColor.length;
                                    return myColor[params.dataIndex % num]
                                },
                                opacity: 1,
                            }
                        },
                        z: 2
                    }
                ]
            };
            return option;
        },
        /**
         * 折线图
         * @param title ： 标题<br>
         * @param subtext ：副标题<br>
         * @param data : json 数据
         */
        Line: function (title, subtext, data) {
            var datas = MyEcharts.EchartsDataFormate.GroupFormate(data, 'line');
            var option = {
                //标题
                title: {
                    text: title || "",	//标题
                    subtext: subtext || "", //副标题
                    x: 'center',	//位置默认居中
                    textStyle: {"color": "red"}
                },
                //提示
                tooltip: {
                    show: true,
                    trigger: 'axis',
                },
                //组建
                legend: {
                    orient: 'vertical', //垂直：vertical； 水平 horizontal
                    left: 'right',	//位置默认右
                    data: datas.groups
                },
                grid: {
                    left: '10%',
                    top: '25%',
                    right: '10%',
                    bottom: '25%',
                },
                //水平坐标
                xAxis: [
                    {
                        type: 'category',
                        data: datas.category,
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                        },
                    }
                ],
                //垂直坐标
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                //series数据
                series: datas.series
            };
            return option;
        },
        /*
   * 雷达图*/
        radar:function(title,color,data) {
                var option = {
                    // backgroundColor: '#101736',
                    color: ['#00c2ff', '#f9cf67', '#e92b77'],
                    legend: {
                        show: true,
                        // icon: 'circle',//图例形状
                        bottom: 10,
                        // center: 0,
                        left:-5,
                        itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
                        itemHeight: 10, // 图例标记的图形高度。[ default: 14 ]
                        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                        textStyle: {
                            fontSize: 15,
                            color: '#ade3ff'
                        },
                        data: ['信访量占比', '评价率', '好评率'],
                    },
                    radar: [{

                        indicator: [
                            {
                                text: '网上信访',
                                max: 100
                            },
                            {
                                text: '电话信访',
                                max: 100
                            },
                            {
                                text: '领导信箱',
                                max: 100
                            },
                            {
                                text: '手机信访',
                                max: 100
                            },
                            {
                                text: '机构信访',
                                max: 100
                            }
                        ],

                        textStyle: {
                            color: 'red'
                        },
                        center: ['50%', '50%'],
                        radius: 110,
                        startAngle: 60,
                        splitNumber: 3,
                        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
                        // shape: 'circle',
                        // backgroundColor: {
                        //     image:imgPath[0]
                        // },
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                fontSize: 16, //外圈标签字体大小
                                color: '#5b81cb' //外圈标签字体颜色
                            }
                        },
                        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: true,
                            areaStyle: { // 分隔区域的样式设置。
                                color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                            }
                        },
                        // axisLabel:{//展示刻度
                        //     show: true
                        // },
                        axisLine: { //指向外圈文本的分隔线样式
                            lineStyle: {
                                color: '#153269'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#113865', // 分隔线颜色
                                width: 1, // 分隔线线宽
                            }
                        }
                    }, ],
                    series: [{
                        name: '雷达图',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [{
                            name: '信访量占比',
                            value: [85, 75, 80, 85, 82],
                            areaStyle: {
                                normal: { // 单项区域填充样式
                                    color: {
                                        type: 'linear',
                                        x: 0, //右
                                        y: 0, //下
                                        x2: 1, //左
                                        y2: 1, //上
                                        colorStops: [{
                                            offset: 0,
                                            color: '#00c2ff'
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(0,0,0,0)'
                                        }, {
                                            offset: 1,
                                            color: '#00c2ff'
                                        }],
                                        globalCoord: false
                                    },
                                    opacity: 1 // 区域透明度
                                }
                            },
                            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                            label: {                    // 单个拐点文本的样式设置
                                normal: {
                                    show: true,             // 单个拐点文本的样式设置。[ default: false ]
                                    position: 'top',        // 标签的位置。[ default: top ]
                                    distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                                    color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                                    fontSize: 14,           // 文字的字体大小
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            },
                            itemStyle: {
                                normal: { //图形悬浮效果
                                    borderColor: '#00c2ff',
                                    borderWidth: 2.5
                                }
                            },
                            // lineStyle: {
                            //     normal: {
                            //         opacity: 0.5// 图形透明度
                            //     }
                            // }
                        }, {
                            name: '评价率',
                            value: [60, 50, 60, 60, 75],
                            symbolSize: 2.5,
                            itemStyle: {
                                normal: {
                                    borderColor: '#f9cf67',
                                    borderWidth: 2.5,
                                }
                            },
                            areaStyle: {
                                normal: { // 单项区域填充样式
                                    color: {
                                        type: 'linear',
                                        x: 0, //右
                                        y: 0, //下
                                        x2: 1, //左
                                        y2: 1, //上
                                        colorStops: [{
                                            offset: 0,
                                            color: '#f9cf67'
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(0,0,0,0)'
                                        }, {
                                            offset: 1,
                                            color: '#f9cf67'
                                        }],
                                        globalCoord: false
                                    },
                                    opacity: 1 // 区域透明度
                                }
                            },
                            // lineStyle: {
                            //     normal: {
                            //         opacity: 0.5// 图形透明度
                            //     }
                            // }
                        }, {
                            name: '好评率',
                            value: [47, 40, 52, 50, 65],
                            symbolSize: 2.5,
                            itemStyle: {
                                normal: {
                                    borderColor: '#e92b77',
                                    borderWidth: 2.5,
                                }
                            },
                            areaStyle: {
                                normal: { // 单项区域填充样式
                                    color: {
                                        type: 'linear',
                                        x: 0, //右
                                        y: 0, //下
                                        x2: 1, //左
                                        y2: 1, //上
                                        colorStops: [{
                                            offset: 0,
                                            color: '#e92b77'
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(0,0,0,0)'
                                        }, {
                                            offset: 1,
                                            color: '#e92b77'
                                        }],
                                        globalCoord: false
                                    },
                                    opacity: 1 // 区域透明度
                                }
                            }
                        }]
                    }, ]
                };
            return option;
        },
        /*
        * 信访量占比*/
        radarpie:function(data) {
            var img = 'data:image/png;base64,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';
            var trafficWay = [{
                name: data[1].str,
                value: data[1].num
            }, {
                name: data[2].str,
                value: data[2].num
            }, {
                name: data[3].str,
                value: data[3].num
            }];

            var data = [];
            var color = ['#00ffff','#ffe000', '#006ced', '#ff5b00', '#ff5b00', '#ff3000']//ff5b00
            for (var i = 0; i < trafficWay.length; i++) {
                data.push({
                    value: trafficWay[i].value,
                    name: trafficWay[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: color[i],
                            shadowColor: color[i]
                        }
                    }
                }, {
                    value: 2,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                });
            }
            var seriesOption = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [80, 81],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < trafficWay.length; i++) {
                                    total += trafficWay[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if (params.name !== '') {
                                    return  params.name + '：' + params.value +'\n' + '\n' + '占百分比：' + percent + '%';
                                } else {
                                    return '';
                                }
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 40,
                            show: true,
                            color: '#00ffff'
                        }
                    }
                },
                data: data
            }];
            var option = {
                // backgroundColor: '#0A2E5D',
                color: color,
                title: {
                    text: '信访占比',
                    top: '48%',
                    textAlign: "center",
                    left: "49%",
                    textStyle: {
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '400'
                    }
                },
                graphic: {
                    elements: [{
                        type: "image",
                        z: 3,
                        style: {
                            image: img,
                            width: 140,
                            height: 140
                        },
                        left: 'center',
                        top: 'center',
                        position: [100, 100]
                    }]
                },
                tooltip: {
                    show: false
                },
                // legend: {
                //     icon: "circle",
                //     orient: 'horizontal',
                //     // x: 'left',
                //     data: ['正高级教师', '高级教师', '一级教师', '二级教师', '三级教师'],
                //     right: 340,
                //     bottom: 150,
                //     align: 'right',
                //     textStyle: {
                //         color: "#fff"
                //     },
                //     itemGap: 20
                // },
                toolbox: {
                    show: false
                },
                series: seriesOption
            }
            return option;
        },
    },

    /**
     *添加Id
     * @param option : option
     * @param echartId : string 需要加引号
     */
    initChart: function (option, echartId) {
        console.log(option, echartId,'123123')
        var container = eval("document.getElementById('" + echartId + "')");
        var myChart = echarts.init(container);
        myChart.setOption(option, true);	// 为echarts对象加载数据
        return myChart;
    }


};
function translateColor(index) {
    if (index > 5) {
        return translateColor(index - 5)
    }
    return index
}
