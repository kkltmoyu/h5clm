<template>
    <div class="order_wrapper">
        <div class='content' @click='orderEv("inspect")'>
            <div class='l'>
                <img :src='data.src' :alt='data.name'/>
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
                    <span class='cost'>{{data.cost}}</span>
                </div>
            </div>
        </div>
        <div class='opeartion'>
            <mt-button type="default" v-if='data.isComment' @click='orderEv("again")'>再来一单</mt-button>
            <mt-button type="default" v-else @click='orderEv("comment")'>评价</mt-button>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        data:{
            type:Object,
            default:{}
        }
    },
    components:{
    },
    data() {
        return {
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
    width:100%;
    background: #fff;
    border:f-cal-border-width(1) solid #ebebeb;

    .content{
        display:flex;
        .l{
            img{
                width:80px;
                height:80px;
            }
        }

        .r{
            flex:1;
            .top{
                border-bottom:f-cal-border-width(1) solid #ebebeb;
                .i_l{

                }

                .i_r{

                }
            }

            .bottom{

            }
        }
    }
    .opeartion{
        display:flex;
        justify-content: flex-end;
    }
}

.order_wrapper:not(:first-child){
    margin-top:10px;
}
</style>