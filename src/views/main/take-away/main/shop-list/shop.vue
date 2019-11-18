<template>
    <div class="shop_wrapper" @click='chosen'>
       <div class='img_wrapper'>
           <img :src='require("@/"+shopUrl+data.src)' :alt='data.name'/>
       </div>
       <div class='info_wrapper'>
           <div class='title'>{{data.name}}</div>
           <div class='row'>
                <div class='l'>
                    <i class='star iconfont iconstar'></i>
                    <span class='rate'>{{data.rating}}</span>
                    <span class='sale'>月售{{data.sale_count}}</span>
                </div>
           </div>
           <div class='row'>
               <div class='l'>
                    <span class='send_line'>￥{{data.send_line}}起送</span>
                    <span class='delivery_fee'>配送￥{{data.float_delivery_fee}}</span>
               </div>
               <div class='r'>
                   <span class='time'>{{data.wait}}分钟</span>
                   <span class='distance'>{{data.distance}}m</span>
               </div>
           </div>
           <div class='activity'>
               <span v-for='item in data.activities' :key='item.name' class='item'>{{item.name}}</span>
           </div>
           <div class='support'>
               <span v-for='item in data.supports' :key='item.name' class='item'>{{item.name}}</span>
           </div>
       </div>
    </div>
</template>
<script>
import { shopUrl } from '@/assets/js/constants';

export default {
    props: {
        data: Object
    },
    data() {
        return {
            shopUrl:shopUrl,
        }
    },
    computed:{
       
    },
    mounted(){
    },
    methods: {
        chosen(){
            this.$emit('emitEv','chosen',this.data);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop_wrapper {
    // width:100%;
    font-size:0.5rem;
    display:flex;
    margin-top:10px;
    padding:0 10px;

    .img_wrapper{
        img{
            width:50px;
            height:50px;
        }
    }

    .info_wrapper{
        flex:1;
        border-bottom:f-cal-border-width(1) solid #ebebeb;
        padding: 10px 15px;

        .title{
            font-size:0.3rem;
            font-weight:400;
            text-align: left;
        }

        .row{
            display:flex;
            justify-content: space-between;
            align-items: center;
            font-size:0.25rem;
            margin-top:5px;

            .l{
                .star,.rate{
                    color:rgb(255, 132, 84);
                }

                .rate{
                    margin:0 5px;
                }

                .sale{
                    color:rgba(23, 35, 61, 0.55);
                }

                .send_line,.delivery_fee{
                    color:rgba(23, 35, 61, 0.55);
                }
                .send_line{
                    margin-right:10px;
                }
            }

            .r{
                color:rgba(23, 35, 61, 0.55);
                .time{
                    margin-right:10px;
                }
            }
        }

        .activity{
            font-size:0.2rem;
            text-align: left;
            margin-top:10px;
            margin-bottom:10px;

            .item{
                background: rgba(233, 134, 95, 0.2);
                color:rgba(255, 132, 84);
                padding: 2px 5px;
            }

            .item:not(:first-child){
                margin-left:5px;
            }
        }

        .support{
            font-size:0.2rem;
            text-align: left;

            .item{
                color:rgb(201, 37, 37);
                padding:2px 5px;
                border:f-cal-border-width(1) solid rgba(201, 37, 37,0.8);
            }
        }
    }
}
</style>
