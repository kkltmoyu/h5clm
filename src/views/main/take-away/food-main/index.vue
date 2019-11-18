<template>
    <div class="food_main_wrapper">
        <!-- <div class='header'>
            <div class='bg_wrapper'>
                <img :src='require("@/" + foodUrl+vari+data.src)'/>
            </div>
            <div class='shop_pic'>
                <img :src='require("@/" + foodUrl+vari+data.src)'/>
            </div>
        </div> -->
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
            vari:'myps/'
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.food_main_wrapper {
    

    
}

</style>