<template>
    <div class="shop_list_wrapper">
        <div>推荐商家</div>
        <div class='filter'>

        </div>
        <div class='shop_list'>
            <Shop v-for='item in shopData' :data='item' :key='item.id'></Shop>
        </div>
    </div>
</template>
<script>
import Shop from '@/views/main/shopList/shop';
import { shopsData } from '@/assets/mock/shop-list-data';
export default {
    props: {
        data: Object
    },
    data() {
        return {
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
    height:250px;

    
}
</style>
