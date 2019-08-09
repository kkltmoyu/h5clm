let industryChartConfig = {
    color: ['rgba(131, 143, 158, 1)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: [],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        type: 'value'
    }],
    series: [{
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
            barBorderRadius: [100, 100, 0, 0]
        },
        data: []
    }],
}

let intentionBuildChartConfnig = {
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        splitLine: {
            lineStyle: {
                color: 'rgba(23,35,61,0.10)'
            },
            show: true
        },
        data: []  
    }],
    yAxis: {
        type: 'value',
    },
    series: [{
        data: [],
        type: 'line',
        smooth: true,
        areaStyle: {
            color: 'rgb(131, 143, 158)',
        },
        lineStyle: {
            color: 'rgb(131, 143, 158)',
        }
    }]
};

let portraitCallChartConfig = {
    color: ['rgba(180, 190, 202, 1)', 'rgba(97, 108, 124, 1)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        splitLine: {
            lineStyle: {
                color: 'rgba(23,35,61,0.10)'
            },
            show: true
        },
        data: []
    }],
    yAxis: [{
        type: 'value'
    }],
    series: []
};

export default {
    industryChartConfig,
    intentionBuildChartConfnig,
    portraitCallChartConfig
}