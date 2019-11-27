<template>
    <div class="recommend_wrapper">
        <div class='hot'>
            <p class='title'>热销</p>
            <Hot :data='hotData'></Hot>
        </div>
        <div class='favour'>
            <p class='title'>猜你喜欢</p>
            <Favourite :data='favouriteData'></Favourite>
        </div>
        <div class='new'>
            <p class='title'>新品上架</p>
            <New :data='newData'></New>
        </div>
    </div>
</template>
<script>
import New from '@/views/main/take-away/main/recommend/new';
import Favourite from '@/views/main/take-away/main/recommend/favourite';
import Hot from '@/views/main/take-away/main/recommend/hot';

import { fData } from '@/assets/mock/take-away/favourite-recommend';
import { hData } from '@/assets/mock/take-away/hot-recommend';
import { nData } from '@/assets/mock/take-away/new-recommend';

export default {
    components:{
        New,
        Favourite,
        Hot,
    },
    data() {
        return {
            newData: nData,
            hotData: hData,
            favouriteData: fData,
        }
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.recommend_wrapper {
    font-size:0.3rem;

    .title{
        text-align: left;
        padding-left:10px;
    }
    .hot,.favour,.new{
        margin-top:10px;
    }
}

</style>