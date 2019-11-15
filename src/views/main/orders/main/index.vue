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
                    this.inspectOrder(params);
                    break;
                default:
                    break;
            }
        },
        inspectOrder(params){
            this.$router.push({
                name:'order-detail'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.orders_wrapper {
    background: $bg-gray;
    height:calc(100% - 50px);
    padding-bottom:30px;
    overflow-y:auto;
    // margin-top:$back-header;

    .title{
        font-size: 0.3rem;
        padding-left:20px;
        display:flex;
        align-items: center;
        height:40px;
        justify-content: flex-start;
    }
}

</style>