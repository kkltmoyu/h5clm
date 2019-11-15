<template>
    <div class="order_list_wrapper">
        <Order v-for='item in data' :data='item' :key='item.id' @orderEv='orderEv'></Order>
    </div>
</template>
<script>
import Order from '@/views/main/orders/main/order/order';

export default {
    props:{
        data:{
            type:Array,
            default:()=>{
                return [];
            }
        }
    },
    components:{
        Order
    },
    created(){
    },
    data() {
        return {
        }
    },
    methods:{
        orderEv(type,params){
            this.$emit('orderEv',type,params);
        }
    }
}
</script>

<style lang="scss" scoped>
.order_list_wrapper {
   height:100%;
}

</style>