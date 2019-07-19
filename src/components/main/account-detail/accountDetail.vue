<template>
    <div class="hello">
        <mt-range v-model="rangeValue"></mt-range>
        <div class='row_one'>dddddddddddddd</div>
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
.hello {
    display: flex;
    flex-direction: column;
    .row_one {
        width: 100%;
        height: 100px;
        position: relative;
        border: none;
        // border-bottom:1px solid black;
        margin-bottom: 30px;
        // background:gray;
    }
    .row_one:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid #000;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }
    .row_two {
        width: 100%;
        height: 200px;
        background: yellow;
    }
    .row_three {
        width: 100%;
        height: 100px;
        background: gray;
    }
}
</style>
