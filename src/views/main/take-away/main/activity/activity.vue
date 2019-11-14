<template>
    <div class="activity_wrapper">
	    <mt-swipe @change="handleChange">
			<mt-swipe-item v-for='item in list' :key='item.name'> 
			 	<img :alt='item.name' :src='item.src'/>
			</mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
import { staticUrl } from '@/assets/js/constants';
export default {
    props: {
        data: Object
    },
    data() {
        return {
            list:[{
            	name:'1',
            	src:require('@/'+ staticUrl +'swipe1.webp')
            },{
            	name:'2',
            	src:require('@/'+ staticUrl +'swipe2.webp')
            },{
            	name:'3',
            	src:require('@/'+ staticUrl +'swipe3.webp')
            }]
        }
    },
    mounted(){
    },
    methods: {
        handleChange(){
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.activity_wrapper {
	position:absolute;
	top:100px;
    width:100%;
    font-size:0.5rem;
    height:200px;
}
</style>
