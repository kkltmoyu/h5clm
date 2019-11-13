<template>
    <div class="order_detail_wrapper">
        <div class='title'>
            <i class='back iconfont iconarrow-lift'></i>
            <div class='status'>订单{{datas.status}}</div>
        </div>
        <div class='deliver_area'>
            <div class='name'>{{datas.name}}</div>
            <div
                class='item_wrapper'
                v-for='item in datas.foodList'
                :key='item.id'
            >
                <div class='l'>
                    <img
                        :src='datas.src'
                        :alt='datas.name'
                    />
                    <span class='f_name'>{{item.name}}</span>
                </div>
                <div class='r'>
                    <span class='number'>x{{item.number}}</span>
                    <span class='cost'>{{item.cost}}</span>
                </div>
            </div>
        </div>
        <div class='comment'></div>
    </div>
</template>
<script>
import { orderDetail } from '@/assets/mock/orders/order-detail-data'
export default {
    // props:{
    //     data:{
    //         type:Object,
    //         default:{}
    //     }
    // },
    components: {
    },
    data() {
        return {
            datas: orderDetail
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.order_detail_wrapper {
    width: 100%;
    background: $bg-gray;

    .title {
    }

    .deliver_area {
        .item_wrapper {
            display: flex;

            .l {
                flex: 1;
            }

            .r {
                width: 100px;
            }
        }
    }
}
</style>