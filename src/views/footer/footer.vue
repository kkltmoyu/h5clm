<template>
    <div class="footer_wrapper">
        <a href='javascipt:void(0)' @click='pageTo(item.name)' v-for='item in list' :key='item.title'>
            <i :class="['iconfont ' + item.icon ]"></i>
            <span>{{item.title}}</span>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        msg: String
    },
    data() {
        return {
            list:[{
                name:'take',
                icon:'iconwaimai',
                title:'外卖'
            },{
                name:'orders',
                icon:'iconorder',
                title:'订单'
            },{
                name:'info',
                icon:'iconusercenter',
                title:'用户'
            }],
            routeMap:{
                take:'take-away',
                orders:'orders',
                info:'user-info'
            }
        }
    },
    methods: {
        pageTo(name){
            this.$router.push({
                name:this.routeMap[name]
            });
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
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    border-top:f-cal-border-width(1) solid #8b8585;

    a{
        color:#8b8585;
        text-decoration: none;
        font-size:0.25rem;
        height:100%;
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;

        i{
            font-size:0.5rem;
        }

        span{
            font-size:0.25rem;
        }
    }
    a:not(:first-child){
        border-left:f-cal-border-width(1) solid #8b8585;;
    }
    a:hover{
        cursor: pointer;
    }
}
</style>
