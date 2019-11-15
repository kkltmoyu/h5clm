<template>
    <div class="order_wrapper">
        <div class='content' @click='orderEv("inspect")'>
            <div class='l'>
                <img :src='require("@/"+shopUrl+data.src)' :alt='data.name'/>
            </div>
            <div class='r'>
                <div class='top'>
                    <div class='i_l'>
                        <div class='name'>{{data.name}}</div>
                        <div class='date'>{{data.date}}</div>
                    </div>
                    <div class='i_r'>
                        <span>{{data.status}}</span>
                    </div>
                </div>
                <div class='bottom'>
                    <span class='info'>{{data.info}}</span>
                    <span class='cost'>￥{{data.cost}}</span>
                </div>
            </div>
        </div>
        <div class='opeartion'>
            <mt-button type="default" v-if='data.isComment' @click='orderEv("comment")'>评价</mt-button>
            <mt-button type="default" @click='orderEv("again")'>再来一单</mt-button>
        </div>
    </div>
</template>
<script>
import { shopUrl } from '@/assets/js/constants';

export default {
    props:{
        data:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    components:{
    },
    data() {
        return {
            shopUrl:shopUrl
        }
    },
    methods:{
        orderEv(type){
            this.$emit('orderEv',type,this.data);
        },
    }
}
</script>

<style lang="scss" scoped>
.order_wrapper {
    background: #fff;
    border:f-cal-border-width(1) solid #ebebeb;
    padding:10px;

    .content{
        display:flex;
        .l{
            margin-top:10px;
            img{
                width:80px;
                height:80px;
            }
        }

        .r{
            flex:1;
            .top{
                font-size:0.25rem;
                border-bottom:f-cal-border-width(1) solid #ebebeb;
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding:5px 10px 5px 0;

                .i_l{
                    .name{
                        text-align: left;
                        font-weight: bold;
                        padding:5px 10px;
                    }

                    .date{
                        color:rgba(23,35,61,0.5);
                        padding:5px 10px;
                    }
                }

                .i_r{
                    color:rgba(23,35,61,0.7);
                }
            }

            .bottom{
                font-size:0.25rem;
                padding:15px 10px;
                display:flex;
                justify-content: space-between;
            }
        }
    }
    .opeartion{
        display:flex;
        justify-content: flex-end;
        padding:10px 10px;
    }
}

.order_wrapper:not(:first-child){
    margin-top:10px;
}
</style>