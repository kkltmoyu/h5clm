<template>
    <div class="hello">
        <img src="https://jic.talkingdata.com/lbs/smartselect/business-management/login-normal.svg"></img>
        <mt-loadmore :top-method="loadTop"  ref="loadmore">
            <ul>
                <li v-for="item in list" :key='item'>{{ item }}</li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);
export default {
    name: 'AccountList',
    props: {
        msg: String,
    },
    data() {
        return {
            list:[],
            no:11,
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.initData();
        },
        initData(){
            let arr = []
            for(let i = 0 ; i < 10;i++)
                arr.push(i);
            this.list = arr;
        },
        loadTop(){
            let arr = []
            for(let i = this.no;i < this.no + 10; i ++){
                arr.push(i);
            }
            this.no += 10;
            this.list.unshift(...arr);
            this.$refs.loadmore.onTopLoaded();
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    display: flex;
    flex-direction: column;
    font-size:0.25rem;

    img{
        width:400px;
        height:400px;
    }
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
