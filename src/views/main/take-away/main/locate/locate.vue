<template>
    <div class="locate_wrapper">
        <i class="iconfont icontogo i_locate"></i>
        <span class='location'>{{data.value}}</span>
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
    height: 50px;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    padding-left:10px;
    color:#fff;

    i{
        font-size:0.3rem;
    }

    .location{
        font-size:0.25rem;
    }
}
</style>
