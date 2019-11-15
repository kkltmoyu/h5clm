<template>
    <div class="search_wrapper">
       <mt-search v-model="value" @keyup.enter.native='search' placeholder='搜索'></mt-search>
    </div>
</template>
<script>
export default {
    props: {
        data: Object
    },
    data() {
        return {
            value:''
        }
    },
    methods: {
        search(){
            console.log('search')
        }
       
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search_wrapper {
    width:100%;
    font-size:0.5rem;
}
</style>
<style lang="scss">
.search_wrapper{
    height:60px;
    .mint-searchbar{
        background:#fff;

        .mint-searchbar-inner{
            border: f-cal-border-width(3) solid #d9d9d9;
        }

        .mint-searchbar-cancel{
            font-size:0.3rem;
        }
    }
}
</style>
