<template>
    <div class="shop_list_wrapper">
        <div>推荐商家</div>
        <div class='filter'>
            <div class='l'></div>
            <div class='r'></div>
        </div>
        <div class='shop_list'>
            <Shop v-for='item in datas' :data='item' :key='item.id'></Shop>
        </div>
    </div>
</template>
<script>
import Shop from '@/views/main/take-away/main/shop-list/shop';
import { shopsData } from '@/assets/mock/take-away/shop-list-data';
export default {
    data() {
        return {
            datas:shopData
        }
    },
    components:{
        Shop
    },
    computed:{
       
    },
    mounted(){
    },
    methods: {
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop_list_wrapper {
    width:100%;
    font-size:0.5rem;
    
    .filter{
        display:flex;
        justify-content: space-between;

        .l{
            display:flex;
        }
    }

    .shop_list{
        width:100%;
        overflow-y:auto;
    }
}
</style>
