<template>
    <div class="shop_list_wrapper">
        <div class='recommend_shops'>周边商家</div>
        <div class='filter'>
            <div class='l'></div>
            <div class='r'></div>
        </div>
        <div class='shop_list'>
            <Shop v-for='item in datas' :data='item' :key='item.id' @emitEv='emitEv'></Shop>
        </div>
    </div>
</template>
<script>
import Shop from '@/views/main/take-away/main/shop-list/shop';
import { shopsData } from '@/assets/mock/take-away/shop-list-data';
export default {
    data() {
        return {
            datas:shopsData
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
        emitEv(type,data){
            this.$emit('emitEv',type,data);
        },
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop_list_wrapper {
    width:100%;
    font-size:0.5rem;
    margin-top:10px;

    .recommend_shops{
        font-size:0.3rem;
        text-align: left;
        font-weight:600;
        padding-left:10px;
    }
    
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
