<template>
    <div class="new_wrapper">
        <span v-for='item in data' :key='item.id' class='item'>
            <img :src='require("@/"+path+item.src)' :alt='item.name'/>
            <span>{{item.name}}</span>
        </span>
    </div>
</template>
<script>
import { recommendUrl } from '@/assets/js/constants';
export default {
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    components:{
    },
    data() {
        return {
        	path: recommendUrl + 'nRecommend/'
        }
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.new_wrapper {
    overflow-x:auto;
    display:inline-flex;
    padding:10px 10px;
    white-space: nowrap;
    max-width:100%;
    box-sizing: border-box;

	.item{
        display:flex;
        flex-direction: column;
        min-width:100px;
        align-items: center;

        img{
            width:50px;
            height:50px;
        }

        span{
            font-size:0.25rem;
            margin-top:5px;
        }
    }
}

</style>