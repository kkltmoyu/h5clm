<template>
    <div class="take_away_main_wrapper">
		<div class='bg'>
			<Locate :data='locate'></Locate>
			<SearchAll></SearchAll>
		</div>
		<Activity></Activity> 
		<Category></Category>
		<ShopList @emitEv='evDispatch'></ShopList>
    </div>
</template>
<script>
import Locate from '@/views/main/take-away/main/locate/locate';
import SearchAll from '@/views/main/take-away/main/search-all/search-all';
import Activity from '@/views/main/take-away/main/activity/activity';
import Category from '@/views/main/take-away/main/category/category';
import ShopList from '@/views/main/take-away/main/shop-list/shop-list';

export default {
    components:{
    	Locate,
    	SearchAll,
		Activity,
		Category,
		ShopList
    },
    data() {
        return {
        	locate:{
        		value:'bj'
        	}
        }
	},
	methods:{
		evDispatch(type,data){
            switch(type){
                case 'chosen':
					this.chosen(data);
                    break;
                default:
                    break;
            }
		},
		chosen(data){
			this.$router.push({
				name:'food-main'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.take_away_wrapper {
   .bg{
	   background: #2185F0;
   }
}

</style>