<template>
    <div class="orders_wrapper">
        <div class='title'>我的订单</div>
        <OrderList :data='ordersData' @orderEv='orderEv'></OrderList>
    </div>
</template>
<script>
import OrderList from '@/views/main/orders/main/order-list/order-list';
import { ordersData } from '@/assets/mock/orders/order-list-data';

export default {
    components:{
        OrderList
    },
    data() {
        return {
            ordersData:ordersData
        }
    },
    methods:{
        orderEv(type,params){
            switch(type){
                case 'again':

                    break;
                case 'comment':
                    
                    break;
                case 'inspect':
                    
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.orders_wrapper {
   background: $bg-gray;
}

</style>