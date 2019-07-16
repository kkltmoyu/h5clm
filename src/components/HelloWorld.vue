<template>
    <div class="hello">
        <mt-range v-model="rangeValue"></mt-range>
        <div class='row_one'></div>
        <div class='row_two'></div>
        <div class='row_three'></div>
        
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            rangeValue: 30
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
    display:flex;
    flex-direction:column;

    .row_one{
        width:100%;
        height:100px;
        background:gray;
    }

    .row_two{
        width:100%;
        height:200px;
        background:yellow;
    }

    .row_three{
        width:100%;
        height:100px;
        background:gray;
    }
}

</style>
