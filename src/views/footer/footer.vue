<template>
    <div class="footer_wrapper">
        <a href='javascipt:void(0)' @click='pageTo("take")'>wai</a>
        <a href='javascipt:void(0)' @click='pageTo("orders")'>or</a>
        <a href='javascipt:void(0)' @click='pageTo("info")'>in</a>
    </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

export default {
    props: {
        msg: String
    },
    data() {
        return {
            routeMap:{
                take:'take-away',
                order:'orders',
                info:'user-info'
            }
        }
    },
    methods: {
        pageTo(name){
            this.$router.push(routeMap[name]);
        },
       
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer_wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    border-top:1px solid black;

    a{
        color:#ebebeb;
        text-decoration: none;
        font-size:0.25rem;
        flex:1;
        line-height: 100px;
    }
    a:not(:first-child){
        border-left:1px solid #ebebeb;
    }
    a:hover{
        cursor: pointer;
    }
}
</style>
