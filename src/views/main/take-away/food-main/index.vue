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
                    <span class='sale_per_month'>配送约{{data.wait}}分钟</span>
                </p>
                <p class='support_wrapper'>
                    <span class='item' v-for='item in data.supports' :key='item.name'>{{item.name}}</span>
                </p>
            </div>
        </div>
        <div class='content'>

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
        
    }
}
</script>

<style lang="scss" scoped>
.food_main_wrapper {
    
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

                .sale_per_month{
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
    
}

</style>