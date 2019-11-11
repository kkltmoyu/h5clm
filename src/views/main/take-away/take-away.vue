<template>
    <div class="take_away_wrapper">
		<Locate :data='locate'></Locate>
		<SearchAll></SearchAll>
		<!-- <Activity></Activity>  -->
		<Category></Category>
    </div>
</template>
<script>
import Locate from '@/views/main/take-away/locate/locate';
import SearchAll from '@/views/main/take-away/search-all/search-all';
import Activity from '@/views/main/take-away/activity/activity';
import Category from '@/views/main/take-away/category/category';


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