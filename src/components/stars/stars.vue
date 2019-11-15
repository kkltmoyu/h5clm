<template>
    <div class="stars_wrapper">
        <i :class='["icon","iconfont","iconstar",value >= n ? "chosen":"unchosen"]' v-for='n in max' :key='n' @click='chose(n)'></i>
    </div>
</template>
<script>

export default {
    props:{
        max:{
            type:Number,
            default:5
        }
    },
    components: {
    },
    data() {
        return {
           value:0
        }
    },
    methods: {
        chose(n){
            this.value = n;
        }
    }
}
</script>

<style lang="scss" scoped>
.stars_wrapper {
    font-size:0.3rem;
    i{
        cursor:pointer;
    }

    i:not(:last-child){
        margin-right:10px;
    }

    .chosen{
        color:#f5a623;
    }

    .unchosen{
        color:#e9e9e9;
    }
}
</style>