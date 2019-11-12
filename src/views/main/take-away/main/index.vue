<template>
    <div class="take_away_main_wrapper">
		<Locate :data='locate'></Locate>
		<SearchAll></SearchAll>
		<Activity></Activity> 
		<Category></Category>
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
		Category
    },
    data() {
        return {
        	locate:{
        		value:'bj'
        	}
        }
    }
}
</script>

<style lang="scss" scoped>
.take_away_wrapper {
   
}

</style>