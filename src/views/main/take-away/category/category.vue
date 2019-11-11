<template>
    <div class="category_wrapper">
        <mt-swipe @change="handleChange">
            <mt-swipe-item>
                <div class='swipe'>
                    <span v-for='item in ctlist1' :key='item.title' class='item' @click='chosenCategory'>
			 	        <img :alt='item.title' :src='require("@/" + staticUrl + item.icon + suf)'/>
                        <span>{{item.title}}</span>
                    </span>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class='swipe'>
                    <span v-for='item in ctlist2' :key='item.title' class='item' @click='chosenCategory'>
			 	        <img :alt='item.title' :src='require("@/" + staticUrl + item.icon + suf)'/>
                        <span>{{item.title}}</span>
                    </span>
                </div>
            </mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
import { categoryList, categoryUrl } from '@/assets/js/constants';
const  maxPerPage = 8;
export default {
    props: {
        data: Object
    },
    data() {
        return {
            ctlist1:categoryList.slice(0,maxPerPage),
            ctlist2:categoryList.slice(maxPerPage),
            staticUrl:categoryUrl,
            suf:'.webp'
        }
    },
    mounted(){
    },
    methods: {
        handleChange(){
        },
        chosenCategory(){

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category_wrapper {
    width:100%;
    font-size:0.5rem;
    height:250px;

    .swipe{
        display:flex;
        flex-wrap: wrap;

        .item{
            width:25%;
            display:flex;
            flex-direction: column;
            font-size:0.25rem;

            img{
                width:80px;
                height:80px;
            }

            span{
                font-size:0.125rem;
            }
        }
    }
}
</style>
