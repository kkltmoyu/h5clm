<template>
    <div class="func_used">
        <i-chart :options="poiChart.options" :width='width' :height="height" ref="poiChart" :noDataText="poiChart.noDataText"></i-chart>
    </div>
</template>
<script>
import {
    mapState
} from 'vuex';
import iChart from '../base/chart';
import chartConfig from "../chart.config";
import chartUtil from "../chart.util";
export default {
    name: 'funcUsed',
    props: {
        data: {
            type: Array,
            default: function() {
                return []
            }
        },
        height: {
            type: Number,
            default: function() {
                return 150;
            }
        },
        width: {
            type: String,
            default: function() {
                return '100%';
            }
        },
        config: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    computed: {
        ...mapState([
            'chart', 'addressConfig','header'
        ])
    },
    data() {
        const config = chartConfig.getRadarBaseConfig();
        return {
            poiChart: {
                options: config,
                noDataText: ''
            },
            radarBaseConfig: config.radar[0],
            seriesBaseConfig: config.series[0],
            tooltipList: [],
            left: 0,
            customChoose:[]
        }
    },
    components: {
        iChart
    },
    watch: {
        'data': {
            handler: function(val, oldVal) {
                if (val) {
                    this.$refs.poiChart.resize();
                    this.renderChart();
                }
            },
            deep: true,
        },
    },
    mounted() {},
    methods: {
        /**
         * [getItemConfig 获取评分、权重配置]
         * @param  {[Object]} data [{}]
         * @param  {Number} type [0=评分|1=权重]
         * @return {[Object]}      [object]
         */
        getItemConfig(data) {
            let config = {},
                radar = chartUtil.mergeRecursive({}, JSON.parse(JSON.stringify(this.radarBaseConfig))),
                series = chartUtil.mergeRecursive({}, JSON.parse(JSON.stringify(this.seriesBaseConfig))),
                seriesData = [];
            if (data && data.length) {
                let values = data.map((item) => {
                    return item.num || 0;
                });
                let max = Math.max.apply(null, values);

                data.forEach((item) => {
                    radar.nameGap = 8;
                    radar.radius = 170;

                    radar.splitArea = {
                        areaStyle: {
                            color: ['rgba(255,255,255,0)', 'rgba(23,35,61,0.06)']
                        }
                    };
                    radar.splitLine = {
                        lineStyle: {
                            color: 'rgba(23,35,61,0.10)'
                        }
                    };
                    chartUtil.mergeRecursive(radar.splitArea, this.config.splitArea || {});
                    chartUtil.mergeRecursive(radar.splitLine, this.config.splitLine || {});

                    radar.axisLine = {
                        show: true
                    };
                    radar.indicator.push({
                        text: item.func || '',
                        max: max,
                        color: this.config.color || '#17233D'
                    });
                });
                seriesData.push({
                    name: '权重',
                    value: values
                });

                //评分
                series.lineStyle = {
                    normal: {
                        color: '#b9bfcd'

                    }
                };
                series.areaStyle = {
                    normal: {
                        color: 'rgba(131, 143, 158, 1)'
                    }
                };


                chartUtil.mergeRecursive(series, {
                    symbolSize: 0,
                    z: 2,
                    radarIndex: 0,
                });
                series.data = seriesData;
            }
            return {
                radar,
                series
            }
        },
        renderChart() {
            const weight = this.getItemConfig(this.data || []);
            this.poiChart.options.color = ['#01E6C1', '#1F3159'];
            chartUtil.mergeRecursive(this.poiChart.options.tooltip, {
                padding: [0, 0],
                //将tooltip限制在容器内
                confine:true,
                formatter: (params) => {
                    let str = `<div class='radar_tooltip' style='padding:16px'>`;
                    this.tooltipList.forEach((item) => {
                        str += `<div class='tooltip_con'><span class='name'>${item.func}</span><span class='weight'>${item.num}</span></div>`;
                    });
                    return str + '</div>';

                },
                position: this.config.positon || chartUtil.setPosition
            });

            this.poiChart.options.radar = [weight.radar];
            this.poiChart.options.series = [weight.series];
            this.poiChart.noDataText = !this.poiChart.options.series[0].data.length ? '暂无数据' : '';
            this.tooltipList.length = 0;

            (this.data || []).forEach((item, index) => {
                // const weight = this.chart.weight.scores ? this.chart.weight.scores[index] : {};
                this.tooltipList.push({
                    func: item.func,
                    num: item.num || 0,
                    // weight: weight.value || 0,
                });
            })
        },
    }
}
</script>
