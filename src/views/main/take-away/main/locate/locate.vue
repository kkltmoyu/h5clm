<template>
    <div class="locate_wrapper">
        <i class="iconfont icontogo i_locate"></i>
        <span>{{data.value}}</span>
        <i class="iconfont iconarrow-down"></i>
    </div>
</template>
<script>
export default {
    props: {
        data: Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        
       
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.locate_wrapper {
    font-size:0.5rem;
    text-align:left;
    padding:0.1rem 0.2rem;
    i{
        font-size:0.5rem;
    }

    .i_locate{
        color:#2185F0;
    }
}
</style>
