<template>
    <div class="food_main_wrapper">
        <div class='header'>
            <div class='bg_wrapper'>
                <img :src='require("@/" + foodUrl+vari+data.bg_src)'/>
            </div>
            <div class='shop_pic'>
                <img :src='require("@/" + foodUrl+vari+data.src)' :alt='data.name'/>
            </div>
            <div class='shop_info'>
                <p class='name'>{{data.name}}</p>
                <p class='subscribe'>
                    <span class='comment'>评价{{data.rating}}</span>
                    <span class='sale_per_month'>月售{{data.sold_per_month}}单</span>
                    <span class='wait'>配送约{{data.wait}}分钟</span>
                </p>
                <p class='support_wrapper'>
                    <span class='item' v-for='item in data.supports' :key='item.name'>{{item.name}}</span>
                </p>
            </div>
        </div>
        <div class='content'>
            <div v-for='item in Object.entries(data.list)' :key='item[0]' class='category'>
                <div class='title'>{{item[0]}}</div>
                <div class='food_wrapper' >
                    <div class='food' v-for='f in item[1]' :key='f.id'>
                        <div class='img_wrapper'>
                            <img :src='require("@/"+foodUrl+vari+f.src)' :alt='f.name'/>
                        </div>
                        <div class='food_info'>
                            <p class='name'>{{f.name}}</p>
                            <p class='subscribe'>{{f.subscribe}}</p>
                            <p class='addition'>
                                <span>月售{{f.sold_per_month}}</span>
                                <span>好评{{f.nice_rate}}</span>
                            </p>
                            <div class='opeartion'>
                                <i class='iconfont iconminus' @click='minus(f)' v-if='f.chosen >= 1'></i>
                                <i class='iconfont iconadd' @click='add(f)'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { shopFoodData } from '@/assets/mock/take-away/shop-food-data';
import { foodUrl } from '@/assets/js/constants';

export default {
    components:{
    },
    data() {
        return {
            foodUrl:foodUrl,
            data:shopFoodData,
            vari:'myps/',

        }
    },
    methods:{
        minus(item){
            item.chosen --;
        },
        add(item){
            if(!item.chosen)
                item.chosen = 1;
            else
                item.chosen ++;
        },

    }
}
</script>

<style lang="scss" scoped>
.food_main_wrapper {
    //60px为下方菜单按钮高度
    height:calc(100% - 60px);
    .header{
        position:relative;
        .bg_wrapper{
            img{
                width:100%;
                height:90px;
            }
        }

        .shop_pic{
            position:absolute;
            top:40px;
            display:flex;
            align-items: center;
            justify-content: center;
            width:100%;

            img{
                width:68px;
                height:68px;
            }
        }

        .shop_info{
            margin-top:20px;
            font-size:0.2rem;

            .name{
                font-size:0.30rem;
                font-weight:600;
            }

            .subscribe{
                margin:10px 0;
                color:#666;

                .sale_per_month,.wait{
                    margin: 0 10px;
                }
            }

            .support_wrapper{
                .item{
                    color:rgb(221, 45, 45);
                    padding:2px 5px;
                    border:f-cal-border-width(1) solid rgba(221, 45, 45,0.8);
                }
                .item:not(:first-child){
                    margin-left:5px;
                }
            }
        }
    }

    .content{
        text-align:left;
        font-size:0.25rem;
        //178px为header高度
        height:calc(100% - 178px);
        overflow-y:auto;
        .category{
            padding-left:10px;
            margin-top:10px;
            .title{
                font-weight:600;
            }

            .food_wrapper{
                .food{
                    display:flex;
                    align-items:flex-start;
                    .img_wrapper{
                        margin-top:5px;
                        img{
                            width:50px;
                            height:50px;
                        }
                    }

                    .food_info{
                        flex:1;
                        padding:5px 10px;

                        .name{
                            font-size:0.3rem;
                            font-weight:600;
                            margin-bottom:5px;
                        }

                        .subscribe{
                            margin-bottom:5px;
                            color:rgba(23, 35, 61, 0.55);
                        }

                        .addition{
                            color:rgba(23, 35, 61, 0.55);

                            span:not(:first-child){
                                margin-left:10px;
                            }
                        }

                        .opeartion{
                            display:flex;
                            justify-content: flex-end;

                            i{
                                border-radius:50%;
                            }

                            i:not(:first-child){
                                margin-left:15px;
                            }

                            .iconadd{
                                background: #2185F0;
                                color:#fff;
                            }

                            .iconminus{
                                color: #2185F0;
                                background:#fff;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>