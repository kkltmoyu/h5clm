
<template>
    <div class="portrait_call">
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
    name: 'portraitCall',
    props: {
        data: {
            type: Object,
            default: function() {
                return {
                    jd:{
                        data:[]
                    },
                    tencent:{
                        data:[]
                    },
                }
            }
        },
        height: {
            type: Number,
            default: function() {
                return 150;
            }
        },
        config: {
            type: Object,
            default: function() {
                return {};
            }
        },
        width: {
            type: String,
            default: function() {
                return '100%';
            }
        }
    },
    computed: {

    },
    data() {
        const config = chartConfig.getLineBaseConfig();
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
            let config = Object.assign({}, chartConfig.getLineBaseConfig(),this.config);
            return config;
        },
        formatData(){
            let xAxisData = [],
                series = [{
                    name:'腾讯画像',
                    type:'line',
                    smooth:true,
                    areaStyle: {},
                    data:[]
                },{
                    name:'京东画像',
                    type:'line',
                    smooth:true,
                    areaStyle: {},
                    data:[]
                }];
            this.poiChart.noDataText = this.data.jd.data.length > 0 && this.data.tencent.data.length > 0 ? '' : "没有数据";

            let jdData = this.data.jd.data;
            let tencentData = this.data.tencent.data;
            
            for(let item of tencentData){
                xAxisData.push(item.day);
                series[0].data.push(item.num);
            }
            for(let item of jdData){
                series[1].data.push(item.num);
            }
            
            return {
                xAxisData,
                series
            }
        },
        renderChart() {
            let config = this.getItemConfig();
            let result = this.formatData();
            config.xAxis[0].data = result.xAxisData;
            config.series = result.series;

            this.poiChart.options = config;
        },
    }
}
</script>
