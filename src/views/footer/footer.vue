<template>
    <div class="footer_wrapper">
        <a href='javascipt:void(0)' @click='toGen'>gen</a>
        <a href='javascipt:void(0)' @click='toUser'>toUser</a>
        <a href='javascipt:void(0)' @click='toDetail'>toDetail</a>
    </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

export default {
    name: 'Footer',
    props: {
        msg: String
    },
    data() {
        return {

        }
    },
    methods: {
        toGen(){
            console.log('click toGen')
            this.$router.push('general-info');
        },
        toUser(){
            console.log('click toUser')
            this.$router.push('account-list');
        },
        toDetail(){
            console.log('click toDetail')
            this.$router.push('account-detail');
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
