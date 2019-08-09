<template>
    <div class="hello">
        <IndustryBelong :data='industryBelong.data' :config='industryBelong.config' width='100%' :height='300'></IndustryBelong>
        <!-- <canvas id="drawing" height="300" width="300" style="border:1px solid #d3d3d3;"></canvas>  -->
        <!-- <canvas id="drawing" width="600" height="600"></canvas> -->
         <FuncUsed :data='funcUsed.data' :height='300' width='300px'></FuncUsed>
    </div>
</template>
<script>
import constants from '@/assets/js/constants';
import IndustryBelong from '@/components/chart/general-info/IndustryBelong';
import IndustryInspect from '@/components/chart/general-info/industryInspect';
import genChartConfig from './genChartConfig';
import FuncUsed from '@/components/chart/general-info/funcUsed';
import IntentionBuild from '@/components/chart/general-info/intentionBuild';
import PortraitCall from '@/components/chart/general-info/portraitCall';

import {
    mapState,
    mapMutations,
} from 'vuex'

export default {
    name: 'GeneralInfo',
    data() {
        return {
            industryBelong:{
                data:[],
                config:genChartConfig.industryChartConfig,
            },
            funcUsed:{
                data:[],
            },
        }
    },
    computed: {
        ...mapState(['app']),
    },
    components:{
        IndustryBelong,
        FuncUsed,
        IndustryInspect,
        IntentionBuild,
        PortraitCall,
    },
    mounted() {
        this.init();
    },
    watch: {
        'app.currentSource': {
            handler(val, oldVal) {
                this.getData(val.value);
            }
        },
    },
    methods: {
        init(){
            this.getData(this.app.currentSource.value);
            // this.draw();
        },
        draw(){
            var drawing = document.getElementById("drawing");

            // 确定浏览器支持<canvas>元素
            if (drawing.getContext){
                var context = drawing.getContext("2d");
                context.scale(3, 3);
                // context.strokeStyle = '#000'
                // context.lineWidth = 1
                // context.strokeRect(10, 10, 100, 100)
                // 绘制红色矩形
                // context.fillStyle = "#ff0000";
                // context.fillRect(10, 10, 50, 50);

                // context.fillStyle = "rgba(0, 0, 255, 1)";
                // context.fillRect(30, 30, 50, 50);
            }
        },
        getData(source){
            this.getUserIndustrySummary(source);
            // this.getUserSourceSummary(source);
            // this.getPermissionCitySummary(source);
            this.getPermissioFunctionSummary(source);
            // this.getBrandRelationIndustrySummary();
            // this.getBrandRelationNumberAvg(source);
            // this.getStoreCreateSummary(source);
            // this.getInterfaceCallSummary(source);
        },
        getUserIndustrySummary(source){
            let url = this.$resource.userIndustrySummary + '?source=' + source;

            const ax = this.$axios(this.$utils.makeRequest({
                url: url,
                method: 'get'
            }))

            this.$axios.all([ax])
                .then((response) => {
                    if (response[0].status === 200) {
                        this.industryBelong.data = response[0].data.data;
                    }
                })
                .catch((response) => {
                    if (response) {
                        this.$Message.error('连接服务器失败');
                    } 
                })
        },
        getPermissioFunctionSummary(source){
            let url = this.$resource.permissioFunctionSummary + '?source=' + source;
            const ax = this.$axios(this.$utils.makeRequest({
                url: url,
                method: 'get'
            }))

            this.$axios.all([ax])
                .then((response) => {
                    if (response[0].status === 200) {
                        this.funcUsed.data = response[0].data.data;
                    }
                })
                .catch((response) => {
                    if (response) {
                        this.$Message.error('连接服务器失败');
                    } 
                })
        },
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
    display: flex;
    flex-direction: column;
    .row_one {
        width: 100%;
        height: 100px;
        position: relative;
        border: none;
        // border-bottom:1px solid black;
        margin-bottom: 30px;
        // background:gray;
    }
    .row_one:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid #000;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }
    .row_two {
        width: 100%;
        height: 200px;
        background: yellow;
    }
    .row_three {
        width: 100%;
        height: 100px;
        background: gray;
    }
}
</style>
