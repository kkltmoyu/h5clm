<template>
    <div class="order_detail_wrapper">
        <div class='title'>
            <div class='status'>订单{{datas.status}}</div>
            <i class='back iconfont iconarrow-right'></i>
        </div>
        <div class='card deliver_area'>
            <div class='name'>{{datas.name}}</div>
            <div
                class='item_wrapper'
                v-for='item in datas.foodList'
                :key='item.id'
            >
                <div class='l'>
                    <img
                        :src='require("@/"+foodUrl+item.src)'
                        :alt='item.name'
                    />
                    <span class='f_name'>{{item.name}}</span>
                </div>
                <div class='r'>
                    <span class='number'>x{{item.number}}</span>
                    <span class='cost'>{{item.cost}}</span>
                </div>
            </div>
        </div>
        <div class='comment_wrapper card'>
            <p>用餐体验满意度</p>
            <Stars :max="5" class='stars'></Stars>
            <mt-field placeholder="请输入评价信息" type="textarea" rows="4" v-model="comment"></mt-field>
        </div>
    </div>
</template>
<script>
import Stars from '@/components/stars/stars';
import { orderDetail } from '@/assets/mock/orders/order-detail-data';
import { foodUrl } from '@/assets/js/constants';

export default {
    // props:{
    //     data:{
    //         type:Object,
    //         default:{}
    //     }
    // },
    components: {
        Stars
    },
    data() {
        return {
            datas: orderDetail,
            foodUrl: foodUrl,
            comment:'',
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.order_detail_wrapper {
    background: $bg-gray;
    // padding: 0 10px;
    position: relative;
    height:100%;

    .title {
        font-size:0.35rem;
        display:flex;
        padding:15px 0 15px 10px;
        // background: linear-gradient(#2185F0,#fff);
        background: #2185F0;
        color:#fff;
    }

    .card {
        margin-top:10px;
        background: #fff;
        box-shadow: 0 1px 2px 0 rgba(23, 35, 61, 0.35);
        width:100%;

        .name{
            text-align: left;
            padding:10px 15px;
            border-bottom:f-cal-border-width(1) solid #ebebeb;
            font-size:0.3rem;
        }
        .item_wrapper {
            font-size:0.25rem;
            display: flex;
            justify-content: space-between;

            .l {
                padding:15px 25px;
                flex: 1;
                text-align: left;
                display:flex;
                align-items: center;

                img{
                    width:30px;
                    height:30px;
                    margin-right:10px;
                }
            }

            .r {
                display:flex;
                justify-content: flex-end;
                align-items: center;
                padding:15px 25px;
                text-align: right;
                width: 100px;

                .cost{
                    margin-left:20px;
                }
            }
        }
    }

    .comment_wrapper{
        padding-bottom:10px;
        p{
            font-size:0.3rem;
            padding-top:20px;
        }

        .stars{
            margin:10px 0;
        }
    }
}
</style>