
<template>
    <div class="industry_inspect">
        <i-chart :options="poiChart.options" :height="height" :width='width' ref="poiChart1" :noDataText="poiChart.noDataText"></i-chart>
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
    name: 'industryInspect',
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
                return '600px';
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

    },
    data() {
        const config = chartConfig.getBarBaseConfig();
        return {
            poiChart: {
                options: config,
                noDataText: ''
            },
        }
    },
    components: {
        iChart
    },
    watch: {
        'data': {
            handler: function(val, oldVal) {
                if (val) {
                    this.$refs.poiChart1.resize();
                    this.renderChart();
                    this.$refs.poiChart1.resize();

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
            let config = Object.assign({}, chartConfig.getBarBaseConfig(),this.config);
                // radar = chartUtil.mergeRecursive({}, JSON.parse(JSON.stringify(this.getBarBaseConfig()))),
            return config;
        },
        formatData(){
            let xAxisData = [],
                seriesData = [];
            this.poiChart.noDataText = this.data.length ? '' : "没有数据";

            for(let val of this.data){
                xAxisData.push(val.brand);
                seriesData.push(val.num);
            }
            return {
                xAxisData,
                seriesData
            }
        },
        renderChart() {
            let config = this.getItemConfig();
            let result = this.formatData();
            config.xAxis[0].data = result.xAxisData;
            config.series[0].data = result.seriesData;

            this.poiChart.options = config;
        },
    }
}
</script>
