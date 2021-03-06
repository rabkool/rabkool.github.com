    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 可直接替换
    data = [
        ['2020-01-04', 6],
        ['2020-01-05', 3],
        ['2020-01-10', 5],
        ['2020-01-13', 3],
        ['2020-01-16', 4],
        ['2020-01-18', 1],
        ['2020-01-19', 1],
        ['2020-01-21', 4],
        ['2020-01-26', 4],
        ['2020-01-28', 1],
        ['2020-02-02', 2],
        ['2020-02-09', 4],
        ['2020-02-11', 4],
        ['2020-02-14', 2],
        ['2020-02-15', 3],
        ['2020-02-18', 4],
        ['2020-02-24', 3],
        ['2020-02-29', 4]
    ];

    const jisuan = (rabkool) => {
        let sum = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i][0].substring(5, 7) == rabkool) {
                sum += Number(data[i][1])
            } else if ("全部" == rabkool) {
                sum += Number(data[i][1])
            }
        }
        return sum
    }

    range = ['2020/01', '2020/31']

    day = ['日', '月', '火', '水', '木', '金', '土']

    month = [
        `1月(${jisuan("01")}枚)`,
        `2月(${jisuan("02")}枚)`,
        `3月(${jisuan("03")}枚)`,
        `4月(${jisuan("04")}枚)`,
        `5月(${jisuan("05")}枚)`,
        `6月(${jisuan("06")}枚)`,
        `7月(${jisuan("07")}枚)`,
        `8月(${jisuan("08")}枚)`,
        `9月(${jisuan("09")}枚)`,
        `10月(${jisuan("10")}枚)`,
        `11月(${jisuan("11")}枚)`,
        `12月(${jisuan("12")}枚)`
    ]

    option = {
        title: {
            top: 30,
            left: 'center',
            text: '2020星乃さゆみチェキ(合計' + jisuan("全部") + ')'
        },
        tooltip: {},
        visualMap: {
            pieces: [ //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                {min: 1, max: 5, label: '1-5枚'},
                {min: 6, max: 10, label: '6-10枚'},
                {min: 11, max: 15, label: '11-15枚'},
                {min: 16, max: 20, label: '16-20枚'}
            ],
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65,
            textStyle: {
                color: '#000'
            },
            inRange: {
                color: [
                    "#50a3ba",
                    "#eac763",
                    "#d94e5d"
                ]
            }
        },
        calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: range,
            itemStyle: {
                normal: {borderWidth: 0.5}
            },
            yearLabel: {show: false},
            dayLabel: {
                margin: 10, "firstDay": 1,
                nameMap: day
            },
            monthLabel: {
                nameMap: month
            },
        },

        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: data
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);